import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

//To Do
// * Add Icons to go with Season
// * Autofill with current Season

function Season() {
  const [season, setSeason] = useState('');
  return (
    <Form>
      <Form.Label>Which Season is it in?</Form.Label>
      {['Winter', 'Spring', 'Summer', 'Fall'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type="radio"
            name="Seasons"
            id={type}
            label={type}
            value={type}
            onChange={e => setSeason(e.target.value)}
          />
        </div>
      ))}
      <p>{season}</p>
    </Form>

  );
}

export default Season;
