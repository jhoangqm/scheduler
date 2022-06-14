import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';

function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const mappedInterviewers = interviewers.map((eachInterviewer) => {
    return (
      <InterviewerListItem
        key={eachInterviewer.id}
        name={eachInterviewer.name}
        avatar={eachInterviewer.avatar}
        selected={eachInterviewer.id === interviewer}
        setInterviewer={setInterviewer}
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
