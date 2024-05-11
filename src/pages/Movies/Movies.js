import React from 'react'
import requests from '../../utils/requests'
import Row from '../../Component/Rows/Row/Row'


const Movies = () => {
    return (
        <>
            <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        </>
    )
}

export default Movies
