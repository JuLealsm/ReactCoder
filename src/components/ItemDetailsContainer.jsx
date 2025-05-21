import { useEffect, useState } from "react";
import { getItem } from "../mock/asyncMock";
import ItemDetail from "./ItemDetails";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemDetailsContainer = ()=> {
    const [loading, setLoading] = useState(true);
    const {id}=useParams();
    const [detail, setDetail]= useState ({});

    useEffect(() => {
        getItem(id)
        .then (res => {setDetail(res)})
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))

    }, [id]);

    return(
        <div className="item-details-container">
            {loading ? (<LoaderComponent/>) : (<ItemDetail detail={detail} />)}
        </div>
    )
}

export default ItemDetailsContainer