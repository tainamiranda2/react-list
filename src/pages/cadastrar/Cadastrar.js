import { useState,useEffect } from 'react';
import { Titulo} from './styles';

export const Cadastrar=()=>{
  const [produto, setProduto] = useState({
    titulo: '',
    descricao:''
  } );

  const [status, setStatus] = useState();
  
  const valorInput = e =>setProduto ({ ...produto,[e.target.name]: e.target.value})
  
  const cadProduto = async e => {
    e.preventDefault()
    //console.log(produto.titulo)
    await fetch("http://localhost/projects-php/php-api/cadastrar.php", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({produto})
    })
      .then((response) => response.json())
      .then((responseJson)=> (
      console.log(responseJson)
    ))
  }

  return (
    <div className="App">
      <Titulo>Api com php e consumo com react</Titulo>
      <p>Cadastrar</p>
      <form onSubmit={cadProduto}>
        <label>titulo:</label>
        <input type="text"
          placeholder="Titulo"
          name="titulo"
          onChange={valorInput}
        />
        <label>descrição:</label>
        <input type="text"
          placeholder="descricao"
          name="descricao"
          onChange={valorInput}
        />
     <button  type="button">Cadastrar</button>
      </form>
    </div>
  );
}