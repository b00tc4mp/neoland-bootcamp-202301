function Button({ onClick, children, type, className}) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className={`bg-teal-500 border-2 rounded text-white font-montserrat ${className}`}>{children}</button>
}

export default Button