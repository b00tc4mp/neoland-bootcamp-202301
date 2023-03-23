import Button from "../library/Button"
import Container from "../library/Container"
import createAuction from "../logic/create-auction"
import { useNavigate } from "react-router-dom"

function AuctionForm({ }) {
    const navigate = useNavigate()

    const handleAddAuction = event => {
        event.preventDefault()


        const title = event.target.title.value
        const description = event.target.description.value
        const price = parseInt(event.target.price.value)
        const photo = event.target.photo.value
        const bidRate = parseInt(event.target.bidRate.value)
        const startDate = new Date(event.target.startDate.value)
        const endDate = new Date(event.target.endDate.value)

        try {
            createAuction(sessionStorage.token, title, description, price, photo, bidRate, startDate, endDate, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                navigate('/')

            })
        } catch (error) {
            alert(error.message)
        }
    }


    return <Container TagName="form" onSubmit={handleAddAuction} >

        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">title:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" id="title" name="title" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">description:</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="description" name="description" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">price:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number" id="price" name="price" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">photo:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" id="photo" name="photo" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="bidRate">bid rate:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number" id="bidRate" name="bidRate" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">start date:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="datetime-local" id="startDate" name="startDate" required />

        <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">end date:</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="datetime-local" id="endDate" name="endDate" required />

        <Button type="submit" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " >submit</Button>

    </Container>
}
export default AuctionForm