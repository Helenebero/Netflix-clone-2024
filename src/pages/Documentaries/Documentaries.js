import React from 'react'
import requests from '../../utils/requests'
import Row from '../../Component/Rows/Row/Row'

const Documentaries = () => {
    return (
        <>
            <Row title="Documntaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    )
}

export default Documentaries
