import { useState } from 'react'
import Feedback from './Feedback'
import Container from '../library/Container'
import Input from '../library/Input'
import createContract from '../logic/create-contract'

function ContractForm() {
    console.log('ContractForm -> render')

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const date = new Date()
        const eventDate = new Date(event.target.eventDate.value)
        const preparationPlaceDescription = event.target.preparationPlaceDescription.value
        const preparationPlaceAddress = event.target.preparationPlaceAddress.value
        const preparationPlaceZipCode = event.target.preparationPlaceZipCode.value
        const preparationPlaceCity = event.target.preparationPlaceCity.value
        const preparationPlaceProvince = event.target.preparationPlaceProvince.value

        const coupleName = event.target.coupleName.value
        const coupleId = event.target.coupleId.value
        const couplePhone = event.target.couplePhone.value
        const coupleEmail = event.target.coupleEmail.value
        const couplePreparationPlaceDescription = event.target.couplePreparationPlaceDescription.value
        const couplePreparationPlaceAddress = event.target.couplePreparationPlaceAddress.value
        const couplePreparationPlaceZipCode = event.target.couplePreparationPlaceZipCode.value
        const couplePreparationPlaceCity = event.target.couplePreparationPlaceCity.value
        const couplePreparationPlaceProvince = event.target.couplePreparationPlaceProvince.value

        const ceremonyPlaceDescription = event.target.ceremonyPlaceDescription.value
        const ceremonyPlaceAddress = event.target.ceremonyPlaceAddress.value
        const ceremonyPlaceZipCode = event.target.ceremonyPlaceZipCode.value
        const ceremonyPlaceCity = event.target.ceremonyPlaceCity.value
        const ceremonyPlaceProvince = event.target.ceremonyPlaceProvince.value

        const sessionPlaceDescription = event.target.sessionPlaceDescription.value
        const sessionPlaceAddress = event.target.sessionPlaceAddress.value
        const sessionPlaceZipCode = event.target.sessionPlaceZipCode.value
        const sessionPlaceCity = event.target.sessionPlaceCity.value
        const sessionPlaceProvince = event.target.sessionPlaceProvince.value

        const celebrationPlaceDescription = event.target.celebrationPlaceDescription.value
        const celebrationPlaceAddress = event.target.celebrationPlaceAddress.value
        const celebrationPlaceZipCode = event.target.celebrationPlaceZipCode.value
        const celebrationPlaceCity = event.target.celebrationPlaceCity.value
        const celebrationPlaceProvince = event.target.celebrationPlaceProvince.value

        const preWeddingServiceSelected = event.target.preWeddingServiceSelected.checked
        const postWeddingServiceSelected = event.target.postWeddingServiceSelected.checked
        const expressDeliveryServiceSelected = event.target.expressDeliveryServiceSelected.checked
        const extraPhotographerServiceSelected = event.target.extraPhotographerServiceSelected.checked
        const bookServiceSelected = event.target.bookServiceSelected.checked
        const albumServiceSelected = event.target.albumServiceSelected.checked
        const miniAlbumsServiceSelected = event.target.miniAlbumsServiceSelected.checked
        const woodBoxAlbumServiceSelected = event.target.woodBoxAlbumServiceSelected.checked

        try {
            createContract(
                sessionStorage.token,
                date,
                eventDate,
                ceremonyPlaceDescription,
                ceremonyPlaceAddress,
                ceremonyPlaceZipCode,
                ceremonyPlaceCity,
                ceremonyPlaceProvince,
                sessionPlaceDescription,
                sessionPlaceAddress,
                sessionPlaceZipCode,
                sessionPlaceCity,
                sessionPlaceProvince,
                celebrationPlaceDescription,
                celebrationPlaceAddress,
                celebrationPlaceZipCode,
                celebrationPlaceCity,
                celebrationPlaceProvince,
                preparationPlaceDescription,
                preparationPlaceAddress,
                preparationPlaceZipCode,
                preparationPlaceCity,
                preparationPlaceProvince,
                coupleName,
                coupleId,
                couplePhone,
                coupleEmail,
                couplePreparationPlaceDescription,
                couplePreparationPlaceAddress,
                couplePreparationPlaceZipCode,
                couplePreparationPlaceCity,
                couplePreparationPlaceProvince,
                preWeddingServiceSelected,
                postWeddingServiceSelected,
                expressDeliveryServiceSelected,
                extraPhotographerServiceSelected,
                bookServiceSelected,
                albumServiceSelected,
                miniAlbumsServiceSelected,
                woodBoxAlbumServiceSelected,
                error => {
                    if (error) {
                        setFeedback({
                            message: error.message,
                            level: 'error'
                        })

                        return
                    }

                    setFeedback({
                        message: 'Contract created successfully',
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

    return <Container TagName='form' onSubmit={handleSubmit} className='mb-5'>
        <section className='w-screen mt-28 flex flex-col'></section>

        <section className='w-screen my-6 flex flex-col'>
            <h2 className="text-center font-bold uppercase">your preparations</h2>

            <Input type='text' id='preparationPlaceDescription' placeholder='Preparation place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceAddress' placeholder='Preparation place address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceZipCode' placeholder='Preparation place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceCity' placeholder='Preparation place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='preparationPlaceProvince' placeholder='Preparation place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>


        <section className='w-screen my-6 flex flex-col'>
            <h2 className="text-center font-bold uppercase">your couple</h2>

            <Input type='text' id='coupleName' placeholder='Your couple name' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='coupleId' placeholder='Your couple national id' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePhone' placeholder='Your couple phone number' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='email' id='coupleEmail' placeholder='Your couple email address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceDescription' placeholder='Preparation place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceAddress' placeholder='Preparation place description address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceZipCode' placeholder='Preparation place description zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceCity' placeholder='Preparation place description city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='couplePreparationPlaceProvince' placeholder='Preparation place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-6 flex flex-col'>
            <h2 className="text-center font-bold uppercase">ceremony</h2>

            <Input type='text' id='ceremonyPlaceDescription' placeholder='Ceremony place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='datetime-local' id='eventDate' placeholder='Event date & time' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceAddress' placeholder='Ceremony place address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceZipCode' placeholder='Ceremony place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceCity' placeholder='Ceremony place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='ceremonyPlaceProvince' placeholder='Ceremony place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-6 flex flex-col'>
            <h2 className="text-center font-bold uppercase">session couple place</h2>

            <Input type='text' id='sessionPlaceDescription' placeholder='Session place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceAddress' placeholder='Session place address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceZipCode' placeholder='Session place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceCity' placeholder='Session place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='sessionPlaceProvince' placeholder='Session place description province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen mt-6 flex flex-col'>
            <h2 className="text-center font-bold uppercase">celebration place</h2>

            <Input type='text' id='celebrationPlaceDescription' placeholder='Celebration place description' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceAddress' placeholder='Celebration place address' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceZipCode' placeholder='Celebration place zip code' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceCity' placeholder='Celebration place city' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />

            <Input type='text' id='celebrationPlaceProvince' placeholder='Celebration place province' className='w-11/12 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' />
            <br></br>
        </section>

        <section className='w-screen my-3 flex flex-col'>
            <h2 className="p-4 mb-3 text-center font-bold uppercase">contracted services</h2>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='coverageService' checked />Full Wedding Coverage<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='preWeddingServiceSelected' />Prewedding<br />
            </div>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='postWeddingServiceSelected' />Postwedding<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='expressDeliveryServiceSelected' />Express Delivery<br />
            </div>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='extraPhotographerServiceSelected' />Extra Photographer<br />
            </div>
            <br></br>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='bookServiceSelected' />Wedding Book<br />
            </div>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='albumServiceSelected' />Wedding Album<br />
            </div>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='miniAlbumsServiceSelected' />Mini Weddings Albums<br />
            </div>
            <div className='flex justify-start mx-10 gap-4'>
                <input type='checkbox' id='woodBoxAlbumServiceSelected' />Wood Box Album<br />
            </div>
            <br></br>
        </section>
        {feedback && <Feedback message={feedback.message} level={feedback.level} />}

        <button type='submit' className='m-10 py-1 px-6 bg-yellow-600 text-white rounded-xl shadow-gray-500 shadow-xl cursor-pointer'>Save</button>
    </Container >
}

export default ContractForm