import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import retrieveParent from '../logic/retrieve-parent'
import toggleFavParent from '../logic/toogle-fav-parent'
import Container from '../library/Container'
import { Link } from 'react-router-dom'
import { StarIcon,ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'


function ParentProfile() {
    console.log('ParentProfile -> render')

    const [parent, setParent] = useState()
    const { parentId } = useParams()

    const loadList = () => {

        try {
            retrieveParent(sessionStorage.token, parentId, (error, parent) => {
                if (error) {
                    alert(error)
                    return
                }

                setParent(parent)
            })

        } catch (error) {
            alert(error.message)
        }

    }

    useEffect(() => {
        loadList()
    }, [])
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


    return <Container>
        {parent && <div className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#d6d3d1] mb-20" key={parent.id} id={parent.id} >
            <div className="flex flex-row justify-end">
            <Link to={'/chat'}><ChatBubbleLeftRightIcon className="h-5 w-5 text-[#fb923c] mr-1" /></Link>
                <button id={parent.id} onClick={handleToggleFavParent}>{

                    parent.fav ? <StarIcon className="h-5 w-5 text-[#fb923c]" />
                        :
                        <StarIconOutline className="h-5 w-5 text-[#fb923c]" />}</button>

            </div>
            <div>
                <img className="sm:" src=
                    {parent.photo} />
            </div>

            <p className='text-lg'>{parent.user.name}</p>
            <p className='text-[#fb923c]'>City: <span className='text-black'>{parent.city}</span></p>
            <p className='text-[#fb923c]'>Description: <span className='text-black'> {parent.description} </span></p>
            <ul className='text-[#fb923c]'>Kids : {parent.kids.map(kid => <li className='text-black list-disc ml-2' key={kid.id}>{kid.name}, {kid.dateOfBirth.slice(0, 10)}</li>)}</ul>
            <ul className='text-[#fb923c]'>Availability : {parent.availabilities.map(availabity => <li className='text-black list-disc ml-2' key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            <p className='text-[#fb923c]'>Extras: <span className='text-black'>{parent.extras}</span></p>
    
        </div>}


    </Container>
}


export default ParentProfile