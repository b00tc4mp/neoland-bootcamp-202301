function Container({ children, className, TagName = 'div', ...restProps }) {
    console.log('Container -> render')

    return <TagName className={` border-double border-2 flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-10  ${className}`} {...restProps}>
        {children}
    </TagName>
}

export default Container