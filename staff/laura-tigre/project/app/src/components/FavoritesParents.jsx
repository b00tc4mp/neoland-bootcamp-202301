import { useState, useEffect, useContext } from 'react'
import retrieveFavParents from '../logic/retrieve-fav-parents'
import Container from '../library/Container'
import toggleFavParent from '../logic/toogle-fav-parent'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { StarIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'



function FavoritesParents({ listUpdateStamp }) {

    const { alert } = useContext(Context)

    const [parents, setParents] = useState([])

    const loadList = () => {

        try {
            retrieveFavParents(sessionStorage.token, (error, parents) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setParents(parents.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadList()


    }, [listUpdateStamp])

    const handleToggleFavParent = event => {
        try {
            const parentId = event.currentTarget.id
            toggleFavParent(sessionStorage.token, parentId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                loadList()


            })
        } catch (error) {
            alert(error.message)
        }
    }



    return <Container TagName="ul" className="gap-4 py-10 mb-10 ">
        {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={parent.id} id={parent.id} >
        <div className="flex flex-row justify-end">
            <Link to={'/chat'}><ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" /></Link>
            <button className="flex flex-row justify-end" id={parent.id} onClick={handleToggleFavParent}>{

                parent.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                    :
                    <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>
            
            </div>
            <div className='w-20 h-20'>
                <img className="sm:" src=
                    {parent.photo} />
            </div>
            <Link to={`/parents/${parent.id}`}>
                <strong className="w-[28ch] text-lg text-left">{parent.name}</strong>
            </Link>
            <ul className='text-[#fb923c]'>Availability : {parent.availabilities.map(availabity => <li className='text-black list-disc ml-2' key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            <ul className='text-[#fb923c]'>Kids : {parent.kids.map(kid => <li className='text-black list-disc ml-2' key={kid.id}>{kid.name}, {kid.dateOfBirth.slice(0, 10)}</li>)}</ul>
        </li>
        )}

    </Container>


}




export default FavoritesParents