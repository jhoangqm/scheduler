import React, {Fragment} from 'react';
import InterviewerListItem from './InterviewerListItem';
import './InterviewerList.scss';
import PropTypes from 'prop-types';

// component displays interviewer list
function InterviewerList(props) {
  const { interviewers, value, onChange } = props;
  const mappedInterviewers = interviewers.map((person) => {
    return (
      <InterviewerListItem
        key={person.id}
        name={person.name}
        avatar={person.avatar}
        selected={person.id === value}
        setInterviewer={() => onChange(person.id)}
      />
    );
  });
  return (
    <Fragment>
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{mappedInterviewers}</ul>
    </section>
    </Fragment>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;
