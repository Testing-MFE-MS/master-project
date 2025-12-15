"use client"

import { useEffect, useState } from "react";

export function UserCreditComponent() {
  const [UserCreditCom, setUserCreditCom] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const loadComponent = async () => {
      try {
        setLoading(true);
        setError(null);

        const loadedModule = await import("ccdPage/UserCredit");

        if (mounted) {
          setUserCreditCom(() => loadedModule.default || loadedModule);
        }
      } catch (err) {
        if (mounted) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error';

          if (retryCount < maxRetries && errorMessage.includes('fetch')) {
            retryCount++;
            console.log(`Retry ${retryCount}/${maxRetries}...`);
            setTimeout(loadComponent, 2000);
            return;
          }

          setError(errorMessage);
          console.error('Error loading remote module:', err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadComponent();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading User Credit Module...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center max-w-md">
            <div className="bg-destructive/10 text-destructive rounded-lg p-6">
              <h3 className="font-semibold mb-2">Failed to Load Module</h3>
              <p className="text-sm mb-4">{error}</p>
              <button
                  onClick={() => window.location.reload()}
                  className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div>
        {UserCreditCom && (
            <div>
              <UserCreditCom/>
            </div>
        )}
      </div>
  );
}