import { useState } from "react"
import updateAvailabilities from "../logic/update-availabilities"
import Button from "../library/Button"
import Container from "../library/Container"
import Feedback from "./Feedback"

function UpdateAvailabilities(){

    const [feedback, setFeedback] = useState()
    const handleSubmit = () => {


    }
    return <Container TagName="form" className='sm: w-1/2  p-5' onSubmit={handleSubmit}>
    <fieldset className='sm: w-1/2 p-5 border-solid border-2 border-orange-500 rounded-md'>
      <legend>Availability</legend>
      <table className='sm: table table-fixed m-5'>
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

      <Button type="submit">New Availability</Button>
    </fieldset>
    {feedback && <Feedback message={feedback.message} level={feedback.level} />}
  </Container>

}
export default updateAvailabilities