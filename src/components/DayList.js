import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const { setDay, day } = props;
  const mappedDays = props.days.map((eachDay) => {
    return (
      <ul>
        <DayListItem
          key={eachDay.id}
          name={eachDay.name}
          spots={eachDay.spots}
          selected={eachDay.name === day}
          setDay={setDay}
        />
      </ul>
    );
  });

  return <ul>{mappedDays}</ul>;
}
