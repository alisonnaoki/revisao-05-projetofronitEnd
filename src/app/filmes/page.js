'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";

export default function Filmes() {
 
    //Armazena um dado para que o react saiba que ele sofreu uma mudança 
    //e mude na tela
    const [filmes,  setFilmes] = useState([])



    //Efeito Colateral
    useEffect(() => {
        console.log(filmes)
        
        //A requisição para buscar filmes

        //Alterar o estado filmes
        
    }, [])



    return(
        <Pagina titulo="Filmes Populares">

            <ul>
                {
                    filmes.map(filme =>  {
                        return  <li>{filme}</li>

                    }) 
                }

            </ul>

        </Pagina>
    )
}