export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state; // Adds readability to make it easier to understand

  // Checks the state.days and finds if one of the name matches day
  const checkDay = days.find((eachDay) => eachDay.name === day);

  if (!checkDay) return [];

  return checkDay.appointments.map((appointmentID) => {
    return appointments[appointmentID];
  });
}

export function getInterview(state, interview) {
  const { interviewers } = state;

  if (!interview) return null;

  const interviewerID = interview.interviewer;

  return (interview = {
    ...interview,
    interviewer: interviewers[interviewerID],
  });
}

export function getInterviewersForDay(state, day) {
  const { days, interviewers } = state; // Adds readability to make it easier to understand

  if (days.length === 0) return [];

  // Checks the state.days and finds if one of the name matches day
  const checkDay = days.find((eachDay) => eachDay.name === day);

  if (!checkDay) return [];

  return checkDay.interviewers.map((interviewerID) => {
    return interviewers[interviewerID];
  });
}
