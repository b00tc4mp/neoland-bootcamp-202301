function Container({ children, className, TagName = 'div', ...restProps}){
    console.log('Container -> render')

    return <TagName className={`flex flex-col gap-2 items-center ${className}`} {...restProps}>
        {children}
    </TagName>
}

export default Container