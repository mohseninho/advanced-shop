import style from "./ProductItem.module.css"
function ProductItem(props){
    return(
        <div className={style.wrapper}>
            <img src={props.data.img_url} alt="image not found" />
            <h3>{props.data.name}</h3>
            {
                props.data.is_available? <h3>{props.data.price}</h3> : <h3>not available</h3>
            }
            <div className={style.colors}>
            {
                props.data.colors.map((col , idx)=>(
                    <div className={style.color} style={{backgroundColor:col}} key={idx}></div>
                ))
             }
            </div>
        </div>
    );
}

export default ProductItem;