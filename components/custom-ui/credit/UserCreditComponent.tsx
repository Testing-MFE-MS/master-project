// "use client"

// import { useEffect, useState } from "react";

// export function UserCreditComponent() {
//   const [UserCreditCom, setUserCreditCom] = useState<React.ComponentType | null>(
//     null
//   );
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     let mounted = true;

//     const loadComponent = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         // eslint-disable-next-line @next/next/no-assign-module-variable
//         const module = await import("ccdPage/UserCredit");
//         if (mounted) {
//           setUserCreditCom(() => module.default || module);
//         }
//       } catch (err: any) {
//         if (mounted) {
//           setError(err?.message || "Unknown error");
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     loadComponent();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return <div>
//     {!loading && !error && UserCreditCom && (
//       <div>
//         <UserCreditCom/>
//       </div>
//     )}
    
//   </div>;
// }


"use client"

import { useEffect, useState } from "react"
import type { ComponentType } from "react"

export function UserCreditComponent() {
  const [UserCreditCom, setUserCreditCom] =
    useState<ComponentType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const loadComponent = async () => {
      try {
        setLoading(true)
        setError(null)

        const remoteModule = await import("ccdPage/UserCredit")

        if (mounted) {
          setUserCreditCom(() => remoteModule.default ?? remoteModule)
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
    <div>
      {!loading && !error && UserCreditCom && (
        <div>
          <UserCreditCom />
        </div>
      )}
    </div>
  )
}
