import React from 'react'
import ProductStore from './ProductStore';
import CategoryStore from './CategoryStore';
import HeaderStore from './HeaderStore';

export default function Store() {
    return (
        <div>
            <HeaderStore />
            <section className="category__container">
                <div className="grid__auto">
                    <div className="grid__row">
                        <CategoryStore />
                        <div className="grid__column-10">
                            <ProductStore />
                                

                        </div>
                    </div >
                </div >
            </section >
        </div >
    )
}
