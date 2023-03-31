import { useState } from 'react'
import Feedback from './Feedback'
import Container from '../library/Container'
import Input from '../library/Input'
import Button from '../library/Button'

function FormContract() {
    console.log('FormContract -> render')

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault();

    }

    return <Container TagName='form' onSubmit={handleSubmit}>
        <section className='w-screen mt-36 flex flex-col'>
            <h2 className="text-center uppercase">event date</h2>

            <label for='eventDate' className='text-xs text-left'>Event date</label>
            <Input type='date' id='eventDate' placeholder='Event date' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <br></br>
        </section>

        <section className='w-screen mt-8 flex flex-col'>
            <h2 className="text-center uppercase">your preparations</h2>

            <Input type='text' id='preparationPlaceDescription' placeholder='Preparation place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceAddress' placeholder='Preparation place addres' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceZipCode' placeholder='Preparation place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceCity' placeholder='Preparation place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceProvince' placeholder='Preparation place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>


        <section className='w-screen mt-8 flex flex-col'>
            <h2 className="text-center uppercase">your couple</h2>

            <Input type='text' id='coupleName' placeholder='Your couple name' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='coupleId' placeholder='Your couple national id' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePhoneNumber' placeholder='Your couple phone number' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='email' id='coupleEmail' placeholder='Your couple email address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceDescription' placeholder='Preparation place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceAddress' placeholder='Preparation place description address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceZipCode' placeholder='Preparation place description zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceCity' placeholder='Preparation place description city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceProvince' placeholder='Preparation place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-8 flex flex-col'>
            <h2 className="text-center uppercase">ceremony</h2>

            <Input type='text' id='ceremonyPlaceDescription' placeholder='Ceremony place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='date' id='eventDate' placeholder='Event date' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceAddres' placeholder='Ceremony place addres' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceZipCode' placeholder='Ceremony place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceCity' placeholder='Ceremony place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceProvince' placeholder='Ceremony place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-8 flex flex-col'>
            <h2 className="text-center uppercase">session couple place</h2>

            <Input type='text' id='sessionPlaceDescription' placeholder='Session place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceAddres' placeholder='Session place addres' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceZipCode' placeholder='Session place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceCity' placeholder='Session place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceProvince' placeholder='Session place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-8 flex flex-col'>
            <h2 className="text-center uppercase">celebration place</h2>

            <Input type='text' id='celebrationPlaceDescription' placeholder='Celebration place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceAddres' placeholder='Celebration place addres' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceZipCode' placeholder='Celebration place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceCity' placeholder='Celebration place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceProvince' placeholder='Celebration place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen my-3 flex flex-col'>
            <h2 className="p-4 text-center uppercase">contracted services and budget</h2>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='coverageService' checked />Full Wedding Coverage<br />
                <p>1800 euros</p>
            </div>
            <br></br>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='preWeddingServiceSelected' />Prewedding<br />
            </div>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='postWeddingServiceSelected' />Postwedding<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='expressDeliveryServiceSelected' />Express Delivery<br />
            </div>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='extraPhotographerServiceSelected' />Extra Photographer<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='bookServiceSelected' />Wedding Book<br />
            </div>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='albumServiceSelected' />Wedding Album<br />
            </div>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='miniAlbumsServiceSelected' />Mini Weddings Albums<br />
            </div>
            <div className='flex justify-start mx-4 gap-4'>
                <input type='checkbox' id='woodBoxAlbumsServiceSelected' />Wood Box Album<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-4 gap-4'>
                <p>Total services: </p>
            </div>


        </section>

        <Button type='submit'>Save</Button>

        {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container >
}

export default FormContract