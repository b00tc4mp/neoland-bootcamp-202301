import { useState, useEffect } from "react"
import unregisterParent from "../logic/unregister-parent"
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'
import UpdateUserPassword from "./UpdateUserPassword"
import UpdateUserEmail from "./UpdateUserEmail"
import updateParentAvailabilities from "../logic/update-parent-availabilities"
import updateDescriptionParent from "../logic/update-parent-description"
import updateExtrasParent from "../logic/update-parent-extras"
import createKids from "../logic/create-kids"
import {useParams} from 'react-router-dom'
import retrieveParent from '../logic/retrieve-parent'



function ProfileParent() {
  console.log('Profile -> render')
  console.log('UpdateUserPassword -> render')

  const [feedback, setFeedback] = useState()
  const [parent, setParent] = useState()
  const {parentId} = useParams()
  

  useEffect(() => {

    try {
    
    retrieveParent(sessionStorage.token, parentId, (error, parent)=>{
        if (error) {
            alert(error)
            return
        } 
        
        setParent(parent)
    })
        
    } catch (error) {
        alert(error.message)
    }
      
}, [])
  const handleSubmitAvailability = (event) => {
    event.preventDefault()

    const newMondayMorningSelected = event.target.newMondayMorningSelected.checked
    const newMondayAfternoonSelected = event.target.newMondayAfternoonSelected.checked
    const newMondayEveningSelected = event.target.newMondayEveningSelected.checked
    const newTuesdayMorningSelected = event.target.newTuesdayMorningSelected.checked
    const newTuesdayAfternoonSelected = event.target.newTuesdayAfternoonSelected.checked
    const newTuesdayEveningSelected = event.target.newTuesdayEveningSelected.checked
    const newWendsdayMorningSelected = event.target.newWendsdayMorningSelected.checked
    const newWendsdayAfternoonSelected = event.target.newWendsdayAfternoonSelected.checked
    const newWendsdayEveningSelected = event.target.newWendsdayEveningSelected.checked
    const newThursdayMorningSelected = event.target.newThursdayMorningSelected.checked
    const newThursdayAfternoonSelected = event.target.newThursdayAfternoonSelected.checked
    const newThursdayEveningSelected = event.target.newThursdayEveningSelected.checked
    const newFridayMorningSelected = event.target.newFridayMorningSelected.checked
    const newFridayAfternoonSelected = event.target.newFridayAfternoonSelected.checked
    const newFridayEveningSelected = event.target.newFridayEveningSelected.checked
    const newSaturdayMorningSelected = event.target.newSaturdayMorningSelected.checked
    const newSaturdayAfternoonSelected = event.target.newSaturdayAfternoonSelected.checked
    const newSaturdayEveningSelected = event.target.newSaturdayEveningSelected.checked
    const newSundayMorningSelected = event.target.newSundayMorningSelected.checked
    const newSundayAfternoonSelected = event.target.newSundayAfternoonSelected.checked
    const newSundayEveningSelected = event.target.newSundayEveningSelected.checked

    try {
      updateParentAvailabilities(sessionStorage.token, newMondayMorningSelected,
        newMondayAfternoonSelected,
        newMondayEveningSelected,
        newTuesdayMorningSelected, newTuesdayAfternoonSelected, newTuesdayEveningSelected, newWendsdayMorningSelected, newWendsdayAfternoonSelected, newWendsdayEveningSelected, newThursdayMorningSelected, newThursdayAfternoonSelected, newThursdayEveningSelected, newFridayMorningSelected, newFridayAfternoonSelected, newFridayEveningSelected, newSaturdayMorningSelected, newSaturdayAfternoonSelected, newSaturdayEveningSelected, newSundayMorningSelected, newSundayAfternoonSelected, newSundayEveningSelected, error => {
          if (error) {
            setFeedback({
              message: error.message,
              level: 'error'
            })
            return
          }

          event.target.reset()
          setFeedback({
            message: 'availability updated successfully',
            level: 'success'
          })
        })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })
    }



  }




  const handleSubmitUnregister = (event) => {
    event.preventDefault()

    const password = event.target.password.value
    try {
      unregisterParent(sessionStorage.token, password, error => {
        if (error) {

          setFeedback({
            message: error.message,
            level: 'error'
          })
          return
        }
        delete sessionStorage.token

      })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })

    }
  }
  const handleSubmitDescription = (event) => {
    event.preventDefault()
    const newDescription = event.target.newDescription.value
    try {
      updateDescriptionParent(sessionStorage.token, newDescription, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })
          return
        }
        event.target.reset()

        setFeedback({
          message: 'description updated successfully',
          level: 'success'
        })
      })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })
    }

  }

  

  const handleSubmitKids = (event) => {
    event.preventDefault()
    const newName = event.target.newName.value
    const newDateOfBirth = new Date(event.target.newDateOfBirth)
    try {
      createKids(sessionStorage.token, newName, newDateOfBirth, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })
          return
        }
        event.target.reset()

        setFeedback({
          message: 'kid updated successfully',
          level: 'success'
        })
      })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })
    }

  }
  const handleSubmitExtras = (event) => {
    event.preventDefault()
    const newExtras = event.target.newExtras.value
    try {
      updateExtrasParent(sessionStorage.token, newExtras, error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })
          return
        }
        event.target.reset()

        setFeedback({
          message: 'extras updated successfully',
          level: 'success'
        })
      })
    } catch (error) {
      setFeedback({
        message: error.message,
        level: 'error'
      })
    }

  }



  return <Container className="mb-20">
    <Container TagName="form" className='sm: w-1/3 p-5' onSubmit={handleSubmitAvailability}>
      <fieldset className='sm: w-1/3 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>Availability</legend>
        <table className='sm: table table-fixed m-5'>
          <thead>
            <tr className='sm:space-x-1'>
              <th>Day</th>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>
            <tr className='sm:text-center space-x-1'>
              <th className='sm:space-x-2'>Monday</th>
              <td><input type="checkbox" id='newMondayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newMondayAfternoonSelected' name='newMondayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newMondayEveningSelected' name='newMondayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='sm:space-x-2'>Tuesday</th>
              <td><input type="checkbox" id='newTuesdayMorningSelected' name='newTuesdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newTuesdayAfternoonSelected' name='newTuesdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newTuesdayEveningSelected' name='newTuesdayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='sm:space-x-2'>Wendsday</th>
              <td><input type="checkbox" id='newWendsdayMorningSelected' name='newWendsdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newWendsdayAfternoonSelected' name='newWendsdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newWendsdayEveningSelected' name='newWendsdayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='sm:space-x-2'>Thursday</th>
              <td><input type="checkbox" id='newThursdayMorningSelected' name='newThursdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newThursdayAfternoonSelected' name='newThursdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newThursdayEveningSelected' name='newThursdayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='sm:space-x-2'>Friday</th>
              <td><input type="checkbox" id='newFridayMorningSelected' name='newFridayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newFridayAfternoonSelected' name='newFridayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newFridayEveningSelected' name='newFridayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='space-x-2'>Saturday</th>
              <td><input type="checkbox" id='newSaturdayMorningSelected' name='newSaturdayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newSaturdayAfternoonSelected' name='newSaturdayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newSaturdayEveningSelected' name='newSaturdayEveningSelected' ></input></td>

            </tr>
            <tr className='sm:text-center space-x-1'>
              <th className='space-x-2'>Sunday</th>
              <td><input type="checkbox" id='newSundayMorningSelected' name='newSundayMorningSelected' ></input></td>
              <td><input type="checkbox" id='newSundayAfternoonSelected' name='newSundayAfternoonSelected' ></input></td>
              <td><input type="checkbox" id='newSundayEveningSelected' name='newSundayEveningSelected' ></input></td>

            </tr>
          </tbody>
        </table>

        <Button type="submit">New Availability</Button>
      </fieldset>
      {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>
    <UpdateUserPassword />
    <UpdateUserEmail />
    <Container TagName="form" onSubmit={handleSubmitExtras} className="sm: w-1/2
    flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend >Extras</legend>
        <input
          className="sm: bg-transparent "
          type="text"
          name="newExtras"
          placeholder=" new extras" />

        <Button type="submit">New extras</Button>

      </fieldset>


    </Container>
    <Container>
     {/* { <ul>Kids : {parent.kids.map(kid => <li key={kid.id}>{kid.name}, {kid.dateOfBirth.slice(0,10)}</li>)}</ul>} */}
    <Container TagName="form" onSubmit={handleSubmitKids} className="sm: w-1/2
    flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend >Kid</legend>
        <input
          className="sm: bg-transparent "
          type="text"
          name="newName"
          placeholder="name" />
        <input
          className="sm: bg-transparent "
          type="date"
          name="newDateOfBirth"
        />

        <Button type="submit">Add</Button>

      </fieldset>


    </Container>
    </Container>

    <Container TagName="form" onSubmit={handleSubmitDescription} className="sm: w-1/2
    flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend >Description</legend>
        <input
          className="sm: bg-transparent "
          type="text"
          name="newDescription"
          placeholder=" new description" />

        <Button type="submit">New description</Button>

      </fieldset>


    </Container>




    <Container TagName="form" onSubmit={handleSubmitUnregister} className="flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend className="text-xl">Unregister User</legend>

        <input
          className="bg-transparent "
          type="password"
          name="unregister"
          placeholder=" your password" />
        <Button type="submit">Unregister user</Button>

      </fieldset>

    </Container>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}


  </Container>







}
export default ProfileParent
