// "use client"

// import { useEffect, useState } from "react"

// export default function ReportCCDProjectComponent() {
//     const [CCDComponent, setCCDComponent] = useState<React.ComponentType | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         let mounted = true;

//         const loadComponent = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
//                 // eslint-disable-next-line @next/next/no-assign-module-variable
//                 const module = await import('ccdPage/ReportLoanUser');
//                 if (mounted) {
//                     setCCDComponent(() => module.default || module);
//                 }
//             } catch (err: any) {
//                 if (mounted) {
//                     setError(err?.message || 'Unknown error');
//                 }
//             } finally {
//                 if (mounted) {
//                     setLoading(false);
//                 }
//             }
//         };

//         loadComponent();

//         return () => {
//             mounted = false;
//         };
//     }, []);

//     return (
//         <div className="space-y-4 -mt-14">
//             <div>
//                 <h1 className="text-3xl font-bold tracking-tight">Report CCD Project</h1>
//                 <p className="text-muted-foreground">Reports from Credit Control Division</p>
//             </div>

//             {!loading && !error && CCDComponent && (
//                 <div className="animate-in fade-in duration-300">
//                     <CCDComponent />
//                 </div>
//             )}
//         </div>
//     )
// }


"use client"

import { useEffect, useState } from "react"
import type { ComponentType } from "react"

export default function ReportCCDProjectComponent() {
  const [CCDComponent, setCCDComponent] =
    useState<ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const loadComponent = async () => {
      try {
        setLoading(true)
        setError(null)

        const remoteModule = await import("ccdPage/ReportLoanUser")

        if (mounted) {
          setCCDComponent(() => remoteModule.default ?? remoteModule)
        }
      } catch (err: unknown) {
        if (mounted) {
          if (err instanceof Error) {
            setError(err.message)
          } else {
            setError("Unknown error")
          }
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadComponent()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="space-y-4 -mt-14">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Report CCD Project
        </h1>
        <p className="text-muted-foreground">
          Reports from Credit Control Division
        </p>
      </div>

      {!loading && !error && CCDComponent && (
        <div className="animate-in fade-in duration-300">
          <CCDComponent />
        </div>
      )}
    </div>
  )
}
