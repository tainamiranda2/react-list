import React from 'react';
import { BotaoAcao, ButtonInfo, ButtonSucces, Container, ConteudoForm, Form, Input, Label, Titulo, TituloC } from './styles';
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';

export const Editar = () => {
    //pesquisar no banco com uma requisição
    //de forma individual
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');


   //const [id] = useParams();
//console.log("oi",id)
    
    
//console.log(titulo)
   const editar = async e => {
     //  console.log("oi")
        e.preventDefault()
    //console.log(produto.titulo)
    await fetch("http://localhost/projects-php/php-api/editar.php", {
      method: "PUT",
      //headers: { "Content-Type":"application/json" },
      body:JSON.stringify({ titulo, descricao})
    })
  }
  useEffect(() => {
    const getProdutos = async () => {
        await fetch("http://localhost/projects-php/php-api/visualizar.php?id="+1)
            //console.log('');
            .then((resp) => resp.json())
            .then((respJson) =>{
                //console.log(respJson)
               setTitulo(respJson.records)
               setDescricao(respJson.produto.descricao)

    });
      }
    getProdutos ();

  },[])
  
    return (
        <Container>
            <ConteudoForm>
                <TituloC>
                <Titulo>Editar</Titulo> 
                </TituloC>

                <BotaoAcao>
                    <Link to="/">
                        <ButtonInfo>Listar</ButtonInfo>
                    </Link>

                </BotaoAcao>

            </ConteudoForm>
            <Form onSubmit={editar}>
          
        <Label>titulo:</Label>
                <Input
                    type="text"
          placeholder="Titulo"
                    name="titulo"
                    value={titulo}
          onChange={e=>setTitulo(e.target.value)}
        />
          <Label>descrição:</Label>
                <Input
                    type="text"
          placeholder="descricao"
                    name="descricao"
                    value={descricao}
          onChange={e=>setDescricao(e.target.value)}
        />
     <ButtonSucces type="submit">Editar</ButtonSucces>
        </Form>
        </Container>
    )
}