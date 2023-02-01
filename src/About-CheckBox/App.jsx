import { useState } from "react"
import { CheckBox } from "./Components/CheckBox"
import { CheckBoxPizzas } from "./Components/CheckBoxPizzas"

export const App = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBox = () => setIsChecked(!isChecked)

    const allToppings = [{
            name: "Golden Corn",
            checked: false
        },

        {
            name: "Paneer",
            checked: false
        },

        {
            name: "Tomato",
            checked: false
        },

        {
            name: "Mushroom",
            checked: false
        },

        {
            name: "Onion",
            checked: false
        },

        {
            name: "Black Olives",
            checked: false
        }
    ]

    const [data, setData] = useState(allToppings)

    const updateData = (id) => {
        const result = data.map((ele, i) => {
            const {
                checked
            } = ele
            if (i === id) {
                return {
                    ...ele,
                    checked: !checked
                }
            } else {
                return ele
            }
        })
        setData(result)
    }

    return (
        <>
            <h2 className="text-center my-2 text-primary">
                About Checkboxes in ReactJS 
            </h2>
            <CheckBox
                checkBoxState = {isChecked}
                changeState = {handleCheckBox}
            />
            {
                data.map((ele, i) => {
                            const {
                                checked,
                                name
                            } = ele;
                    return (
                        <CheckBoxPizzas
                            key={i}
                            changePizzaState = {checked}
                            changePizzaEvent = {() => updateData(i)}
                            labelText = {name}
                        />
                    )
                })
            }
            
        </>
    )
}