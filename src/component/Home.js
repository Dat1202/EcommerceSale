import { useContext, useEffect, useState } from "react";
import Apis, { endpoints } from '../configs/Apis';
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import MySpinner from "../layout/MySpinner";
import { Link, useSearchParams } from "react-router-dom";
import { MyCartContext, MyUserContext } from "../App";
import cookie from "react-cookies";
import slideImage from '../images/slide1.png';
import slideImage2 from '../images/slide2.png';
import slideImage3 from '../images/slide3.png';
import slideImage4 from '../images/slide4.png';
import Category from "./Home/Category";
import { SearchRangePrice } from "./Home/SearchRangePrice";


const Home = () => {
    const [, cartDispatch] = useContext(MyCartContext);
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();
    const [slidIndex, setSlidIndex] = useState(1);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [user] = useContext(MyUserContext);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                let e = endpoints['products'];
                let cateId = q.get("cateId")
                let fromPrice = q.get("fromPrice")
                let toPrice = q.get("toPrice")
                let sort = q.get("sort");
                let kw = q.get("kw");
                if (kw !== null) {
                    e = `${e}?kw=${kw}`;
                } else if (cateId !== null) {
                    e = `${e}?cateId=${cateId}`
                } else if (fromPrice !== null && toPrice !== null) {
                    e = `${e}?toPrice=${toPrice}&fromPrice=${fromPrice}`
                } else if (sort === "desc") {
                    // e = endpoints['store-product-desc'](storeId);
                } else if (sort === "asc") {
                    // e = endpoints['store-product-asc'](storeId);
                }

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
                "image": p.image,
                "name": p.name,
                "unitPrice": p.price,
                "quantity": 1


            }
        }

        cookie.save("cart", cart);

        console.info(cart);
    }

    const slides = [
        { image: slideImage, caption: 'Slide 1' },
        { image: slideImage2, caption: 'Slide 2' },
        { image: slideImage3, caption: 'Slide 3' },
        { image: slideImage4, caption: 'Slide 4' },

    ];
    

    const handleNextSlide = () => {
        setSlidIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const handlePreviousSlide = () => {
        setSlidIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    if (products === null)
        return <MySpinner />

    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
    };
    if (products.length === 0)
        return <Alert variant="info" className="mt-5">Không có sản phẩm nào!</Alert>

    return (
        <>
            <div style={{ backgroundColor: "#f0f0f2" }}>
                <div>
                    <div style={{ position: "relative" }}>
                        <div >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    style={{ display: index === slidIndex ? 'block' : 'none' }}
                                >
                                    <img style={{ width: "95rem", height: "300px" }} src={slide.image} alt={slide.caption} />
                                </div>
                            ))}
                        </div>
                        <Button id="location_button_left" onClick={handlePreviousSlide}>&#10094;</Button>
                        <Button id="location_button_right" onClick={handleNextSlide}>&#10095;</Button>
                    </div>
                </div>
                <div className="container d-flex mt-1">
                    <div style={{ width: "30%", marginRight: "5px" }}>
                        <Category />
                    </div>
                    <div>
                        <div className="custom-border pt-2" style={{ backgroundColor: "rgb(240, 219, 219)" }}>
                            <div className="d-flex">
                                <div className="mt-3 ms-5">
                                    <h3>Sắp xếp theo </h3>
                                </div>
                                <div className="mt-1 ms-5">
                                    <SearchRangePrice/>
                                </div>
                            </div>
                        </div>
                        <Row>
                            {products.slice(0, visibleProducts).map(p => {
                                let url = `/products/${p.id}`;
                                let urlLogin = `/login?next=/`;

                                return <Col xs={12} md={3} className="mt-1">
                                    <Card style={{ width: '16rem' }}>
                                        <Link to={url} variant="primary">

                                            <Card.Img variant="top" className="w-100 h-100 link_hover" src={p.image} />
                                            <Card.Body>
                                                <Card.Title>
                                                    <div className="d-flex justify-content-center">{p.name}</div>
                                                </Card.Title>
                                                <Card.Text>
                                                    <div className="d-flex justify-content-center text-danger">{p.price.toFixed(2)} VNĐ</div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                        <Container>
                                            {user === null ? <Link to={urlLogin}><Button style={{ width: "rem", marginLeft:"2rem"}} variant="success">Thêm vào giỏ</Button></Link>
                                                : <Button style={{ width: "10rem", marginLeft:"2rem" }} variant="success" onClick={() => order(p)}>Thêm vào giỏ</Button>}
                                        </Container>
                                    </Card>
                                </Col>
                            })}
                        </Row>
                    </div>
                </div>

                <div className="flex-center">
                    {visibleProducts < products.length && (
                        <button className="btn-lazy-loading" onClick={handleLoadMore}>Xem thêm</button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;