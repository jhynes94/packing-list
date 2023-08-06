// Styleing
import { Container } from 'react-bootstrap'

// Components
import Season from './Season'
import Activities from './Activities'

// React Items
import { useState } from 'react';


function InputForm() {
    const [season, setSeason] = useState('');

    return (
        <div>
            <Container className="p-3">
                <Container className="p-5 mb-4 bg-light rounded-3">
                    <h1>Activity Details</h1>
                    <hr/>
                    <Season setSeason={setSeason}/>
                    <p>{season}</p>
                    <Activities />
                </Container>
            </Container>
            <p class="text-center"><i>Necessity is the mother of invention. I'm tired of forgetting items.</i></p>
        </div>
    )
}

export default InputForm
