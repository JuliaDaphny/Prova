import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import apiArtic from "../services/apiArtic";

const Home = () => {

    const [art, setArt] = useState([])

    useEffect(() => {

        apiArtic.get('/artworks?language=pt-BR').then(resultado => {
            setArt(resultado.data.data)
        })

    }, [])

    console.log(art)

    return (

        <Container>
            <div>Home</div>

            <Table striped bordered hover size="sm" variant="dark">

                <thead>
                    <tr>
                        <th>Detalhar</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                {art.map(item => (
                    <tbody>
                        <tr>
                            <td>
                                <Link className="btn btn-light" to={"/detalhes/" + item.id}>
                                    Ver detalhes                  
                                </Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.artist_title}</td>
                            <td>{item.classification_title}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    )
}

export default Home;