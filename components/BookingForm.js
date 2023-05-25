'use client';
import React from 'react'

const BookingForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    
    <div>
      <section className="section is-medium">
<div className="columns is-mobile">
    <div className="column">
    <h5 className="subtitle">Select Vessel</h5>
    {/* <input value={post.vesselName} onChange={(e) => setPost({...post, vesselName: e.target.value})} className="input is-link" type="text" placeholder="Enter vessel name" /> */}
    </div>
    </div>
</section>
<section className="section is-medium">
<div className="columns is-mobile">
  <div className="column">
    <h5 className="subtitle">Select Berth</h5>
  <div className="select is-link">
  <select value={post.berth} onChange={(e) => setPost({...post, berth: e.target.value})}>
    <option >Select Berth</option >
    <option value="B01">B01</option >
    <option value="B02">B02</option >
    <option value="B02">B03</option >
    <option value="B02">B04</option >
    <option value="B02">B05</option >
    <option value="B02">B06</option >
    <option value="B02">B07</option >
    <option value="B02">B08</option >
    <option value="B02">B09</option >
    <option value="B02">B010</option >
    <option value="B02">B11</option >
    <option value="B02">B12</option >
  </select>
</div>
    </div>
    <div className="column">
    <h1 className="subtitle">Select Date</h1>
    <input value={post.date} onChange={(e) => setPost({...post, date: e.target.value})} className="input" type="date" placeholder="Input Date"></input>
    </div>
  <div className="column">
    <h1 className="subtitle">Select Timing</h1>
  <div className="select is-link">
  <select value={post.time} onChange={(e) => setPost({...post, time: e.target.value})}>
    <option >Select Timing</option >
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
 
</div>
</section>
<section className="section is-medium">
<h3>Require Tug and Pilot:</h3>
<div className="control">
  <label className="radio">
    <input onClick={setPost({...post, requireTug: "yes" })} type="radio" name="answer" />
    Yes
  </label>
  <label className="radio">
    <input onClick={setPost({...post, requireTug: "yes" })} type="radio" name="answer" />
    No
  </label>
</div>
</section>
<section className="section is-medium">
<h3>Additional Infomation:</h3>
<textarea value={post.additionalInfo} onChange={(e) => setPost({...post, additionalInfo: e.target.value})} className="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
<div>
<button className="button is-primary" type='submit'>Submit request</button>
<button className="button is-danger" type='submit'>Cancel request</button>
</div>
</section>
    </div>
   
  )
}

export default BookingForm
