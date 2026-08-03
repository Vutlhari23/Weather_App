type ButtonProp ={
    className?:string,
    label?: string,
    onClick ?: () => void,
    style? : React.CSSProperties
}

export const Button = ({className,label,onClick,style}: ButtonProp) => {
    return(
      <div>
          <button 
          className={className} 
          onClick={onClick}
          style ={{width:"5rem", height: "1.5rem",borderRadius:"8px",borderColor:" lightgray",...style}}>
            {label}
          </button>
        
      </div>
    )
}