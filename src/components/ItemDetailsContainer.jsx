import { useEffect, useState } from "react";
import { getItem } from "../mock/asyncMock";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = ()=> {
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    const [detail, setDetail]= useState ({});

    useEffect(() => {
        getItem(id)
        .then (res => {setDetail(res); setLoading(false);})
        .catch((error)=>console.log(error))

    }, [id]);

    return(
        <div className="item-details-container">
            {loading ? (<p>Loading...</p>) : (<ItemDetail detail={detail} />)}
        </div>
    )
}

export default ItemDetailsContainer