import Button from '../library/Button'
import Container from '../library/Container'
import deleteList from '../logic/delete-list'

function Confirm({ elementId, onDeleteList, onCancelDeleteList}) {

    const handleAcceptDeleteList = () => {
        try {
            deleteList(sessionStorage.token, elementId, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                onDeleteList(elementId)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelDeleteList = () => {
        onCancelDeleteList()
    }

    return <Container TagName="section" className="justify-center w-full h-full fixed top-0 bg-black/[0.5]">
        <Container TagName="section" className="bg-white p-5 border-2 rounded-md">
            <p>Are you sure to delete this list?</p>
            <Button className="w-28" onClick={handleAcceptDeleteList}>Accept</Button>
            <Button className="w-28" onClick={handleCancelDeleteList}>Cancel</Button>
        </Container>
    </Container>
}

export default Confirm