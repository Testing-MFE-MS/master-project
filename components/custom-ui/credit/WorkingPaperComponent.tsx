"use client"

import { useEffect, useState, useCallback } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export function WorkingPaperComponent() {
  const [WorkingPaperCom, setWorkingPaperCom] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadComponent = useCallback(async () => {
    let retryCount = 0;
    const maxRetries = 3;

    const attemptLoad = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        if (typeof window !== 'undefined') {
          const loadedModule = await import('ccdPage/WorkingPaper').catch((err) => {
            console.error('Failed to load WorkingPaper:', err);
            throw new Error(`Remote module not available: ${err.message}`);
          });

          setWorkingPaperCom(() => loadedModule.default || loadedModule);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';

        if (retryCount < maxRetries && errorMessage.includes('fetch')) {
          retryCount++;
          console.log(`Retry ${retryCount}/${maxRetries}...`);
          await new Promise(resolve => setTimeout(resolve, 2000 * retryCount));
          return attemptLoad();
        }

        setError(errorMessage);
        console.error('Error loading remote module:', err);
      } finally {
        setLoading(false);
      }
    };

    await attemptLoad();
  }, []);

  useEffect(() => {
    loadComponent();
  }, [loadComponent]);

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="relative w-12 h-12 mx-auto mb-4">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full" />
              <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-muted-foreground font-medium">Loading Working Paper Module...</p>
            <p className="text-xs text-muted-foreground mt-2">
              Connecting to CCD service...
            </p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="flex items-center justify-center min-h-[400px] p-4">
          <div className="text-center max-w-2xl">
            <div className="bg-destructive/10 text-destructive rounded-lg p-6">
              <AlertCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Failed to Load Module</h3>
              <p className="text-sm mb-4 text-muted-foreground">{error}</p>

              <div className="text-xs text-left bg-background/50 p-4 rounded-md mb-4">
                <p className="font-semibold mb-2 text-foreground">Troubleshooting Steps:</p>
                <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Ensure CCD project is running on port 3001</li>
                  <li>Check http://localhost:3001/_next/static/chunks/remoteEntry.js</li>
                  <li>Verify Module Federation configuration in CCD project</li>
                  <li>Restart both projects (CCD first, then Master)</li>
                  <li>Clear browser cache and .next folders</li>
                </ul>
              </div>

              <div className="flex gap-2 justify-center">
                <button
                    onClick={loadComponent}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Retry
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className="animate-in fade-in duration-300">
        {WorkingPaperCom && <WorkingPaperCom />}
      </div>
  );
}