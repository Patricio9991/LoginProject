


export default function Button({onClick,btnTitle,btnColor}){



    return(
        <button onClick={onClick} className={`mx-10 p-2 rounded-md ${btnColor}`}>
            {btnTitle} 
        </button>
    )

}