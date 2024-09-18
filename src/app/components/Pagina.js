'use client'

import{Container, Nav, Navbar} from 'react-bootstrap'

export default function Pagina(props)
{
    console.log(props.titulo)
    props.titulo
    props.children

    return(
        <>
        {/*Barra de navegação*/}
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="../filmes">Movies</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="..//filmes">Filmes</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        {/*Barra de Títulos*/}
        <div className='text-center text-white py-2 bg-secondary'>   
            <h1>{props.titulo}</h1>

        </div>


        {/*Filhos*/}
        <Container className= 'mt-2'>
            {props.children}
        </Container>

        </>

    )
}