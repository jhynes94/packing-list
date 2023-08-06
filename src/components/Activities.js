import Form from 'react-bootstrap/Form';
import {allActivities, allItems} from "./Data";

import { useState } from "react";

function SwitchExample({season, setItemList}) {

  const [checkedState, setCheckedState] = useState(
    new Array(allActivities.length).fill(false)
  );

  const switchChange = (position) => {

    //List of true/false coorsponding to seach activity
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    //Find Items in to go in ItemsList from Activities
    let itemList = []
    updatedCheckedState.map((state, i) => {
      if(state){
        allActivities[i].items.map((item) => {
          itemList.push(item)
        })
      }
    })

    //Remove duplicate Items
    itemList = [...new Set(itemList)].sort()

    setCheckedState(updatedCheckedState);
    setItemList(itemList) //This is a list of the items ID's
  };


  return (
    <Form>
      <Form.Label>Which activities will you do?</Form.Label>
      {allActivities.map(({ activity, items }, index) => (
        <div key={`default-${activity}`} className="mb-3">
          <Form.Check // prettier-ignore
            type="switch"
            id={`activity-switch-${index}`}
            label={activity}
            name={activity}
            value={activity}
            checked={checkedState[index]}
            onChange={() => switchChange(index)}
          />
        </div>
      ))}
    </Form>
  );
}

export default SwitchExample;
