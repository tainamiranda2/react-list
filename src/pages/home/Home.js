import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import {
  Table,
  Titulo,
  ButtonSucces,
  TituloC,
  BotaoAcao,
  ButtonInfo,
  Container} from './styles';

export const Home=()=>{
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/projects-php/php-api/")
      //console.log('');
      .then((resp) => resp.json())
      .then((respJson) => (
        setData(respJson.records)
      ));
  }

  useEffect(() => {
    getProdutos ();

  },[])

  return (
    <Container>
      <TituloC>
        <Titulo>Listar</Titulo>
        <BotaoAcao>
          <Link to="cadastrar">
          <ButtonSucces>Cadastrar</ButtonSucces></Link>
        </BotaoAcao>
      </TituloC>
    
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
               <ButtonInfo> Visulizar</ButtonInfo>
                Editar
                Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}