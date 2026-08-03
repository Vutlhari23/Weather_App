import styles from '../TextInput/TextInput.module.css'



type InputTextProps = {
    type: string,
    id?: string,
    placeholder?:string,
    value?:string,
    onchange? : () => void,
    style?: React.CSSProperties,
    className?: string
    label?: string,
    error? : string,
    name?: string,
}

export const TextInput =({id,placeholder,value,onchange,style,className,label,error,name}:InputTextProps) =>{
return(
<div>
<label>{label}</label>
<input type="text" placeholder={placeholder} value={value} onChange={onchange} style={style} className={className}/>
{error && <span className={styles['input-error']}>{error}</span>}
</div>
)
}
