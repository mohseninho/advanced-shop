import { useEffect, useState } from "react";
import { data } from "../../data/productsData"
function Products(){
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        setProducts(data);
    },[])

    return(
        <div></div>
    );
}

export default Products;