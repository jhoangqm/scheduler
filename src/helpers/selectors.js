export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter((eachDay) => eachDay.name === day);
  // console.log('filteredDay :', filteredDay);

  if (filteredDay.length === 0 || state.days.length === 0) {
    return [];
  }

  const appointmentsArray = filteredDay[0].appointments;
  // console.log('AppointmentsArray :', appointmentsArray);

  const parsedAppointments = appointmentsArray.map((appointmentID) => {
    // console.log('appointments : ', state.appointments[appointmentID]);
    return state.appointments[appointmentID];
  });
  console.log(parsedAppointments);
  return parsedAppointments;
}
