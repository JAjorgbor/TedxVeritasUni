'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export const HashValueContext = React.createContext<{ hashValue?: string, setHashValue?: any }>({})

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [hashValue, setHashValue] = React.useState<string>('');
  React.useEffect(() => {
    setHashValue(window.location.hash)
  }, []);
  return (
    <>
      <NextUIProvider navigate={router.push}>
        <HashValueContext.Provider value={{ hashValue, setHashValue }}>
          {children}
        </HashValueContext.Provider>
      </NextUIProvider>
    </>
  )
}
