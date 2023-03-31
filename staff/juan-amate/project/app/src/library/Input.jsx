function Input({ children, className, TagName = 'input', ...restProps }) {
    console.log('Input -> render')

    return <TagName className={`shadow-lg px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto ${className}`} {...restProps}>{children}</TagName>
}
// < input type = 'email' id = 'email' placeholder = 'Email' className = 'w-2/3 max-w-4/5 px-4 py-2 mt-28 mb-5 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

export default Input
