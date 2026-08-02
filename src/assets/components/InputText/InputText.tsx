type InputTextProps = {
    placeholder:string,
    value:string,
    onchange? : () => void,
    style?: React.CSSProperties,
    className?: string
    label?: string
}

export const InputText =({placeholder,value,onchange,style,className,label}:InputTextProps) =>{

<div>
<label>{label}</label>
<input type="text" placeholder={placeholder} value={value} onChange={onchange} style={style} className={className}/>
</div>


}
