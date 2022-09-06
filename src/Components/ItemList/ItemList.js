import Item from "../Item/Item";

const ItemList = ({ItemList}) => {
  return (
    <>
        {ItemList.map((producto) => {
            return (
            <Item 
                key={producto.id}
                vino={producto.vino} 
                bodega={producto.bodega}
                varietal={producto.varietal}
                precio={producto.precio}
                imagen={producto.imagen}
            />
            );
        })}
    </>
  );
};

export default ItemList;