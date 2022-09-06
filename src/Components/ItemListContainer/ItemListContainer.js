import data from "./mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        setItems(data);
        resolve(data)
    }, 2000);
});

    useEffect(() => {
       getData.then((result) => {
            setItems(result);
            console.log(result);
       })
    }, []);

    return (
        <>
            <ItemList ItemList={items} />
        </>
    );
};

export default ItemListContainer;