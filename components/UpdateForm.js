import React from "react";
import { useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SlotPicker from "slotpicker";
import BookingContext from "@/context/BookingContext";

const Form = ({
  post,
  setPost,
  submitting,
  handleSubmit,
  updating,
  handleUpdateSubmit,
  params,
}) => {
  let { user } = useContext(AuthContext);
  let { booking, timingsBooked, setTimingsBooked } = useContext(BookingContext);

  useEffect(() => {
    setPost({ ...post, vesselName: user.username });
  }, []);

  let newFrom;

  

  useEffect(() => {
    let from = post.time;
    newFrom = from
    setPost({...post, vesselName: user.username, time: newFrom})
    console.log(post)
  }, [post.time])



  const router = useRouter();

  return (
    <div>
      <div className="field">
        <label className="label">Vessel Name</label>
        <div className="control">
          <input
            disabled
            className="input"
            value={user.username}
            placeholder={user.username}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Select Date</label>
        <input
          className="input"
          type="date"
          placeholder="Input Date"
          defaultValue={booking.date}
          onChange={(e) => setPost({ ...post, date: e.target.value })}
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
    setPost({...post, time: newFrom})
    // console.log(post.time)
  }}
  // Optional, array of unavailable time slots
  unAvailableSlots={timingsBooked}
  // Optional, 8AM the start of the slots
  from={'00:00'}
  // Optional, 09:00PM the end of the slots
  to={'23:30'}
  // Optional, 01:00 PM, will be selected by default
  defaultSelectedTime={post.time}
  // Optional, selected slot color
  selectedSlotColor='#F09999'
  // Optional, language of the displayed text, default is english (en)
  lang='en'
/>

</div>

      <br></br>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Nil if none"
            onChange={(e) => setPost({ ...post, message: e.target.value })}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Select Berth</label>
        <div className="control">
          <div className="select">
            <select
              onChange={(e) => setPost({ ...post, berth: e.target.value })}
            >
              <option>Select Berth</option>
              <option value="B01">B01</option>
              <option value="B02">B02</option>
              <option value="B03">B03</option>
              <option value="B04">B04</option>
              <option value="B05">B05</option>
              <option value="B06">B06</option>
              <option value="B07">B07</option>
              <option value="B08">B08</option>
              <option value="B09">B09</option>
              <option value="B10">B010</option>
              <option value="B11">B11</option>
              <option value="B12">B12</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleUpdateSubmit}>
            Edit
          </button>
        </div>

        <div className="control">
          <button
            className="button is-link is-light"
            onClick={() =>
              router.push(`/view/${encodeURIComponent(user.username)}`)
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
