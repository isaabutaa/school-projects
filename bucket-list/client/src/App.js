import React, { useState, useEffect } from "react"
import axios from "axios"

import Header from "./components/Header"
import BucketListForm from "./components/BucketListForm"
import BucketItem from "./components/BucketItem"

function App() {
    const [bucketList, setBucketList] = useState([])

    useEffect(() => getBucketList(), [])
    
    function getBucketList() {
        axios.get("/bucket-list")
            .then(res => setBucketList(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Header />
            <BucketListForm btnText="Add Item" />
            {bucketList.map(item => <BucketItem key={item._id} {...item} />)}
        </div>
    )
}

export default App