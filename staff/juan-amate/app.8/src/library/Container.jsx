function Container({ children, className, TagName = 'div', ...restProps }) {
    console.log('Container -> render')

    return <TagName className={`flex flex-col items-center gap-2 ${className}`} {...restProps}>
        {children}
    </TagName>
}

export default Container