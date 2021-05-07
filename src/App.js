import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
`
const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 10px;
`
const Input = styled.input`
  width: 400px;
  height: 30px;
  padding: 10px;
  display: block;
  margin-top: 10px;
` 

function App() {

  const [conta, setConta] = useState('');
  const [porcentagem, setPorcentagem] = useState('10');

  return (
   <Container>
     <Title>Calculadora de Gorjetas</Title>
     <label>Quanto deu a conta?</label>
     <Input type="number" value={conta} onChange={(e) => setConta(e.target.value)} ></Input> 
     <br/>
     <br/>
     <label>Qual a porcentagem de gorjeta?</label>
     <Input type="number" value={porcentagem} onChange={(e) => setPorcentagem(e.target.value)} ></Input> 
     <hr/>

     {  conta && 
        <div>
          <p>Sub-total: R${conta}</p>
          <p>Gorjeta(%{porcentagem}): R$ {parseFloat(conta * (porcentagem/100)).toFixed(2)}</p>
          <h3>Total: R$ {parseFloat((conta * (porcentagem/100 + 1))).toFixed(2)}</h3>
        </div>
     }
   </Container>
  );
}

export default App;
