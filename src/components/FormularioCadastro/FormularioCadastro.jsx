import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro({aoEnviar, validarCPF}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth />

            <FormControlLabel
                checked={promocoes}
                label="Promoções"
                control={
                    <Switch onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    name="promocoes" />
                } />

            <FormControlLabel
                checked={novidades}
                label="Novidades"
                control={
                    <Switch onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades" />
                } />

            <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;