import React, { use, useState } from 'react'
import DigitalClockAmPm from './DigitalClockAmPm'
import { useContext, useEffect } from 'react'
import AuthContext from '@/context/AuthContext'
import SlotPicker from 'slotpicker'
import {format, set} from 'date-fns'
import { useRouter } from 'next/navigation';

const Form = ({ post, setPost, submitting, handleSubmit, updating, handleUpdateSubmit, booking, timingsBooked, setTimingsBooked, params, filteredDate, setFilteredDate }) => {

  let {user} = useContext(AuthContext)
  const router = useRouter()

  let newFrom;

  // useEffect(() => {
  //   let from = post.time;
  //   newFrom = from
  //   // setPost({...post, vesselName: user.username, date_time: {date: params.date, time: newFrom}})
  //   // console.log(post)
  //   setPost({...post, date_time: {
  //     ...post.date_time,
  //     time: newFrom
  //   } })
  // }, [post.date_time.time])

  useEffect(() => {
    setPost({...post, date_time: {
      date: params.date,
    } })
    console.log(post)
  }, [params.date])

  useEffect(() => {
    let from = post.date_time.time;
    newFrom = from
    setPost({...post, vesselName: user.username, date_time: { date: params.date, time: newFrom}})
    console.log(post)
  }, [post.date_time.time])
 
  useEffect(() => {
    const filteredData = booking.filter((booking) => booking.date_time.date === params.date )
    setFilteredDate(filteredData)
    let timesBooked = []
    filteredDate.map((time) => {
      timesBooked.push(time.date_time.time)
    })
    setTimingsBooked(timesBooked)
    timesBooked = []
    console.log(timingsBooked)
  }, [params.date, booking])


 

  return (
    <div>
      <div className="field">
  <label className="label">Vessel Name</label>
  <div className="control">
    <input disabled className="input" value={user.username} placeholder={user.username} />
  </div>
</div>


<div className="field">
    <label className="label">Select Date</label>
    <input  defaultValue={params.date} className="input" type="date" placeholder="Input Date" onChange={(e) => {
      setPost({...post, date_time: {
        ...post.date_time,
        date: e.target.value}})
       router.push(`/book/${e.target.value}`);
    }}
       ></input>
</div>

<div className="field">
  <label className="label">Select Timing</label>
<SlotPicker
  // Required, interval between two slots in minutes, 30 = 30 min
  interval={30}
  // Required, when user selects a time slot, you will get the 'from' selected value
  onSelectTime={(from) => {
    newFrom = from.format('HH:mm')
    setPost({...post, date_time: {
      ...post.date_time,
      time: newFrom}})
    // console.log(post.time)
  }}
  // Optional, array of unavailable time slots
  unAvailableSlots={timingsBooked}
  // Optional, 8AM the start of the slots
  from={'00:00'}
  // Optional, 09:00PM the end of the slots
  to={'23:30'}
  // Optional, 01:00 PM, will be selected by default
  defaultSelectedTime={'13:00'}
  // Optional, selected slot color
  selectedSlotColor='#F09999'
  // Optional, language of the displayed text, default is english (en)
  lang='en'
/>

</div>

<div className="field">
  <label className="label">Select Berth</label>
  <div className="control">
    <div className="select">
      <select onChange={(e) => setPost({...post, berth: e.target.value})}>
      <option>Select Berth</option >
    <option value="B01">B01</option >
    <option value="B02">B02</option >
    <option value="B03">B03</option >
    <option value="B04">B04</option >
    <option value="B05">B05</option >
    <option value="B06">B06</option >
    <option value="B07">B07</option >
    <option value="B08">B08</option >
    <option value="B09">B09</option >
    <option value="B10">B010</option >
    <option value="B11">B11</option >
    <option value="B12">B12</option >
      </select>
    </div>
  </div>
</div>

{/* <div className="field">
  <label className="label">Select Timing</label>
  <div className="control">
    <div className="select">
      <select>
      <option disabled>Select Timing</option >
    <option >0000H-0100H</option >
    <option >0100H-0200H</option >
    <option >0200H-0300H</option >
    <option >0300H-0400H</option >
    <option >0400H-0500H</option >
    <option >0500H-0600H</option >
    <option >0600H-0700H</option >
    <option >0700H-0800H</option >
    <option >0800H-0900H</option >
    <option >0900H-1000H</option >
    <option >1000H-1100H</option >
    <option >1100H-1200H</option >
    <option >1200H-1300H</option >
    <option >1300H-1400H</option >
    <option >1400H-1500H</option >
    <option >1500H-1600H</option >
    <option >1600H-1700H</option >
    <option >1700H-1800H</option >
    <option >1800H-1900H</option >
    <option >1900H-2000H</option >
    <option >2000H-2100H</option >
    <option >2100H-2200H</option >
    <option >2200H-2300H</option >
    <option >2300H-2400H</option >
      </select>
    </div>
  </div>
</div> */}

{/* <div className="field">
  <label className="label">Select Timing From</label>
<DigitalClockAmPm setPost={setPost} post={post}  />
</div> */}

{/* <div className="field">
    <label className="label">Select Time</label>
    <input className="input" type="time" placeholder="Input Date" disabled=timingsBooked {} onChange={(e) => setPost({...post, time: e.target.value})}></input>
</div> */}

{/* <div className="field">
  <label className="label">Select Timing To</label>
<DigitalClockAmPm timingsBooked={timingsBooked} setPost={setPost} post={post}/>
</div> */}

<div className="field">
  <label className="label">Select Activity</label>
  <div className="control">
    <div className="select">
      <select onChange={(e) => setPost({...post, activity: e.target.value})}>
      <option>Select Activity</option >
    <option value="Slipoff">Slipoff</option >
    <option value="Alongside">Alongside</option >
    <option value="Training Within Basin">Training Within Basin</option >
    <option value="Training Outside Basin">Training Outside Basin</option >
    </select>
    </div>
</div>
</div>

<div className="field">
  <label className="label">Require Pilot</label>
  <div className="control">
    <div className="select">
      <select onChange={(e) => setPost({...post, pilot: e.target.value})}>
      <option>Select Pilot</option >
    <option value="Yes">Yes</option >
    <option value="No">No</option >
    </select>
    </div>
</div>
</div>


  <div className="field">
  <label className="label">Select Number Of Tugs</label>
  <div className="control">
    <div className="select">
      <select onChange={(e) => setPost({...post, tug: e.target.value})}>
      <option>Select Number Of Tugs</option >
      <option value="0">0</option >
    <option value="1">1</option >
    <option value="2">2</option >
    <option value="3">3</option >
    </select>
    </div>
</div>
</div>
   



<br></br>
<div className="field">
  <label className="label">Remarks</label>
  <div className="control">
    <textarea className="textarea" placeholder="Nil if none" onChange={(e) => setPost({...post, message: e.target.value})}></textarea>
  </div>
</div>



<div className="field is-grouped">
{(updating) ? (
  <div className="control">
    <button className="button is-link" onClick={handleUpdateSubmit}>Edit</button>
  </div>
) : (
  <div className="control">
    <button className="button is-link" onClick={handleSubmit}>Submit</button>
  </div>
)}

  
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
    </div>
  )
}

export default Form
