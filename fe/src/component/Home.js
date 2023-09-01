import { useEffect, useState } from "react";
import Apis, { endpoints } from '../configs/Apis';
import { Card, Col, Row } from "react-bootstrap";
import MySpinner from "../layout/MySpinner";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
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



    if (products === null)
        return <MySpinner />

    const handleLoadMore = () => {
        // Tăng số lượng sản phẩm hiển thị lên 10
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };




    return (
        <>
            <>
                <Row>
                    {products.slice(0, visibleProducts).map(product => {
                        let url = `/store/${product.storeId.id}`;
                        return (
                            <Col xs={12} md={3} className="mt-2 mb-2" key={product.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={product.image} fluid rounded />
                                    <Card.Body>
                                        {product.storeId.id}-{product.storeId.name}
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.price} VNĐ</Card.Text>
                                        <Link to={url} className="btn btn-info" style={{ marginRight: "5px" }} variant="primary">Xem shop</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
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
