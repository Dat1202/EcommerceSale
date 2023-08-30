import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis';
import { Image } from 'react-bootstrap';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import MySpinner from '../layout/MySpinner';
import { SearchRangePrice } from './SearchRangePrice';

export default function ProductStore() {
    const { storeId } = useParams();
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();
    // const nav = useNavigate();

    const [all,] = useState("");

    useEffect(() => {
        const loadProductsFromStore = async () => {
            let e = endpoints['store-products'](storeId)

            let kw = q.get("kw")
            let cateId = q.get("cateId")
            let fromPrice = q.get("fromPrice")
            let toPrice = q.get("toPrice")

            if (kw !== null) {
                e = `${e}?kw=${kw}`
            } else if (fromPrice !== null && toPrice !== null) {
                e = `${e}?toPrice=${toPrice}&fromPrice=${fromPrice}`
            } else if (cateId !== null) {
                e = `${e}?cateId=${cateId}`
            } else if (fromPrice !== null) {
                e = `${e}?fromPrice=${fromPrice}`
            } else if (toPrice !== null) {
                e = `${e}?toPrice=${toPrice}`
            } else if (all === true) {
                e = `${e}`;
            }

            let res = await Apis.get(e);
            setProducts(res.data);
        }

        loadProductsFromStore();

    }, [q, storeId])

    if (products === null) {
        return <MySpinner />
    }

    return (
        <>
            <div className="products">
                <SearchRangePrice />

                <div className="grid__row" id="product">
                    {products.map(p => {

                        let h = `/products/${p[0]}`;

                        return (
                            <div className="grid__column-2-4">
                                <Link to={h} key={p[0]} >
                                    <div className="product-item">
                                        <Image src={p[1]} rounded fluid />
                                        <h3 className="product-item-name">{p[2]}</h3>
                                        <p className="product-item-price">{p[3]}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
