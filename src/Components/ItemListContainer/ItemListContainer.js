
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();

useEffect(() => {
    const queryRef = !categoriaId ? collection(db, "items") : query(collection(db, "items"), where("categoria", "==", categoriaId));
    getDocs(queryRef).then(response => {
        const resultados = response.docs.map(doc => {
            const newItem = {
                id: doc.id,
                ...doc.data(),
            }
            return newItem;
        });
        setItems(resultados);
    })
}, [categoriaId]);
    

    return (
        <>
            <ItemList ItemList={items} />
        </>
    );
};

export default ItemListContainer;