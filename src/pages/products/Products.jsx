import style from "./Products.module.css"
import { useEffect, useState } from "react";
import { data } from "../../data/productsData"
import ProductItem from "../../components/productItem/ProductItem";
function Products(){
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        setProducts(data);
    },[])

    return(
        <div className={style.ProductContainer}>
            {
                products.map((prod , idx) => (
                    <ProductItem data={prod} key={idx} />
                ))
            }
        </div>
    );
}

export default Products;