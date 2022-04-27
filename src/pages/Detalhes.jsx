import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import apiArtic from "../services/apiArtic";

const Detalhes = () => {

    const params = useParams()

    const [arte, setArte] = useState({})

    useEffect(() => {

        apiArtic.get(`/artworks/${params.id}?language=pt-BR`).then(resultado => {
            setArte(resultado.data.data)
        })

    }, [params.id])

    console.log(arte)

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={5}>
                        <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + arte.image_id + "/full/843,/0/default.jpg"} border="primary" />
                    </Col>
                    <Col xs={7}>
                        <Card border='danger'>
                            <Card.Body>
                                <Card.Title className="mb-4">{arte.title}</Card.Title>
                                <Card.Text>Data da criação da obra: {arte.date_display}</Card.Text>
                                <Card.Text>Credits: {arte.credit_line}</Card.Text>

                                <Card.Text className="blockquote mb-0"></Card.Text>
                                <Card.Footer className="text-muted">Localização da obra: {arte.place_of_origin}</Card.Footer>
                                <Card.Footer className="text-muted">Artist: {arte.artist_title}</Card.Footer>
                                <Link className="btn btn-danger btn-lg btn-sm mt-3 m-1" to={-1}>Voltar</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detalhes;