
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
const [dato, setDato] = useState([]);
const { detalleId } = useParams();


useEffect(() => {
    const getData = async() => {
        const queryRef = doc(db, "items", detalleId);
        const response = await getDoc(queryRef);
        const newItem = {
            id: response.id,
            ...response.data(),
        }
        setDato(newItem);
        }
        getData();
    }, [detalleId])

    return (
        <>
            <ItemDetail dato={dato} />
        </>
);
}


    

export default ItemDetailContainer;