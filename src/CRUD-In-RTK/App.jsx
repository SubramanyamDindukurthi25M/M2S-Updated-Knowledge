import { NumbersContainer } from "./Components/NumbersContainer";

export const App = () => {
    return (
        <section className="p-2">
            <h1
                className="text-center text-info my-2 text-uppercase"
            >
                random number generator
            </h1>
            <NumbersContainer/>
        </section>
    )
}