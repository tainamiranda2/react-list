import { useState,useEffect } from 'react';
import { Table , Titulo} from './styles';

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
    <div className="App">
      <Titulo>Api com php e consumo com react</Titulo>
      <p>Listar</p>
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
              <td>Visulizar Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}