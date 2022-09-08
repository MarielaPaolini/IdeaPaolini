
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import data from "../ItemListContainer/mock-data";


const producto = data.find(producto => producto.id === 1);

const ItemDetailContainer = () => {
const [dato, setDato] = useState([]);

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(producto);
    }, 2000);
});
    
    getData.then(res => setDato(res));
}, [])

    return (
        <>
            <ItemDetail dato={dato} />
        </>
);
}


    

export default ItemDetailContainer;