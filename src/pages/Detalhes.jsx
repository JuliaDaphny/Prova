import React, { useEffect, useState } from 'react'
import { Card, Col, Container, NavItem, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import apiArtic from "../services/apiArtic";

const Detalhes = () => {

    const params = useParams()

    const [art, setArt] = useState({})

    useEffect(() => {

        apiArtic.get("/artworks" + params.id + "?language=pt-BR").then(resultado => {
            setArt(resultado.data)
        })

    }, [params.id])

    console.log(art)

    return (
        <div>

            <Container>
                <Row>
                    <Col xs={5}>
                        <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + art.image_id + "/full/843,/0/default.jpg"} border="primary" />
                    </Col>
                    <Col xs={7}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detalhes;