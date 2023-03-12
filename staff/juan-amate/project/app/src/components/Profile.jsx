import { PencilIcon } from '@heroicons/react/24/solid'
import Button from '../library/Button'

const handleChangePassword = event => {
    event.preventDefault()
}

function Profile() {
    console.log('Profile -> render')

    return (
        <section className='w-screen mt-44 flex flex-col'>
            <div className='w-4/5 mx-4 items-start'>
                <h2 className='m-1 text-xl font-roboto'>Your data access</h2>
                <div className='flex'>
                    <p className='m-2 text-base'>juan@amate.com</p>
                    <a className='cursor-pointer'><PencilIcon className='h-4 w-4 mt-3' /></a>
                </div>
                <Button onClick="handleChangePassword">Change password</Button>
            </div>
            <div className='m-6'></div>
            <div className='w-4/5 mx-4 items-start'>
                <h2 className='m-1 text-xl font-roboto'>Your data</h2>
                <form>
                    <input type='text' id='businessName' placeholder='Business name' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='text' id='nif' placeholder='CIF/NIF' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='text' id='addres' placeholder='Address' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='number' id='zipCode' placeholder='Postal code' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='text' id='city' placeholder='City' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='text' id='region' placeholder='Region' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <input type='number' id='phone' placeholder='Phone' className='w-full max-w-4/5 px-4 py-2 m-2 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-roboto' required />
                    <button type='submit' className='px-4 py-2 m-3 bg-yellow-600 text-white rounded-3xl text-sm font-roboto font-semibold cursor-pointer'>Save</button>
                </form>
            </div>
        </section >
    )
}

export default Profile
