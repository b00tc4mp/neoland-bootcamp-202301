import ContractsList from './ContractsList'

function List() {
    console.log('List -> render')

    return (
        <div className='mt-28'>
            <h2 className='text-center uppercase'>my contracts</h2>
            <ContractsList />
        </div>
    )
}

export default List