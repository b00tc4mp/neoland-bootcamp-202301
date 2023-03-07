function Button({ onClick, children, type, className}) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className={`bg-purple-300 border-2 rounded-md text-white w-36 drop-shadow-sm font-montserrat ${className}`}>{children}</button>
}

export default Button