'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function withAuth(Component: any) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('auth_token');
      
      if (!token) {
        router.push('/auth/login');
        return;
      }

      setIsAuthenticated(true);
      setLoading(false);
    }, [router]);

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Chargement...</p>
          </div>
        </div>
      );
    }

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
