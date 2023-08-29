import React from 'react'

export const Navigation = () => {
    return (
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
    )
}
