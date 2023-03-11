function Button({ onClick, children, type, className}) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className={`bg-sky-500 border-2 rounded-md text-white font-montserrat ${className}`}>{children}</button>
}

export default Button