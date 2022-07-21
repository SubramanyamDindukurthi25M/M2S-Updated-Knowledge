export const BtnSkeleton = ({text,onClick,styleText}) => {
    return (
        <>
            <button
                className="btn btn-outline-dark btn-sm m-2 text-capitalize"
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}