import React from "react";
import axios from "axios";
import {useState} from 'react'

const Appointment = () => {
    const [appointment, setAppointment] = useState({
        appointmentID: null,
        patientName: '',
        appointmentDoctor: '',
        appointmentDate: '',
        contactEmail: '',
        contactNumber: '',
        patientDescription: '',
        patientAge: null  
      })
  
    const handleChange = (e) => {
      setAppointment((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleClick = async e => {
      e.preventDefault()
      try{
        await axios.post('http://localhost:8800/appointment', appointment)
      }catch(err){
        console.log(err)
      }
    }
  
    return (

    <form>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="AppointmentID"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Appointment ID"
          name="appointmentID"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Name"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Patient's name as per IC"
          name="patientName"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Doctor"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Doctor's name"
          name="appointmentDoctor"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Date"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Date of choice"
          name="appointmentDate"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Email"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Your Email"
          name="contactEmail"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Phone"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Your Contact Number"
          name="contactNumber"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Age"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Patient's age"
          name="patientAge"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input
          label="Description"
          inputStyle="box"
          labelStyle="floating"
          placeholder="Brief description of symptons"
          name="patientDescription"
          onChange={handleChange}
        />
      </div>
      <div className="mbsc-row">
        <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
          <div className="mbsc-button-group-block">
            <button onClick={handleClick}>Send Appointment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Appointment;
