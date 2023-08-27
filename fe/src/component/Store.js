import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import MySpinner from '../layout/MySpinner';

export default function Store() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const loadCatesFromStore = async () => {
            let res = await Apis.get(endpoints['categories']);
            setCategories(res.data);
        }
        loadCatesFromStore();

    }, [])

    if(categories === null){
        return <MySpinner />
    }
    return (
        <div>
            <section className="category__container">
                <div className="grid__auto">
                    <div className="grid__row">
                        <div className="grid__column-2">
                            <nav className="category">
                                <h3 className="category_heading"><FontAwesomeIcon icon={faListUl} />Danh mục</h3>

                                <ul className="category-list">
                                {categories.map(c=> <li key={c.id} class="category-items ">{c.name}</li>)}

                                        {/* <a href="#">hi</a> */}
                                    
                                </ul>
                            </nav>
                        </div>

                        <div className="grid__column-10">
                            <div className="products">
                                <div className="grid__row" id="product">

                                </div>
                            </div>
                            <div className="btn-page">
                                <button id=" product-prev">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button>1</button>
                                <button>2</button>
                                <button>...</button>
                                <button id="product-next">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
