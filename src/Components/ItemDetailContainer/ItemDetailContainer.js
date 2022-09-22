
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import data from "../ItemListContainer/mock-data";
import { useParams } from "react-router-dom";


const producto = data;

const ItemDetailContainer = () => {
const [dato, setDato] = useState([]);
const { detalleId } = useParams();

useEffect(() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(producto);
    }, 2000);
    
});
    
    getData.then(res => setDato(res.find(producto => producto.id === parseInt(detalleId))));
}, [detalleId])

    return (
        <>
            <ItemDetail dato={dato} />
        </>
);
}


    

export default ItemDetailContainer;