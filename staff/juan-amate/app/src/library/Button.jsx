function Button({ onClick, children, type }) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className="bg-blue-600 text-white font-semibold border-2 border-gray-400 p-2 m-5 rounded-md">{children}</button>
}

export default Button