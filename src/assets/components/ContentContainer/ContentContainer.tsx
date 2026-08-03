import type React from "react"

type ContentContainerProps = {
      
     children : React.ReactNode,
     className? :string,
     style ?: React.CSSProperties,

    

}

export const ContentContainer = ({children, className,style} : ContentContainerProps) => {
  return (
    <div className={className} style={style}>
        {children}
    </div>
  )
} 