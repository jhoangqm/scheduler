import { useEffect, useReducer } from 'react';
import axios from 'axios';

// This custom hook handles all of the application data
export default function useApplicationData() {
  // reducer
  const initialState = {
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  };

  const SET_DAY = 'SET_DAY';
  const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
  const SET_INTERVIEW = 'SET_INTERVIEW';

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };
      case SET_APPLICATION_DATA:
        return {
          ...state,
          days: action.days,
          appointments: action.appointments,
          interviewers: action.interviewers,
        };
      case SET_INTERVIEW:
        return {
          ...state,
          appointments: action.appointments,
          days: action.days,
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  // this function is used to update the spots dynamicly
  const updateSpots = function (state, appointments) {
    const dayObj = state.days.find((d) => d.name === state.day);

    let spots = 0;

    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    const newDay = { ...dayObj, spots };
    const days = state.days.map((day) =>
      day.name === state.day ? newDay : day
    );

    return days;
  };

  const setDay = (day) => dispatch({ type: SET_DAY, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ])
      .then((response) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          days: response[0].data,
          appointments: response[1].data,
          interviewers: response[2].data,
        });
      })
      .catch((e) => {
        console.log('error occurred during promise All :', e);
      });
  }, []);

  // updates server with new interview after a save
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        const days = updateSpots(state, appointments);
        dispatch({ type: SET_INTERVIEW, appointments, days });
      });
  }

  // updates server with new interview spot after deleting an existing appointment
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .delete(`/api/appointments/${id}`, appointment)
      .then((response) => {
        const days = updateSpots(state, appointments);
        dispatch({ type: SET_INTERVIEW, appointments, days });
      });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
