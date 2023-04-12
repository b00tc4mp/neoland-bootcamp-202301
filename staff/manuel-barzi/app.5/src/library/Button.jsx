function Button({ onClick, children, type }) {
    console.log('Button -> render')

    return <button type={type} onClick={onClick} className="logout-button border-[2px] border-[gold] text-[gold] p-1 font-press bg-[dodgerblue]">{children}</button>
}

export default Button