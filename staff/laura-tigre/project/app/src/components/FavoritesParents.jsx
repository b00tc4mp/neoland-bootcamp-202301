import { useState, useEffect, useContext } from 'react'
import retrieveFavParents from '../logic/retrieve-fav-parents'
import Container from '../library/Container'
import toggleFavParent from '../logic/toogle-fav-parent'
import Context from '../Context'
import { Link } from 'react-router-dom'
import { HeartIcon, } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'



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
            toggleFavParent(sessionStorage.token,parentId, error => {
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
    

   
    return <Container TagName="ul" className="gap-4 py-10 ">
        {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280]" key={parent.id} id={parent.id} >
            <button className="flex justify-center" id={parent.id} onClick={handleToggleFavParent} >{
                parent.fav ?
                    <HeartIcon className="h-5 w-5 text-red-500" />
                    :
                    <HeartIconOutline className="h-5 w-5 text-red-500" />}</button>

            <Link to={`/parents/${parent.id}`}>
                <strong className="w-[28ch] text-sm text-left">{parent.user.name}</strong>
            </Link>
            <p>{parent.city}</p>
            <p>{parent.description}</p>
            <p>{parent.extras}</p>
        </li>
        )}

    </Container>


}




export default FavoritesParents