import { useState } from 'react'
import { Link } from 'react-router-dom'
import Feedback from './Feedback'
import Container from '../library/Container'
import Input from '../library/Input'
import Button from '../library/Button'

function FormPreparations() {
    console.log('FormPreparations -> render')

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault();

    }

    return <Container>
        <section className='w-screen mt-36 flex flex-col'>
            <h2 className="mt-20 text-center">YOUR PREPARATIONS DATA</h2>
            <Container TagName='form' onSubmit={handleSubmit}>

                <Input type='text' id='preparationPlaceDescription' placeholder='Preparation place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                <Input type='text' id='preparationPlaceAddres' placeholder='Preparation place addres' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                <Input type='text' id='preparationPlaceZipCode' placeholder='Preparation place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                <Input type='text' id='preparationPlaceCity' placeholder='Preparation place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

                <Input type='text' id='preparationPlaceProvince' placeholder='Preparation place description Province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
                <br></br>
                <div className='flex gap-20'>
                    <Link to='/form-ceremony'><Button type='submit'>Prev</Button></Link>
                    <Link><Button type='submit'>Next</Button></Link>
                </div>
                {feedback && <Feedback message={feedback.message} level={feedback.level} />}
            </Container>
        </section>
    </Container>
}

export default FormPreparations