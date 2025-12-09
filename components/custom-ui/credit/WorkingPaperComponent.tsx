"use client"
  
  import { useEffect, useState } from "react";
  
  export function WorkingPaperComponent() {
    const [WorkingPaperCom, setWorkingPaperCom] = useState<React.ComponentType | null>(
      null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      let mounted = true;
  
      const loadComponent = async () => {
        try {
          setLoading(true);
          setError(null);
          // eslint-disable-next-line @next/next/no-assign-module-variable
          const module = await import("ccdPage/WorkingPaper");
          if (mounted) {
            setWorkingPaperCom(() => module.default || module);
          }
        } catch (err: any) {
          if (mounted) {
            setError(err?.message || "Unknown error");
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
  
    return <div>
      {!loading && !error && WorkingPaperCom && (
        <div>
          <WorkingPaperCom/>
        </div>
      )}
      
    </div>;
  }
  