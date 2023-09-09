import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Apis, { authApis, endpoints } from "../configs/Apis";
import MySpinner from "../layout/MySpinner";
import { MyUserContext } from "../App";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import Moment from "react-moment";
import cookie, { remove } from "react-cookies";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState(null);
    const [content, setContent] = useState();
    const [user,] = useContext(MyUserContext);


    useEffect(() => {
        const loadProduct = async () => {
            let { data } = await Apis.get(endpoints['details'](productId));
            setProduct(data);
        }

        const loadComments = async () => {
            let { data } = await Apis.get(endpoints['comments-pro'](productId));
            setComments(data);
        }

        loadProduct();
        loadComments();
    }, [productId]);

    const addComment = () => {
        const process = async () => {
            let { data } = await authApis().post(endpoints['add-comment-pro'], {
                "content": content,
                "productId": product.id
            });

            setComments([...comments, data]);
        }

        process();
    }

    if (product === null || comments === null)
        return <MySpinner />;

    let url = `/login?next=/products/${productId}`;
    let compare = cookie.load("compare") || {};

    const compareProduct = (p) => {

        const existingCategoryId = Object.values(compare).find(
            (product) => product.categoryName === p.categoryId.id
        );

        if (!existingCategoryId) {
            remove('compare');
            compare = {
                [p.id]: {
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    price: p.price,
                    image: p.image,
                    categoryName: p.categoryId.id,
                },
            };
        } else {
            if (Object.keys(compare).length < 3) {
                compare[p.id] = {
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    price: p.price,
                    image: p.image,
                    categoryName: p.categoryId.id,
                };
            }
            else {
                alert("You can only add up to three products to the comparison.");
                return;
            }
        }
        cookie.save('compare', compare);
        console.log(compare);
    };

    return <>
        <h1 className="text-center text-info mt-2">CHI TIẾT SẢN PHẨM ({productId})</h1>
        <Row>
            <Col md={5} xs={6}>
                <Image src={product.image} rounded fluid />
            </Col>
            <Col md={5} xs={6}>
                <h2 className="text-danger">{product.name}</h2>
                <p>{product.description}</p>
                <h3>{product.price} VNĐ</h3>

                <Button onClick={() => compareProduct(product)}>So sánh</Button>
                {/* {Object.keys(compare).length < 3 ? <h1>hi</h1> : <h1>thêm tối đa 3 sản phẩm</h1>} */}

            </Col>
        </Row>
        <hr />

        {user === null ? <p>Vui lòng <Link to={url}>đăng nhập</Link> để bình luận! </p> : <>
            <Form.Control as="textarea" aria-label="With textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Nội dung bình luận" />
            <Button onClick={addComment} className="mt-2" variant="info">Bình luận</Button>
        </>}
        <hr />
        <ListGroup>
            {
                comments.map(c => <ListGroup.Item id={c.id}>{c.userId.username} - {c.content} - <Moment locale="vi" fromNow>{c.createdDate}</Moment></ListGroup.Item>)
            }
        </ListGroup>
    </>
}

export default ProductDetails;