import ContractsList from './ContractsList'

function List({ updateStamp }) {
    console.log('List -> render')

    return <div className='mt-28'>
        <h2 className='text-left'>MY CONTRACTS</h2>
        <ContractsList />
    </div>
}
export default List