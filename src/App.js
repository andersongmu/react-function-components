import React, { Component } from 'react';
import './App.css';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return {valido:false, texto:"O CPF deve ter 11 digitos."}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
