export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state; // Adds readability to make it easier to understand

  // Checks the state.days and finds if one of the name matches day
  const checkDay = days.find((eachDay) => eachDay.name === day);
  // console.log('checkDay :', checkDay);

  if (!checkDay) return [];

  return checkDay.appointments.map((appointmentID) => {
    // console.log('appointments : ', appointments[appointmentID]);
    return appointments[appointmentID];
  });
}

export function getInterview(state, interview) {
  const { interviewers } = state;

  if (!interview) return null;

  const interviewerID = interview.interviewer;

  // console.log(interviewerID);

  return (interview = {
    ...interview,
    interviewer: interviewers[interviewerID],
  });

  // This is the same as above ^
  // return (interview = {
  //   student: interview.student,
  //   interviewer: interviewers[interviewID]
  // })
}
