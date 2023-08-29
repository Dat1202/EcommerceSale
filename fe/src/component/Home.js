import { useEffect, useState } from "react";
import Apis, { endpoints } from '../configs/Apis';
import {  Card, Col, Row } from "react-bootstrap";
import MySpinner from "../layout/MySpinner";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                let e = endpoints['products']

                let kw = q.get("kw")
                if(kw!==null) {
                    e = `${e}?kw=${kw}`
                }
                
                let res = await Apis.get(e);

                setProducts(res.data);
            } catch (ex) {
                console.error(ex);
            }
        }

        loadProducts();
    }, [q]);

    if (products === null)
        return <MySpinner />

    return (
        <>
            <h1>My home</h1>
            <Row>
                {products.map(p => {
                    let url = `/store/${p.storeId.id}`;

                    return <Col xs={12} md={3} className="mt-2 mb-2">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={p.image} fluid rounded />
                            <Card.Body>
                            {p.storeId.id}-
                            {p.storeId.name}
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>{p.price} VNĐ</Card.Text>
                                <Link to={url} className="btn btn-info" style={{ marginRight: "5px" }} variant="primary">Xem shop</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                })}        </Row>

        </>


    )
}

export default Home;