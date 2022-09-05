import React from "react";
// import DayList from "./DayList";
import "./App.css";
// import Appointment from "./Appointment/index";
// import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
// import axios from "axios";

// import useApplicationData from "../hooks/useApplicationData";


//implementation for the Application component
export default function App() {
  //objects fetched from the cumston hook useApplicationData

  // const {
  //   state,
  //   setDay,
  //   bookInterview,
  //   cancelInterview

    
  // } = useApplicationData();

  console.log('----------');
  console.log('after');
  console.log('----------');

  //get interviewers for a day
  // const interviewers = getInterviewersForDay(state, state.day);

  //Convert Object of objects into Array of objects and
  //Turn appointment array into appointment components array for each weekday
  // const dailyAppointments = getAppointmentsForDay(state, state.day);
  // const schedule = dailyAppointments.map((appointment) => {
  //   const interview = getInterview(state, appointment.interview);
  //   return (
  //     <Appointment
  //       key={appointment.id}
  //       {...appointment}
  //       id={appointment.id}
  //       time={appointment.time}
  //       interview={interview} 
  //       interviewers={interviewers}
  //       bookInterview={bookInterview}
  //       cancelInterview={cancelInterview}
  //     />
      
  //   );  
  // }); 

  return (
    <main className="layout">
      {/* <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section> */}
      {/* <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section> */}
    </main>
  );
}
