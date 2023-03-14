function Button({ onClick, children, type }) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className="px-4 py-2 bg-yellow-600 text-white rounded-3xl text-sm font-roboto font-semibold cursor-pointer">{children}</button>
}

export default Button
