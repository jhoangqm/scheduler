import React, { Fragment } from 'react';
import './styles.scss';
import useVisualMode from 'hooks/useVisualMode';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

import Form from './Form';
import Confirm from './Confirm';
import Status from './Status';
import Error from './Error';

// component that is handling new,existing appointments and most of the functionality
const Appointment = (props) => {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM";
  const SAVING = "SAVING";
  const DELETING = "DELETING"
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  
  // custom hook used to display "mode"
  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //function called when clicking the save button, sends new appointment to the server
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
    
    .then(() => {console.log("interview: ", interview)
    transition(SHOW)})
    .catch(error => 
    transition(ERROR_SAVE, true));
  }

  // function called when clicking the delete and confirm button, sends delete request by interview id to the server
  function deleteInterview(id) {

    transition(DELETING)
    props.cancelInterview(id)
    .then(() => transition(EMPTY))
    .catch(error => transition(ERROR_DELETE, true));
  }

    return (
      <Fragment>
        <Header time={props.time}/>
        <article className="appointment">
          {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}/>}
          {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} 
          onDelete={() => transition(CONFIRM)} 
          onEdit={() => {
            console.log("logs props from Show: ", props);
            transition(EDIT);
          }
          }/>} 
          {/* for Show component, sending props.interview  - which contains student name and interviewer object */}
          {mode === CREATE && <Form 
          interviewers={props.interviewers} 
          onCancel={back}
          onSave={save}
          />}
          {mode === SAVING && <Status message={"Saving"}/>}
          {mode === DELETING && <Status message={"Deleting"}/>}
          {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete?"}onCancel={back} onConfirm={() => deleteInterview(props.id)}/>}
          {mode === EDIT && <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />}
          {mode === ERROR_SAVE && <Error message={"Error occurred during saving"} onClose={back}/>}
          {mode === ERROR_DELETE && <Error message={"Error occurred during deleting"} onClose={back}/>}
        </article>
     
      </Fragment>
    );
};

export default Appointment;