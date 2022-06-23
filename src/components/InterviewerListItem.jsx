import React from 'react';
import classNames from 'classnames';
import './InterviewerListItem.scss';

// components that displays items in interviewerlist
function InterviewerListItem(props) {
  const { avatar, name, selected, setInterviewer } = props;
  const interviewerClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected,
  });
  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}

export default InterviewerListItem;
