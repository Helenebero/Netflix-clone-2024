import React from 'react'
import requests from '../../utils/requests'
import Row from '../../Component/Rows/Row/Row'

const Toprated = () => {
    return (
        <>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        </>
    )
}

export default Toprated
