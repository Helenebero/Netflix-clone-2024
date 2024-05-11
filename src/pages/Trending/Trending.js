import React from 'react'
import requests from '../../utils/requests'
import Row from '../../Component/Rows/Row/Row'

const Trending = () => {
    return (
        <>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        </>
    )
}

export default Trending;
