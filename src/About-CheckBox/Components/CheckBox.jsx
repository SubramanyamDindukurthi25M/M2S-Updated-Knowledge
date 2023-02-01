export const CheckBox = ({
        checkBoxState,
        changeState
    }) => {
    const inlineStyle = {
        textDecoration: checkBoxState ? 'line-through' : 'none',
        color: checkBoxState ? 'black' : 'blue'
    }
    return (
        <div className="form-check mx-2">
            <input 
                type="checkbox" 
                className="form-check-input"
                checked={checkBoxState}
                onChange={changeState}
            />
            <label className="form-check-label" style={inlineStyle}>
                Default Checkbox
            </label>
        </div>
    )
}