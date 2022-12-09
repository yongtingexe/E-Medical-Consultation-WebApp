import React from 'react';
import './General.css'
import { useState } from "react";
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore"; 


export default function General() {
  const [patientName, setPatientName] = useState('')
  const [appointmentDoctor, setAppointmentDoctor] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [patientAge, setPatientAge] = useState(0)
  const [patientDescription, setPatientDescription] = useState('')

  const appointmentCollection = collection(db, 'Appointment')

  const createAppointment = async () => {
    const docRef = doc(db, appointmentCollection, '0abc1')
    await addDoc(docRef, {name: patientName, age: patientAge, doctor: appointmentDoctor,
    date: appointmentDate, email: contactEmail, contact: contactNumber, description: patientDescription})
  }

  return(

    <section>
      <div class="row">
        <h3>General specialty covers all types of common illness including fever, gastric and asthma. For patients who are unsure of their health issue,
            we shall determine whether one needs to see a doctor with specialist training and which specialty to go to.</h3>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE=" alt='somebody'/>
            </div>
            <h3>Dr. Ben Dover</h3>
            <p>General Surgery</p>
            <div class="icons">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE=" alt='somebody'/>
            </div>
            <h3>Dr. Jenny Tal</h3>
            <p>General Practitioner</p>
            <div class="icons">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE=" alt='somebody'/>
            </div>
            <h3>Dr. Moe Lester</h3>
            <p>General Practitioner</p>
            <div class="icons">
            </div>
          </div>
        </div>
      </div>

    <form>
      <div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Name" inputStyle="box" labelStyle="floating" placeholder="Enter your name as per IC" 
        onChange={(event) => { 
          setPatientName(event.target.value)
        }} />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Doctor" inputStyle="box" labelStyle="floating" placeholder="Choose a doctor"
         onChange={(event) => { 
          setAppointmentDoctor(event.target.value)
        }} />
    </div>
    <div className="mbsc-col-12 mbsc-col-lg-6">
        <input label="Date" inputStyle="box" labelStyle="floating" placeholder="Set a date"
         onChange={(event) => { 
          setAppointmentDate(event.target.value)
        }}  />
    </div>
</div>
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Email" inputStyle="box" labelStyle="floating" placeholder="Enter your email" 
         onChange={(event) => { 
          setContactEmail(event.target.value)
        }} />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Contact" inputStyle="box" labelStyle="floating" placeholder="Enter your contact"
         onChange={(event) => { 
          setContactNumber(event.target.value)
        }}  />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Age" inputStyle="box" labelStyle="floating" placeholder="Tell us your age" 
         onChange={(event) => { 
          setPatientAge(event.target.value)
        }} />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <input label="Description" inputStyle="box" labelStyle="floating" placeholder="Describe your symptons" 
         onChange={(event) => { 
          setPatientDescription(event.target.value)
        }} />
    </div>
</div>
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
        <div className="mbsc-button-group-block">
            <button onClick={createAppointment}>Send Appointment</button>
        </div>
    </div>
</div>
</form>
    </section>

  )
  };
