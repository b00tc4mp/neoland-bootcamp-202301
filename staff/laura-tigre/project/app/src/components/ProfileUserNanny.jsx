import { useState} from "react"
import {useParams} from 'react-router-dom'
import UpdateUserPassword from "./UpdateUserPassword"
import UpdateUserEmail from "./UpdateUserEmail"
// import UpdateAvailabilities from "./UpdateAvailabilities"
import updateDescription from "../logic/update-nanny-description"
import updateExperience from "../logic/update-nanny-experience"
import unregisterNanny from "../logic/unregister-nanny"
import Button from '../library/Button'
import Container from '../library/Container'
import Feedback from './Feedback'



function ProfileUserNanny({onUnregisterNanny}) {
  console.log('Profile -> render')
  console.log('UpdateUserPassword -> render')

  const [feedback, setFeedback] = useState()
  const {nannyId} = useParams()

 
  const handleSubmitExperience = (event) => {
    event.preventDefault()
    const newExperience =event.target.newExperience.value
    try {
      updateExperience(sessionStorage.token,nannyId,newExperience,error => {
        if (error) {
          setFeedback({
            message: error.message,
            level: 'error'
          })
          return
        }
       
        event.target.reset()
        setFeedback({
          message: 'experience updated successfully',
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
  const handleSubmitDescription = (event) => {
    event.preventDefault()
    const newDescription = event.target.newDescription.value
    try {
      updateDescription(sessionStorage.token,nannyId,newDescription,error => {
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
  const handleSubmitUnregister = (event) => {
    event.preventDefault()

    const password = event.target.password.value
    try {
        unregisterNanny(sessionStorage.token, password, error => {
            if (error) {

                setFeedback({
                    message: error.message,
                    level: 'error'
                })
                return
            }
            onUnregisterNanny()
        })
    } catch (error) {
        setFeedback({
            message: error.message,
            level: 'error'
        })

    }
}


 

  return <Container className=" sm: w-1/2 mb-20 items-center ">
   {/* <UpdateAvailabilities/> */}
    <UpdateUserPassword/>
    <UpdateUserEmail />

    <Container TagName="form" onSubmit={handleSubmitExperience} className="sm: w-1/2 flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend >Experience</legend>
        <input
          className="bg-transparent "
          type="number"
          name="newExperience"
          placeholder=" new experience" />

        <Button type='submit'> New Experience</Button>

      </fieldset>
   
    </Container>

    <Container TagName="form" onSubmit={handleSubmitDescription} className="sm: w-1/2
    flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend >Description</legend>
        <input
          className="bg-transparent "
          type="text"
          name="newDescription"
          placeholder=" new description" />

        <Button type="submit">New description</Button>

      </fieldset>

   
    </Container>

    <Container TagName="form" onSubmit={handleSubmitUnregister} className="sm: w-1/2 flex flex-col items-center justify-center gap-4 mt-10 p-3 rounded-lg">
      <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
        <legend>Unregister User</legend>
       
        <input
          className="bg-transparent "
          type="password"
          name="password"
          placeholder=" your password" />
        <Button type="submit">Unregister user</Button>

      </fieldset>

    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
    </Container>


  </Container>







}
export default ProfileUserNanny
