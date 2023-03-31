import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'
import registerParticularUser from '../logic/register-particular-user'
import Container from '../library/Container'
import Button from '../library/Button'
import Input from '../library/Input'

function Register() {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const nationalId = event.target.nationalId.value
        const address = event.target.address.value
        const zipCode = event.target.zipCode.value
        const city = event.target.city.value
        const province = event.target.province.value
        const phone = event.target.phone.value
        const photographer = event.target.photographer.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerParticularUser(name, nationalId, address, zipCode, city, province, phone, photographer, email, password)
                .then(() => navigate('/login'))
                .catch(error => setFeedback({
                    message: error.message,
                    level: 'error'
                }))
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container className='justify-center'>
        <main>
            <Container className='w-screen flex justify-center items-center bg-yellow-600 h-36 mb-5'>
                <img src='../../images/logo-white.png' alt='logo' />
            </Container>

            <Container TagName='form' onSubmit={handleSubmit} className='flex flex-col items-center'>
                <h1>REGISTER</h1>
                <div className='flex flex-col items-center w-screen'>
                    <Input TagName='input' type='text' id='name' placeholder='Name & Surname' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='nationalId' placeholder='National Id' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='address' placeholder='Address' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='zipCode' placeholder='Zip Code' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='city' placeholder='City' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='province' placeholder='Province' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='text' id='phone' placeholder='Phone number' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='email' id='photographer' placeholder='Your photographer email' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='email' id='email' placeholder='Email' className={'w-2/3 max-w-4/5'} ></Input>
                    <Input TagName='input' type='password' id='password' placeholder='Password' className={'w-2/3 max-w-4/5'} ></Input>
                </div>
                <Button type='submit' className='px-10 py-21 gap-5'>Create new account</Button>

                {feedback && <Feedback message={feedback.message} level={feedback.level} />}

                <Link to='/login' className='mt-5 text-neutral-500 text-base font-quicksand cursor-pointer'>I already have an account</Link>
            </Container>
        </main >
    </Container>
}

export default Register