"use client"

import { useEffect, useState } from "react"

export default function ReportCCDProjectComponent() {
    const [CCDComponent, setCCDComponent] = useState<React.ComponentType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        const loadComponent = async () => {
            try {
                setLoading(true);
                setError(null);
                // eslint-disable-next-line @next/next/no-assign-module-variable
                const module = await import('ccdPage/ReportLoanUser');
                if (mounted) {
                    setCCDComponent(() => module.default || module);
                }
            } catch (err: any) {
                if (mounted) {
                    setError(err?.message || 'Unknown error');
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

    return (
        <div className="space-y-4 -mt-14">

            {!loading && !error && CCDComponent && (
                <div className="animate-in fade-in duration-300">
                    <CCDComponent />
                </div>
            )}
        </div>
    )
}