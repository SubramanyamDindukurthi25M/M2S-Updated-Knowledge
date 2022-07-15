import { DisplayCat } from "./Components/DisplayCat";

export const App = () => {
    return (
        <>
            <h1
                className="text-capitalize my-2 text-warning text-center"
            >
                cats app project
            </h1>
            <DisplayCat/>
        </>
    )
}