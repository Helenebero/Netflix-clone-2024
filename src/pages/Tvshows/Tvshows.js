import React from 'react'
import requests from '../../utils/requests'
import Row from '../../Component/Rows/Row/Row'


const Tvshows = () => {
    return (
        <>
            <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
        </>
    )
}

export default Tvshows
