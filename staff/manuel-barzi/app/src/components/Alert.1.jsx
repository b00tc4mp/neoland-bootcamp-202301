import Button from '../library/Button'
import Container from '../library/Container'

function Alert({ message, level = 'error', onAccept }) {
    return <Container TagName="section" className="justify-center w-full h-full fixed top-0 bg-black/[0.5]">
        <Container TagName="section" className="bg-black p-5 border-[gold] border-2">
            <h1 className={`font-odibee text-lg ${level === 'error' ? 'text-[tomato]' : 'text-[greenyellow]'}`}>
                {message}
            </h1>

            <Button onClick={onAccept}>Accept</Button>
        </Container>
    </Container>
}

export default Alert