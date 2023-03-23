import { WithReactQuery } from "./Components/WithReactQuery"
import { WithUseEffect } from "./Components/WithUseEffect"
import '../Styling/Main.scss'

export const App = () => {
    return (
        <>
            <h1 className="text-center my-2 text-secondary">
                About React-Query tutorial
            </h1>
            <WithUseEffect/>
            <WithReactQuery/>
        </>
    )
}