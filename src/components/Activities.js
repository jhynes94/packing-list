import Form from 'react-bootstrap/Form';

import { useState } from "react";

function SwitchExample() {

  const allActivities = [
    {
      activity: "Camping",
      items: ["Sun Glasses"],
      season: [
        {
          Winter: ["Heavy Sleeping Bag"],
          Spring: ["Heavy Sleeping Bag"],
          Summer: ["Light Sleeping Bag"],
          Fall: ["Heavy Sleeping Bag"]
        }
      ],
      bonusActivities: [
        {
          cooking: ["Pots", "Pans"]
        }
      ]
    },
    {
      activity: "Hiking",
      items: []
    },
    {
      activity: "Hunting",
      items: []
    },
    {
      activity: "Fishing",
      items: ["Rod", "Tackle"]
    }
  ]

  const [checkedState, setCheckedState] = useState(
    new Array(allActivities.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState)
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
            onChange={() => handleOnChange(index)}
          />
        </div>
      ))}
    </Form>
  );
}

export default SwitchExample;
