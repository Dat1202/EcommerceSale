import { useContext, useState } from "react";
import { Alert, Button, Container, Form, Table } from "react-bootstrap";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import { MyCartContext, MyUserContext } from "../App";
import { authApis, endpoints } from "../configs/Apis";
import Pay from "./Pay";


const Cart = () => {
    const [user,] = useContext(MyUserContext);
    const [, cartDispatch] = useContext(MyCartContext);
    const [cart, setCart] = useState(cookie.load("cart") || null);
    const [data, setData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [isHidden, setIsHidden] = useState(0);




    const deleteItem = (item) => {
        if (item.id in cart) {
            cartDispatch({
                "type": "dec",
                "payload": item.quantity
            });

            setCart(current => {
                delete current[item.id];
                return current;
            });
            cookie.save("cart", cart);
        }
    }

    const updateItem = () => {
        cookie.save("cart", cart);

        cartDispatch({
            "type": "update",
            "payload": Object.values(cart).reduce((init, current) => init + current["quantity"], 0)
        });
    }

    const pay = () => {
        const process = async () => {
            let res = await authApis().post(endpoints['pay'], cart);
            if (res.status === 200) {
                cookie.remove("cart");
                setCart([]);

                cartDispatch({
                    "type": "update",
                    "payload": 0
                });
            }
        }
        process();
    }

    const showPay = () => {
        setIsHidden(1);
    };

    const AddProducts = (c) => {
        const p = {
            id: c.id,
            image: c.image,
            name: c.name,
            unitPrice: parseInt(c.unitPrice) * parseInt(c.quantity),
            quantity: c.quantity
        };

        setIsChecked(!isChecked);

        if (isChecked) {
            setData((prevData) => prevData.filter((item) => item.id !== p.id));
            console.log(`Removed product with ID ${c.id}`);
        } else {
            setData((prevData) => prevData.concat(p));
            console.log(p);
        }
    };

    if (cart === null)
        return <Alert variant="info">Không có sản phẩm trong giỏ!</Alert>

    if (cart.length === 0)
        return <Alert variant="info">Thanh toán thành công!</Alert>

    return (
        <div style={{ backgroundColor: "#f0f0f2", marginTop: "-0.5rem" }}>
            <Container>
                <h1 className="text-center text-info mt-2">GIỎ HÀNG</h1>
                <Table striped hover className="table_border">
                    <thead >
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Tên sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Số tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(cart).map(c => {
                            return <tr key={c.id} >
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={c.isChecked}
                                        onChange={() => AddProducts(c)}
                                        className="custom-checkbox"
                                    />
                                </td>
                                <td><img src={c.image} width="150" height="150" alt="ImageProduct" /></td>
                                <td><h5 className="mt-5">{c.name}</h5></td>
                                <td><p className="mt-5">{c.unitPrice.toFixed(2)} VNĐ</p></td>
                                <td>
                                    <div className="mt-5">
                                        <Form.Control type="number" value={cart[c.id]["quantity"]} onBlur={updateItem}
                                            onChange={e => setCart({ ...cart, [c.id]: { ...cart[c.id], "quantity": parseInt(e.target.value) } })} />
                                    </div>
                                </td>
                                <td>
                                    <p className="mt-5">{(parseInt(c.unitPrice) * parseInt(cart[c.id]["quantity"])).toFixed(2)}VND</p>
                                </td>
                                <td>
                                    <Button className="mt-5 rounded-circle" variant="danger" onClick={() => deleteItem(c)}>&times;</Button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </Table>

                <div className="custom-border" style={{ paddingTop: "30px", backgroundColor: "red" }}>
                    <div className="d-flex justify-content-around">
                        <div><h5>Đã chọn ({data.length})</h5></div>
                        <div><h2>Tổng thanh toán: {data.reduce((total, item) => total + item.unitPrice, 0).toFixed(2)}</h2></div>
                        <div>
                            {user === null ? <p>Vui lòng <Link to="/login?next=/cart">đăng nhập</Link> để thanh toán!</p> : <Button className="mb-2" onClick={showPay}>Thanh toán</Button>}
                        </div>
                    </div>
                </div>

                {isHidden ===0 ? (
                    <div style={{ display: 'none' }}>
                        <Pay data={data}/>
                    </div>
                ) : (
                    <div style={{ display: 'block' }}>
                        <Pay data={data} sum ={data.reduce((total, item) => total + item.unitPrice, 0)}/>
                    </div>
                )}
            </Container>

        </div>
    );
}

export default Cart;
