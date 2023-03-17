import Contract from './Contract'

function List({ updateStamp }) {
    console.log('List -> render')

    return <div className='mt-28'>
        <h2 className='text-left'>MY CONTRACTS</h2>
        <Contract />
    </div>
}
export default List