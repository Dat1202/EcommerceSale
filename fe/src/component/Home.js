import { useContext, useEffect, useState } from "react";
import Apis, { endpoints } from '../configs/Apis';
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import MySpinner from "../layout/MySpinner";
import {Link, useSearchParams } from "react-router-dom";
import { MyCartContext } from "../App";
import cookie from "react-cookies";


const Home = () => {
    const [cartCounter, cartDispatch] = useContext(MyCartContext);
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();

    //số lương sản phẩm mặc định
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                let e = endpoints['products'];
                const res = await Apis.get(e);
                setProducts(res.data);
            } catch (ex) {
                console.error(ex);
            }
        };

        loadProducts();
    }, [q]);

    const order = (p) => {
        cartDispatch({
            "type": "inc",
            "payload": 1
        });

        let cart = cookie.load("cart") || null;
        if (cart === null)
            cart = {};

        if (p.id in cart) {
            // đã có trong giỏ
            cart[p.id]["quantity"] += 1;
        } else {
            // chưa có trong giỏ
            cart[p.id] = {
                "id": p.id,
                "name": p.name,
                "unitPrice": p.price,
                "quantity": 1
            }
        }

        cookie.save("cart", cart);

        console.info(cart);
    }

    if (products === null)
        return <MySpinner />

    const handleLoadMore = () => {
        // Tăng số lượng sản phẩm hiển thị lên 10
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };
    if (products.length === 0)
        return <Alert variant="info" className="mt-5">Không có sản phẩm nào!</Alert>
    return (
        <>
            <>
            <Row>
                {products.map(p => {
                    let url = `/products/${p.id}`;

                    return <Col xs={12} md={3} className="mt-1">
                        <Card style={{ width: '18.5rem' }}>
                            <Card.Img variant="top" className="w-100 h-100" src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>{p.price} 1VNĐ</Card.Text>
                                <Container>
                                <Link to={url} className="btn btn-info text-black" style={{marginRight: "5px"}} variant="primary">Xem chi tiết</Link>
                                <Button variant="success" onClick={() => order(p)}>Đặt hàng</Button>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                })}        
            </Row>

                <div className="flex-center">
                    {visibleProducts < products.length && (
                        <button className="btn-lazy-loading" onClick={handleLoadMore}>Xem thêm</button>
                    )}
                </div>
            </>
        </>
    );
}

export default Home;
