import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis';
import { Image } from 'react-bootstrap';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import MySpinner from '../layout/MySpinner';
import { SearchRangePrice } from './SearchRangePrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ProductStore() {
    const { storeId } = useParams();
    const [products, setProducts] = useState(null);
    const [q] = useSearchParams();
    // const nav = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = recordsPerPage * currentPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [numbers, setNumbers] = useState([]);
    const [records, setRecords] = useState([]);

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
            const slicedRecords = res.data.slice(firstIndex, lastIndex);
            const nPage = Math.ceil(res.data.length / recordsPerPage);
            const updatedNumbers = Array.from({ length: nPage }, (_, index) => index + 1);
            setProducts(slicedRecords);
            setRecords(slicedRecords);
            setNumbers(updatedNumbers);
        }

        loadProductsFromStore();

    }, [q, storeId, lastIndex, firstIndex])

    if (products === null) {
        return <MySpinner />
    }

    const changePage = (id, e) => {
        e.preventDefault();
        setCurrentPage(id);
    }

    function nextPage(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1)
    }

    function prePage(e) {
        e.preventDefault();
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <div className="products">
                <SearchRangePrice />

                <div className="grid__row" id="product">
                    {records.map(p => {

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
                <div className="pagination">
                    <button className="page-item">
                        <a onClick={prePage} className="page-link" href="#">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </a>
                    </button>
                    {numbers.map((n, i) => (
                        <button key={i} className={`page-item ${currentPage === n ? 'active' : ''}`}>
                            <a onClick={(e) => changePage(n, e)} className="page-link" href="#">{n}
                            </a>
                        </button>
                    ))}
                    <button className="page-item">
                        <a onClick={nextPage} className="page-link" href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                    </button>
                </div>
            </div>
        </>
    )
}
