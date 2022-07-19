export const Btn = ({styleText,plainText,onClick}) => {
    return (
        <>
            <button
                className={styleText}
                onClick={onClick}
            >
                {plainText}
            </button>
        </>
    )
}