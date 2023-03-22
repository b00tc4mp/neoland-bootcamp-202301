import Button from '../library/Button'
import Container from '../library/Container'

function Confirm({ message, onAccept, onCancel }) {
    return <Container TagName="section" className="justify-center w-full h-full fixed top-0 bg-black/[0.5]">
        <Container TagName="section" className="bg-white p-5 border-2 rounded-md">
            <p>{message}</p>
            <Button className="w-28" onClick={onAccept}>Accept</Button>
            <Button className="w-28" onClick={onCancel}>Cancel</Button>
        </Container>
    </Container>
}

export default Confirm