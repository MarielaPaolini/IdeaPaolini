import data from "./mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();

useEffect(() => {
    const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        },2000);
    });
    if (categoriaId){
        getData.then(result => setItems(result.filter(data => data.categoria === categoriaId)));
    }
    else {
        getData.then(result => setItems(result))
    }
}, [categoriaId]);

    return (
        <>
            <ItemList ItemList={items} />
        </>
    );
};

export default ItemListContainer;