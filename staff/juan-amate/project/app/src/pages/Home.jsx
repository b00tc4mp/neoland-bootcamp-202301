import { useState, useEffect, useContext } from 'react'
import { useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import Context from '../Context'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Container from '../library/Container'
import Button from '../library/Button'
import Profile from '../components/Profile'
import List from '../components/List'
import UpdateUserPassword from '../components/UpdateUserPassword'
import UpdateUserEmail from '../components/UpdateUserEmail'
import retrieveUser from '../logic/retrieve-user'
import ContractForm from '../components/ContractForm'
import ContractDetail from '../components/ContractDetail'
import ContractPdf from '../components/ContractPdf'

function Home() {
    console.log('Home -> render')

    const { alert } = useContext(Context)

    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {

        setShowNav(!showNav)
    }

    const navigate = useNavigate()
    const location = useLocation()

    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    const [user, setUser] = useState({})


    const handleAdd = () => {

        navigate('/form-contract')
    }

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(() => {

                    setUser(user)
                })
                .catch(error => {
                    alert(error.message)

                    return
                })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogout = () => {
        delete sessionStorage.token

        navigate('/login')
    }

    return <div>
        <Container className="h-screen w-screen">
            <header className='bg-white shadow-lg py-5 fixed left-0 right-0 z-50 transition-all duration-300'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center'>

                        <img className='mx-3' src='../../images/logo-web.png' alt='logo' />

                        {showNav &&
                            <ul onClick={handleClick} className='flex flex-col justify-center items-center bg-yellow-600 fixed left-0 top-0 text-white text-xl font-quicksand h-full w-80 gap-y-8 duration-200 transition-all'>

                                <Link to='/' className='cursor-pointer'>Home</Link>
                                <Link to='/form-contract' className='cursor-pointer'>New contract</Link>
                                <Link to='/profile' className='cursor-pointer'>Profile</Link>

                                <a onClick={handleLogout} className='cursor-pointer'>Logout</a>
                            </ul>
                        }

                        <div onClick={handleClick} className='mx-3 cursor-pointer'>
                            {showNav ? <XMarkIcon className='h-8 w-8' /> : <Bars3Icon className='h-8 w-8' />}
                        </div>

                    </div>
                </div>
            </header>

            <main>
                <Container>
                    <Routes>
                        <Route path='/' element={<List listUpdateStamp={listUpdateStamp} />}></Route>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/update-user-password' element={<UpdateUserPassword listUpdateStamp={listUpdateStamp} />} />
                        <Route path='/update-user-email' element={<UpdateUserEmail listUpdateStamp={listUpdateStamp} />} />
                        <Route path='/form-contract' element={<ContractForm listUpdateStamp={listUpdateStamp} />} />
                        <Route path='/contract/:contractId' element={<ContractDetail listUpdateStamp={listUpdateStamp} />} />
                        <Route path='/contract/:contractId/pdf' element={<ContractPdf listUpdateStamp={listUpdateStamp} />} />
                    </Routes>
                </Container>
            </main>

            <footer className="bg-transparent flex justify-end items-center m-1 fixed h-14 bottom-0 right-0 w-full">

                {(location.pathname === '/') &&
                    <div onClick={handleAdd}>
                        <img className='w-12 h-12 cursor-pointer' src='../../images/create.png' alt='Create contract' />
                    </div>
                }

                <div id='whatsapp'>
                    <a href='https://api.whatsapp.com/send?phone=+34629572745&text=Hola!!!' target='_blank'>
                        <img className='w-12 h-12 cursor-pointer' src='../../images/whatsapp.png' title='Write me' alt='WhatssApp me' />
                    </a>
                </div>
            </footer>
        </Container >
    </div>
}

export default Home