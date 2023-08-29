import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis';
import { Image } from 'react-bootstrap';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import MySpinner from '../layout/MySpinner';

export default function ProductStore() {
    const { storeId } = useParams();
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();

    useEffect(() => {
        const loadProductsFromStore = async () => {
            let e = endpoints['store-products'](storeId)

            let kw = q.get("kw")
            let cateId = q.get("cateId")

            if (kw !== null) {
                e = `${e}?kw=${kw}`
            }
            else if (cateId !== null) {
                e = `${e}?cateId=${cateId}`
            }


            let res = await Apis.get(e);
            setProducts(res.data);
        }
        loadProductsFromStore();

    }, [q])

    if (products === null) {
        return <MySpinner />
    }

    return (
        <>
            <div className="products">
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
