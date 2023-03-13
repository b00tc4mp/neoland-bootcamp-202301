function Container({ children, className, TagName = 'div', ...restProps }) {
    console.log('Container -> render')

    return <TagName className={`flex flex-col items-center gap-4  mt-10 p-10  ${className}`} {...restProps}>
        {children}
    </TagName>
}

export default Container