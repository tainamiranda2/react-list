import styled from 'styled-components';

export const Table = styled.table`
width:100%;
th{
    background-color:#005;
    color:#fff;
    padding: 10px;
}
td{
background-color: #f6f6fe;
color:#005;
padding: 8px;
}
`;

export const Titulo = styled.table`
color: #3e3e3e;
font-size:23px;

`;
export const TituloC = styled.section`
justify-Content:space-between;
display:flex;
`;
export const BotaoAcao = styled.section`
margin:10px;
`;
export const Container = styled.h1`
max-width:960px;
margin:20px auto;
box-shadow:0 0 1em #6c757d;

`;
export const ButtonWarning= styled.button`
margin: 0px auto;
background: #fff;
color: #ffc107;
padding: 8px 12px;
border: 1px solid #ffc107;
border-radius: 4px;
cursor:pointer;
font-size:18px;
:hover{
    background:#ffc107;
    color: #fff;
}
`;

export const ButtonSucces= styled.button`
margin: 0px auto;
background: #fff;
color: #198754;
padding: 8px 12px;
border: 1px solid #198754;
border-radius: 4px;
cursor:pointer;
font-size:18px;
:hover{
    background:#198754;
    color: #fff;
}
`;

export const ButtonInfo= styled.button`

background: #fff;
color: #0dcaf0;
padding: 8px 12px;
border: 1px solid #0dcaf0;
border-radius: 4px;
cursor:pointer;
font-size:18px;
:hover{
    background:#31d2f3;
    color: #fff;
}
`;

export const AlertSucsess = styled.p`
background-color:#d1e7dd;
margin:20px 0;
border-radius:4px;
padding:7px;
color:#0f5132;
border:1px solid #badbcc;
`;

export const AlertErro = styled.p`
background-color:#f8d7da;
margin:20px 0;
border-radius:4px;
padding:7px;
color:#0f5132;
border:1px solid #f5c2c7;
`;

export const Form = styled.form`
margin: 0px auto;

`;

export const ConteudoForm = styled.section`
max-width:960px;
padding: 10px 30px 30px;

`;

export const Label = styled.label`
width: 100%;
padding: 12px;
margin-top: 6px;
margin-left:16px;
`;

export const Input = styled.input`
width: 100%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing:border-box;
margin-top: 6px;
margin-left:16px;
resize:vertical;
`;