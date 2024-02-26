import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function AddItemForm() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')

    const navigate = useNavigate()

    function clearForm() {
        setName('')
        setPrice('')
        setColor('')
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const payload = {
            name,
            data: {
                price,
                color
            }
        }

        try {
            const { data } = await axios.post('https://api.restful-api.dev/objects', payload)

            navigate('/items')

        } catch(err){
            console.error(err)
        }

    }

    return (
        <form>
            <label>
                Item Name: 
                <input value={name} onChange={(e)=> setName(e.target.value)}/>
            </label>
            <label>
                Price: 
                <input type='number' min='0' value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </label>
            <label>
                Color: 
                <input value={color} onChange={(e)=> setColor(e.target.value)}/>
            </label>

            <button type='button' onClick={clearForm}>Clear Form</button>
            <button type='submit'>Add Item</button>
        </form>
    )
}