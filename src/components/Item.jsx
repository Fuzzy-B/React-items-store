//goal is to focus on how to display an item
import axios from "axios"

export default function Item({ item }) {

    //DELETE not allowed in API, but wanted to demonstrate how it might be applied
    async function deleteItem() {
        try {
            const abc = await axios.delete(`https://api.restful-api.dev/objects/${item.id}`)

        }catch(err){
            console.error(err)
        }
    }


    return (
        <div key={item.id} className='item-card'>
            <h3>{item.name}</h3>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}