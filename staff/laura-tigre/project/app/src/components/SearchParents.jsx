import { useState, useEffect, useContext } from 'react'
import Context from '../Context'
import Button from '../library/Button'
import Container from '../library/Container'
import searchParents from '../logic/search-parents'


function SearchParents({ listUpdateStamp }) {


    const [parents, setParents] = useState([])
    const { alert } = useContext(Context)
  

    const handleSubmit = (event) => {
        event.preventDefault()

        const mondayMorningSelected = event.target.mondayMorningSelected.checked
        const mondayAfternoonSelected = event.target.mondayAfternoonSelected.checked
        const mondayEveningSelected = event.target.mondayEveningSelected.checked
        const tuesdayMorningSelected = event.target.tuesdayMorningSelected.checked
        const tuesdayAfternoonSelected = event.target.tuesdayAfternoonSelected.checked
        const tuesdayEveningSelected = event.target.tuesdayEveningSelected.checked
        const wendsdayMorningSelected = event.target.wendsdayMorningSelected.checked
        const wendsdayAfternoonSelected = event.target.wendsdayAfternoonSelected.checked
        const wendsdayEveningSelected = event.target.wendsdayEveningSelected.checked
        const thursdayMorningSelected = event.target.thursdayMorningSelected.checked
        const thursdayAfternoonSelected = event.target.thursdayAfternoonSelected.checked
        const thursdayEveningSelected = event.target.thursdayEveningSelected.checked
        const fridayMorningSelected = event.target.fridayMorningSelected.checked
        const fridayAfternoonSelected = event.target.fridayAfternoonSelected.checked
        const fridayEveningSelected = event.target.fridayEveningSelected.checked
        const saturdayMorningSelected = event.target.saturdayMorningSelected.checked
        const saturdayAfternoonSelected = event.target.saturdayAfternoonSelected.checked
        const saturdayEveningSelected = event.target.saturdayEveningSelected.checked
        const sundayMorningSelected = event.target.sundayMorningSelected.checked
        const sundayAfternoonSelected = event.target.sundayAfternoonSelected.checked
        const sundayEveningSelected = event.target.sundayEveningSelected.checked
        const kidsFrom = parseInt(event.target.kidsFrom.value)
        const kidsTo = parseInt(event.target.kidsTo.value)

        try {
            searchParents(sessionStorage.token, mondayMorningSelected, mondayAfternoonSelected, mondayEveningSelected, tuesdayMorningSelected, tuesdayAfternoonSelected, tuesdayEveningSelected, wendsdayMorningSelected, wendsdayAfternoonSelected, wendsdayEveningSelected, thursdayMorningSelected, thursdayAfternoonSelected, thursdayEveningSelected, fridayMorningSelected, fridayAfternoonSelected, fridayEveningSelected, saturdayMorningSelected, saturdayAfternoonSelected, saturdayEveningSelected, sundayMorningSelected, sundayAfternoonSelected, sundayEveningSelected, kidsFrom, kidsTo, (error, parents) => {
                if (error) {
                    alert(error)
                    return
                }
                setParents(parents.reverse())
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {

    }, [listUpdateStamp])





    return <Container className='w-full sm:w-1/3 h-full mb-20'>


        <Container TagName='form' className='sm: w-1/3  p-5' onSubmit={handleSubmit}>
            <label className='p-5 mb-10' htmlFor="search">SEARCH PARENTS</label>
            <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
                <legend>Availability</legend>
                <table className='table table-fixed m-5'>
                    <thead>
                        <tr className='space-x-1'>
                            <th>Day</th>
                            <th>Morning</th>
                            <th>Afternoon</th>
                            <th>Evening</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Monday</th>
                            <td><input type="checkbox" id='mondayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='mondayAfternoonSelected' name='mondayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='mondayEveningSelected' name='mondayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Tuesday</th>
                            <td><input type="checkbox" id='tuesdayMorningSelected' name='tuesdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='tuesdayAfternoonSelected' name='tuesdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='tuesdayEveningSelected' name='tuesdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Wendsday</th>
                            <td><input type="checkbox" id='wendsdayMorningSelected' name='wendsdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='wendsdayAfternoonSelected' name='wendsdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='wendsdayEveningSelected' name='wendsdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Thursday</th>
                            <td><input type="checkbox" id='thursdayMorningSelected' name='thursdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='thursdayAfternoonSelected' name='thursdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='thursdayEveningSelected' name='thursdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Friday</th>
                            <td><input type="checkbox" id='fridayMorningSelected' name='fridayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='fridayAfternoonSelected' name='fridayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='fridayEveningSelected' name='fridayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Saturday</th>
                            <td><input type="checkbox" id='saturdayMorningSelected' name='saturdayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='saturdayAfternoonSelected' name='saturdayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='saturdayEveningSelected' name='saturdayEveningSelected' ></input></td>

                        </tr>
                        <tr className='text-center space-x-1'>
                            <th className='space-x-2'>Sunday</th>
                            <td><input type="checkbox" id='sundayMorningSelected' name='sundayMorningSelected' ></input></td>
                            <td><input type="checkbox" id='sundayAfternoonSelected' name='sundayAfternoonSelected' ></input></td>
                            <td><input type="checkbox" id='sundayEveningSelected' name='sundayEveningSelected' ></input></td>

                        </tr>
                    </tbody>
                </table>


            </fieldset>

            <fieldset className='flex flex-row p-5 border-solid border-2 border-orange-500 rounded-md'>
                <legend>Kids</legend>
                <p>From: <input type="number" name="kidsFrom" className='bg-transparent' /> </p>
                <p>To: <input type="number" name="kidsTo" className='bg-transparent'/> </p>

            </fieldset>
            

            <Container className=' m-3'>

                <Button type='submit'>SEARCH</Button>
            </Container>
        </Container>

        <Container className="gap-2">


            {parents.map(parent => <li className="w-[30ch] p-3 rounded-lg border-solid border-2 border-[#6b7280] list-none" key={parent.id} id={parent.id}>
                <strong className="w-[28ch] text-l text-left">{parent.user.name}</strong>
                <p>City: {parent.city}</p>
                <p>Email: {parent.user.email}</p>
                <ul>Kids : {parent.kids.map(kid => <li key={kid.id}> {kid.name}, {kid.dateOfBirth.slice(0,10)}</li>)}</ul>
                <p>Description: {parent.description}</p>
                <p>Extras: {parent.extras}</p>
                <ul>Availability : {parent.availabilities.map(availabity => <li key={availabity.id}>{availabity.day}, {availabity.times}</li>)}</ul>
            </li>
            )}

        </Container>


    </Container>


}
export default SearchParents