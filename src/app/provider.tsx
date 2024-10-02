import React from 'react'
import {NextUIProvider} from "@nextui-org/system";
import { ClerkProvider } from '@clerk/nextjs';
const provider = ({children}:{children:React.ReactNode}) => {
    
  return (
    <ClerkProvider>
    <NextUIProvider>
        {children}
    </NextUIProvider>
    </ClerkProvider>
  )
}

export default provider