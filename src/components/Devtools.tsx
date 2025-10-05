import { useEffect, useState } from 'react'

// Client-only loader for TanStack devtools so devtools code is not included
// in the server/worker bundle. This follows the TanStack Start practice of
// only mounting devtools in the browser (development only).
export default function Devtools() {
  const [DevtoolsEl, setDevtoolsEl] = useState<any>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return

    let mounted = true

    // Dynamically import devtools only on the client in dev
    Promise.all([
      import('@tanstack/react-devtools').then((m) => m.TanStackDevtools),
      import('@tanstack/react-router-devtools').then((m) => m.TanStackRouterDevtoolsPanel),
      import('../integrations/tanstack-query/devtools').then((m) => m.default),
    ]).then(([TanStackDevtools, TanStackRouterDevtoolsPanel, TanStackQueryDevtools]) => {
      if (!mounted) return

      setDevtoolsEl(() => {
        return function DevtoolsInner() {
          // Render the TanStackDevtools with the router and query panels
          return (
            <TanStackDevtools
              config={{ position: 'bottom-left' }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
                TanStackQueryDevtools,
              ]}
            />
          )
        }
      })
    })

    return () => {
      mounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!DevtoolsEl) return null
  return <DevtoolsEl />
}
