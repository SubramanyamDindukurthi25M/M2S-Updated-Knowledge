export const FormField = ({label,inputProps,onChange,value}) => {
    return (
        <>
            <label>
                {label}
            </label>
            <input
                {...inputProps}
                onChange={onChange}
                value={value}
                className='form-control'
            />
        </>
    )
}