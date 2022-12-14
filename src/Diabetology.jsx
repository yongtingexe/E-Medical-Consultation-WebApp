import React from "react";
import "./General.css";
import Appointment from "./Appointment";

export default function General() {
  return (
    <section>
      <div class="row">
        <h1>Specialist for diabetes</h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img
                src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE="
                alt="somebody"
              />
            </div>
            <h3>Dr. Johnny</h3>
            <p>Best Doctor</p>
            <div class="icons"></div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img
                src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE="
                alt="somebody"
              />
            </div>
            <h3>Dr. Pain</h3>
            <p>Best Doctor</p>
            <div class="icons"></div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="img-container">
              <img
                src="https://media.istockphoto.com/id/175396479/photo/doctor-gesturing-thumbs-up-isolated.jpg?s=612x612&w=0&k=20&c=yOu9ryZKE0OpXkFRH0CJxrIEdkoawy2u40gB716incE="
                alt="somebody"
              />
            </div>
            <h3>Dr. Strange</h3>
            <p>Best Doctor</p>
            <div class="icons"></div>
          </div>
        </div>
      </div>
      <Appointment />
    </section>
  );
}
