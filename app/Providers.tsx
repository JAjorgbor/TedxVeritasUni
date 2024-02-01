'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export const HashValueContext = React.createContext<{
  hashValue?: string
  setHashValue?: any
}>({})

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [hashValue, setHashValue] = React.useState<string>('')
  React.useEffect(() => {
    setHashValue(window.location.hash)
  }, [])
  return (
    <>
      <NextUIProvider navigate={router.push}>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
        <HashValueContext.Provider value={{ hashValue, setHashValue }}>
          {children}
        </HashValueContext.Provider>
      </NextUIProvider>
    </>
  )
}
