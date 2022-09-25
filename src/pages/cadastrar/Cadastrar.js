import { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Form,
  ConteudoForm,
  Titulo,
  AlertSucsess,
  AlertErro,
  Container,
  Label,
  Input,
  ButtonSucces,
  TituloC,
  BotaoAcao,
  ButtonInfo
} from './styles';

export const Cadastrar=()=>{
  const [produto, setProduto] = useState(
    { titulo: '', descricao: '' }
  );

  const [status, setStatus] = useState(
    { type: '', mensagem: '' }
  );
  //mensagem

  //pegando o valor
  const valorInput = e =>setProduto ({ ...produto,[e.target.name]: e.target.value})
  
  const cadProduto = async e => {
    
    e.preventDefault()
    //console.log(produto.titulo)
    await fetch("http://localhost/projects-php/php-api/cadastrar.php", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body:JSON.stringify({produto})
    })
      .then((response) => response.json())
      .then((responseJson)=> {
      //onsole.log(responseJson)
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            mensagem: 'Erro ao cadastrar'
          })
          //console.log(setStatus)
        } else {
          setStatus({
            type: 'success',
            mensagem: 'Cadastrado  com sucesso'
          })
          
        }
      }).catch(() => {
      setStatus({
      type: 'erro',
        mensagem:'Produto não cadastrado com sucesso, tente novamento'
      })
      })
  }
//console.log(status.erro)
  return (
    <Container>
      <ConteudoForm>
        <TituloC>
          <Titulo>Cadastrar</Titulo>
          <BotaoAcao>
           
            <Link to='/'>
            <ButtonInfo>
              Listar
              </ButtonInfo>
              </Link>
          </BotaoAcao>

      </TituloC>
      {status.type === 'erro' ? <AlertErro>{status.mensagem}</AlertErro> : ""}
      {status.type==='success'? <AlertSucsess>{status.mensagem}</AlertSucsess> : ""}

      
        <Form onSubmit={cadProduto}>
          
        <Label>titulo:</Label>
        <Input type="text"
          placeholder="Titulo"
          name="titulo"
          onChange={valorInput}
        />
          <Label>descrição:</Label>
        <Input type="text"
          placeholder="descricao"
          name="descricao"
          onChange={valorInput}
        />
     <ButtonSucces  type="submit">Cadastrar</ButtonSucces>
        </Form>
        </ConteudoForm>
    </Container>
  );
}