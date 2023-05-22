import React from 'react'
import MultipleSelect from '../../components/MultipleSelect'

const page = () => {
  return (
    <div>
         <section class="section is-medium">
  <h1 class="title">Berth and timeslot booking</h1>
  <h2 class="subtitle">
    Book a berth and timeslot for your vessel
  </h2>
</section>
<section class="section is-medium">
<div class="columns is-mobile">
    <div class="column">
    <h5 class="subtitle">Select Vessel</h5>
    <input class="input is-link" type="text" placeholder="Enter vessel name" />
    </div>
    </div>
</section>
<section class="section is-medium">
<div class="columns is-mobile">
  <div class="column">
    <h5 class="subtitle">Select Berth</h5>
  <div class="select is-link">
  <select>
    <option>Select Berth</option>
    <option>B01</option>
    <option>B02</option>
    <option>B03</option>
    <option>B04</option>
    <option>B05</option>
    <option>B06</option>
    <option>B07</option>
    <option>B08</option>
    <option>B09</option>
    <option>B010</option>
    <option>B11</option>
    <option>B12</option>
  </select>
</div>
    </div>
    <div class="column">
    <h1 class="subtitle">Select Date</h1>
    <input class="input" type="date" placeholder="Input Date"></input>
    </div>
  <div class="column">
    <h1 class="subtitle">Select Timing</h1>
  <div class="select is-link">
  <select>
    <option>Select Timing</option>
    <option>0000H-0100H</option>
    <option>0100H-0200H</option>
    <option>0200H-0300H</option>
    <option>0300H-0400H</option>
    <option>0400H-0500H</option>
    <option>0500H-0600H</option>
    <option>0600H-0700H</option>
    <option>0700H-0800H</option>
    <option>0800H-0900H</option>
    <option>0900H-1000H</option>
    <option>1000H-1100H</option>
    <option>1100H-1200H</option>
    <option>1200H-1300H</option>
    <option>1300H-1400H</option>
    <option>1400H-1500H</option>
    <option>1500H-1600H</option>
    <option>1600H-1700H</option>
    <option>1700H-1800H</option>
    <option>1800H-1900H</option>
    <option>1900H-2000H</option>
    <option>2000H-2100H</option>
    <option>2100H-2200H</option>
    <option>2200H-2300H</option>
    <option>2300H-2400H</option>
  </select>
</div>
  </div>
 
</div>
</section>
<section class="section is-medium">
<h3>Require Tug and Pilot:</h3>
<div class="control">
  <label class="radio">
    <input type="radio" name="answer" />
    Yes
  </label>
  <label class="radio">
    <input type="radio" name="answer" />
    No
  </label>
</div>
</section>
<section class="section is-medium">
<h3>Additional Infomation:</h3>
<textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
<div>
<button class="button is-primary" type='submit'>Submit request</button>
<button class="button is-danger" type='submit'>Cancel request</button>
</div>
</section>
    </div>
  )
}

export default page
