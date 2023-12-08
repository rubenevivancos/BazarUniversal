import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {

    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    const product = useSelector((state) => state.productReducer.productDetail);

    const error = useSelector((state) => state.productReducer.error);

    if(product !== null){
        return(
            <div >
                <div >
                    <div >
                        <input type="text" placeholder="laptops, smartphones, ..."/>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}