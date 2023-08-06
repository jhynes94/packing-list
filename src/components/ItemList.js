// Styleing
import { Container } from 'react-bootstrap'

// Gather Data
import { allItems } from "./Data";


function ItemList({ itemList }) {

    return (
        <Container>
            <ul>
                {itemList.map((itemId) => (
                    <li key={`items-${itemId}`} className="mb-3">
                        {allItems.find(x => x.id === itemId).name}
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default ItemList;
