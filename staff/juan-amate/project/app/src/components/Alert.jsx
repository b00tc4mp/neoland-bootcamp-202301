import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'

function Alert({ message, level = 'error', onAccept }) {
    return <Container TagName='section' className='justify-center w-full h-full fixed top-0 bg-black/[0.6]'>
        <Container TagName='section' className='bg-white p-5 border-2 border-sky-500'>
            <Feedback message={message} level={level} />

            <Button onClick={onAccept}>OK</Button>
        </Container>
    </Container>
}

export default Alert