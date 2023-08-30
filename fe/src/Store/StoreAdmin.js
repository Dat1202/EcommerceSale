import React from 'react'
import HeaderStore from './HeaderStore'
import { Route, Routes } from 'react-router-dom'

const StoreAdmin = () => {
    return (
        <>
            <HeaderStore />
            <Routes>
                <Route path="/storeAdmin" element={<StoreAdmin />} />
            </Routes>
        </>

    )
}
export default StoreAdmin