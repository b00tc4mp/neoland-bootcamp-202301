import { useState } from 'react'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

function Header() {
    console.log('Header - render')

    const [bg, setBg] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {
        setShowNav(!showNav)
    }

    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }

    return <header className={`${bg ? 'bg-white shadow-lg py-5' : 'py-9'} fixed left-0 right-0 z-50 transition-all duration-300`}>
        <div className='container mx-auto'>

            <div className='flex justify-between items-center'>

                <img className='mx-3' src='../../images/logo-web.png' alt='logo' />

                <ul className={`${showNav ? 'left-0' : '-left-full'} flex flex-col justify-center items-center bg-yellow-600 fixed top-0 text-white text-xl font-quicksand h-full w-80 gap-y-8 duration-200 transition-all`}>
                    <Link to='/*' className='cursor-pointer'>Home</Link>
                    <Link to='/clients' className='cursor-pointer'>Clients</Link>
                    <Link to='/contracts' className='cursor-pointer'>Contracts</Link>
                    <Link to='/account' className='cursor-pointer'>Account</Link>
                    <a onClick={handleLogout} className='cursor-pointer'>Logout</a>
                </ul>
                <div onClick={handleClick} className='mx-3 cursor-pointer'>
                    {showNav ? <XMarkIcon className='h-8 w-8' /> : <Bars3Icon className='h-8 w-8' />}
                </div>
            </div>
        </div>
    </header>
}

export default Header