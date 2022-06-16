import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'components/Application.scss';
import Appointment from './Appointment';
import DayList from './DayList';
import { getAppointmentsForDay, getInterview } from "helpers/selectors";


export default function Application() {
// const [day, setDay] = useState("Monday");
// const [days, setDays] = useState([]);

  const [state, setState] = useState({
    day: "Monday", // setDay function handles this
    days: [],      // setDays function handles this
    appointments: {},
    interviewers: {}
  });

  // Aliasing creates a function called setDay that updates the day state
  const setDay = day => setState({ ...state, day });
  // Aliasing creates a function called setDay that updates the days state
  // const setDays = days => setState(prev => ({...prev, days}));

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const parsedAppointment = dailyAppointments.map((appointment) => {
    const dailyInterview = getInterview(state, appointment.interview);
    return <Appointment key={appointment.id} {...appointment} interview={dailyInterview}/>;
  });

  useEffect(()=>{
    Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then(response => {
      setState(prev =>({...prev, 
        days: response[0].data, 
        appointments: response[1].data, 
        interviewers: response[2].data
      }));
      // console.log(response[0].data);
      // console.log(response[1].data);
      // console.log(response[2].data);
    }).catch((e)=>{console.log("error occurred during promise All :" , e)});
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {parsedAppointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
