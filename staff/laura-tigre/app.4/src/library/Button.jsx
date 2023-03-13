function Button({onClick, children, type}){

    console.log('Button -> render')

    return<button className=" bg-[#facc15] px-2 py-1" type={type} onClick={onClick} >{children}</button>
}

export default Button