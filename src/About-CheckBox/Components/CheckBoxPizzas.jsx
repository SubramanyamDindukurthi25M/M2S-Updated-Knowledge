export const CheckBoxPizzas = ({
        changePizzaState,
        changePizzaEvent,
        labelText
    }) => {
    const inlineStyle = {
        textDecoration: changePizzaState ? 'line-through' : 'none',
        color: changePizzaState ? 'black' : 'orange'
    }
    return (
        <div className="form-check mx-2 my-5">
            <input 
                type="checkbox" 
                className="form-check-input"
                checked={changePizzaState}
                onChange={changePizzaEvent}
            />
            <label className="form-check-label" style={inlineStyle} >
                {labelText}
            </label>
        </div>
    )
}