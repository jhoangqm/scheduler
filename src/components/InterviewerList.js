import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';

function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const mappedInterviewers = interviewers.map((person) => {
    return (
      <InterviewerListItem
        key={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={person.id === interviewer}
        setInterviewer={() => onChange(person.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light"></h4>
      <ul className="interviewers__list">{mappedInterviewers}</ul>
    </section>
  );
}

export default InterviewerList;
