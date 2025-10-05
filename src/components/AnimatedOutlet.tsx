import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { useRouter, Outlet, AnyRoute, useMatch } from '@tanstack/react-router';

interface AnimatedOutletProps {
  from: AnyRoute['id']
}

interface AnimatedOutletWrapperProps {
  children: React.ReactNode
}

type TakeSnapshotFn = () => void
type Registry = Map<string, TakeSnapshotFn>

const AnimatedOutletContext = createContext<Registry>(new Map())

function isDescendant(pathname: string, destinationPath: string) {
  return pathname === '/' ||
    (destinationPath.startsWith(pathname) &&
      (destinationPath.length === pathname.length ||
        destinationPath.charAt(pathname.length) === '/'))
}

export function AnimatedOutletWrapper({ children }: AnimatedOutletWrapperProps) {
  const router = useRouter();
  const registry = useRef<Registry>(new Map())

  useEffect(() => {
    const unsubscribe = router.subscribe('onBeforeLoad', ({ toLocation, pathChanged }) => {
      if (pathChanged) {
        const destinationPath = toLocation.pathname
        let takeSnapshot: TakeSnapshotFn | null = null
        let longestLength = 0
        for (const [pathname, snapshotFn] of registry.current.entries()) {
          if (isDescendant(pathname, destinationPath) && pathname.length > longestLength) {
            longestLength = pathname.length
            takeSnapshot = snapshotFn
          }
        }
        if (takeSnapshot) {
          takeSnapshot()
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <AnimatedOutletContext.Provider value={registry.current}>
      {children}
    </AnimatedOutletContext.Provider>
  )
}

export function AnimatedOutlet({ from }: AnimatedOutletProps) {
  const [snapshots, setSnapshots] = useState<{ node: HTMLElement, id: number, scrollY: number }[]>([]);
  const [pathname, setPathname] = useState<string | null>(null)
  const outletRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const registry = useContext(AnimatedOutletContext)

  useEffect(() => {
    if (pathname) {
      registry.set(pathname, () => {
        const outletNode = outletRef.current!;
        const snapshotNode = outletNode.firstChild as HTMLElement;
        if (snapshotNode) {
          // Store current scroll position
          const scrollY = window.scrollY;
          
          // Clone the node
          const node = snapshotNode.cloneNode(true) as HTMLElement;
          
          // Create snapshot with scroll position
          const newSnapshot = { node, id: nextId.current++, scrollY }
          setSnapshots((prevSnapshots) => [...prevSnapshots, newSnapshot]);
          
          // Scroll to top for new page
          window.scrollTo(0, 0);
        }
      });

      return () => { registry.delete(pathname) };
    }
  }, [registry, pathname]);

  const handleTransitionEnd = (id: number) => {
    setSnapshots((prevSnapshots) =>
      prevSnapshots.filter((snapshot) => snapshot.id !== id)
    );
  };

  return (
    <>
      {pathname === null && <GetPathName setPathname={setPathname} from={from} />}
  <div ref={containerRef} className="relative w-full min-h-app">
        {snapshots.map((snapshot) => (
          <div
            key={snapshot.id}
            className="absolute top-0 left-0 right-0 w-full pointer-events-none animate-page-exit"
            style={{ 
              transform: `translateY(-${snapshot.scrollY}px)`,
            }}
            onAnimationEnd={() => handleTransitionEnd(snapshot.id)}
            aria-hidden="true"
            ref={(el) => {
              if (el && snapshot.node) {
                el.innerHTML = '';
                el.appendChild(snapshot.node);
              }
            }}
          />
        ))}

        <div
          key={nextId.current}
          ref={outletRef}
          className="relative w-full animate-page-enter"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

function GetPathName({ from, setPathname }: { from: AnyRoute['id'], setPathname: (pathname: string) => void }) {
  const match = useMatch({ from })
  useEffect(() => {
    setPathname(match.pathname)
  }, [match.pathname, setPathname])
  return null
}
