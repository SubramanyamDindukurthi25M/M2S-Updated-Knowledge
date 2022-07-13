export const AddUserBtn = ({children,onClick}) => {
    return (
        <>
            <button 
            className="btn btn-info text-light"
            onClick={onClick}
        >
                {children} 
            </button>
        </>
    )
}