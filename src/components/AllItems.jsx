import { useState, useEffect } from "react"
import axios from 'axios'
import Item from "./Item"


export default function AllItems() {
    const [items, setItems] = useState([])

    useEffect(()=> {

        async function fetchItem() {
            const { data } = await axios.get('https://api.restful-api.dev/objects')

            setItems(data)
        }

        fetchItem()

    }, [])
 
    if(items.length === 0) {
        return <h1>Loading Items. . .</h1>
    }

    return (
        <section className="all-items">
            { items.map(item => <Item key={item.id} item={item} />)}
        </section>
    )
}