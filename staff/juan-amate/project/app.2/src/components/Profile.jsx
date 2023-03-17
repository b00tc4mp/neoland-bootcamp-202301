import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'
import Feedback from './Feedback'
import retrieveUser from '../logic/retrieve-user'
import updateUserData from '../logic/update-user-data'
import Container from '../library/Container'
import Button from '../library/Button'
import { PencilIcon } from '@heroicons/react/24/solid'

function Profile({ updateStamp }) {
    console.log('Profile -> render')

    const { alert } = useContext(Context)

    const [feedback, setFeedback] = useState()

    const [user, setUser] = useState([])

    const loadUser = () => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadUser()
    }, [updateStamp])

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value || event.target.name.placeholder
        const nationalId = event.target.nationalId.value || event.target.nationalId.placeholder
        const address = event.target.address.value || event.target.address.placeholder
        const zipCode = event.target.zipCode.value || event.target.zipCode.placeholder
        const city = event.target.city.value || event.target.city.placeholder
        const province = event.target.province.value || event.target.province.placeholder
        const phone = event.target.phone.value || event.target.phone.placeholder

        try {
            updateUserData(sessionStorage.token, name, nationalId, address, zipCode, city, province, phone, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                setFeedback({
                    message: 'User updated successfully',
                    level: 'success'
                })
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container>
        <section className='w-screen mt-36 flex flex-col'>
            <div className='w-4/5 mx-4 items-start'>
                <h2 className='m-1 text-xl font-roboto'>Your data access</h2>
                <div className='flex'>
                    <p className='m-2 text-base text-neutral-500'>{user.email}</p>
                    <Link to='/update-user-email' className='cursor-pointer'><PencilIcon className='h-4 w-4 mt-3' /></Link>
                </div>
                <Link to='/update-user-password'><Button>Change password</Button></Link>
            </div>
            <div className='m-6'></div>
            <div className='w-4/5 mx-4 items-start'>
                <h2 className='m-1 text-xl font-roboto'>Your data</h2>
                <Container TagName='form' onSubmit={handleSubmit}>

                    <input type='text' id='name' placeholder={user.name} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='nationalId' placeholder={user.nationalId} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='address' placeholder={user.address} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='zipCode' placeholder={user.zipCode} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='city' placeholder={user.city} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='province' placeholder={user.province} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                    <input type='text' id='phone' placeholder={user.phone} className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
                    <br></br>
                    <Button type='submit'>Save</Button>
                    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
                </Container>
            </div>
        </section >
    </Container>
}

export default Profile
