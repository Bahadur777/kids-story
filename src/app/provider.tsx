import React from 'react'
import {NextUIProvider} from "@nextui-org/system";
const provider = ({children}:{children:React.ReactNode}) => {
    
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default provider