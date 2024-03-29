import React from 'react'
import ProductStore from './ProductStore';
import CategoryStore from './CategoryStore';
import HeaderStore from './HeaderStore';
import { SearchRangePrice } from './SearchRangePrice';
import { SortProduct } from './SortProduct';
import { Review } from './Review';
import { Tab, Tabs } from 'react-bootstrap';
import { Profile } from './Profile';

export default function Store() {

    return (
        <div>
            <HeaderStore />
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-2 mt-2  grid__auto"
            >
                <Tab eventKey="home" title="Trang chủ" style={{ padding: '10px' }}>
                    <section className="category__container">
                        <div className="grid__auto">
                            <div className="grid__row">
                                <CategoryStore />
                                <div className="grid__column-10">
                                    <div className="products">
                                        <div className="filter">
                                            <div style={{ padding: '6px 5px', fontSize: '1.6rem' }}>Sắp xếp theo</div>
                                            <SearchRangePrice />
                                            <SortProduct />
                                        </div>
                                        <ProductStore />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </Tab>
                <Tab eventKey="Review" title="Hồ sơ">
                    <div className="grid__auto">
                        <div className=" mb-4" style={{ display: 'flex' }}>
                            <div className="store-profile">
                                <Profile />
                            </div>
                            <div className="store-review" >
                                <Review />
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div >
    )
}
