import React from 'react'
import { Card } from 'react-bootstrap';
import cookie from "react-cookies";
import MySpinner from '../layout/MySpinner';
import { Link } from 'react-router-dom';

export const CompareProduct = () => {
    const compares = cookie.load("compare") || {};
    if (compares === null) {
        return <MySpinner />
    }

    return (
        <>
            <div className="grid__auto mt-4 mb-4">
                <div className="compare__products">
                    {Object.values(compares).map(compare => {
                        let h = `/products/${compare.id}`
                        return (
                            <>
                                <div className="compare__product">
                                    <Card className="card-hover">
                                        <Link to={h} >
                                            <Card.Img variant="top" src={compare.image} fluid rounded />
                                            <Card.Body>
                                                <h1 className="product-item-name">{compare.name}</h1>
                                                <p className="product-item-price">{compare.price} VNĐ</p>
                                                <p >{compare.description}</p>

                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </div>
                            </>)
                    })}
                </div>
            </div>
        </>
    )
}
