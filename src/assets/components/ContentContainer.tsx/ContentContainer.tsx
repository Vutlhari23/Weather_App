type ContainerProps = {
    className: string,
    children:React.ReactNode,
    style?: React.CSSProperties
}

export const ContentContainer =({className,children,style}: ContainerProps) =>{

    <div className={className} style={style}>
        {children}
    </div>
}