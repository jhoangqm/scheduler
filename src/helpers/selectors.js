export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state; // Adds readability to make it easier to understand
  const filteredDay = days.filter((eachDay) => eachDay.name === day);
  console.log('filteredDay :', filteredDay);

  if (filteredDay.length === 0 || days.length === 0) {
    return [];
  }

  const appointmentsArray = filteredDay[0].appointments;
  console.log('AppointmentsArray :', appointmentsArray);

  const parsedAppointments = appointmentsArray.map((appointmentID) => {
    console.log('appointments : ', appointments[appointmentID]);
    return appointments[appointmentID];
  });
  console.log(parsedAppointments);
  return parsedAppointments;
}
