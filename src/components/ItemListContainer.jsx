import { useEffect, useState } from "react"
import { fetchData } from "../mock/asyncMock"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ message, onViewDetails }){
    const [products, setProducts]= useState ([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams()

    useEffect(() => {
    setLoading(true); 

    fetchData()
        .then((res) => {
        if (categoryId) {
            setProducts(res.filter((prod) => prod.category === categoryId));
        } else {
            setProducts(res);
        }
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, [categoryId]);


        return(
            <div>
                <h1 className="pageTitle">{message}</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}

                <ItemList products={products} onViewDetails={onViewDetails} />
            </div>
        )
}
export default ItemListContainer