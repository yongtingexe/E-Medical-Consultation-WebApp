import React from 'react'
import './General.css'
import { useState } from "react";
import Button from '@mui/material/Button'


export default function Pediatrics()  {
  return (
    <section>
    <div class="row">
      <h3>General specialty covers all types of common illness including fever, gastric and gastric. For patients who are unsure of health issue,
          we shall determine whether one needs to see a doctor with specialist training.</h3>
    </div>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="img-container">
            <img src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE=" alt='somebody'/>
          </div>
          <h3>Ben Dover</h3>
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
          <h3>Jenny Tal</h3>
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
          <h3>Moe Lester</h3>
          <p>General Practitioner</p>
          <div class="icons">
          </div>
        </div>
      </div>
    </div>

  <form>
    <div className="mbsc-row">
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="Email" inputStyle="box" labelStyle="floating" placeholder="Enter your email address" />
  </div>
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="Password" inputStyle="box" labelStyle="floating" placeholder="Set a password" passwordToggle="true" />
  </div>
  <div className="mbsc-col-12 mbsc-col-lg-6">
      <input label="Address" inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
  </div>
</div>
<div className="mbsc-row">
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="Town" inputStyle="box" labelStyle="floating" placeholder="Enter your town" />
  </div>
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="State" inputStyle="box" labelStyle="floating" placeholder="Select your state" />
  </div>
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="Zip" inputStyle="box" labelStyle="floating" placeholder="What is your zip code" />
  </div>
  <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
      <input label="Country" inputStyle="box" labelStyle="floating" placeholder="Select your country" />
  </div>
</div>
<div className="mbsc-row">
  <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
      <div className="mbsc-button-group-block">
          <Button color="success">Create account</Button>
      </div>
  </div>
</div>
</form>
  </section>
  )
};
