import React, { useState } from 'react';
import './TelaAtividade.css'; 
import logo from './Componentes/auth/logo.jpeg';
import Vector from './imgs/Vector.png';

const TelaAtividade = () => {
    const [motivo, setMotivo] = useState('');
    const [dataTermino, setDataTermino] = useState('');
    const [nomeAnalista, setNomeAnalista] = useState('');
    const [descricao, setDescricao] = useState('');
    const limparCampos = () => {
        setMotivo('');
        setDataTermino('');
        setNomeAnalista('');
        setDescricao('');
    };

    return (
        <div className="tela-atividade">
            <header>
                <img src={logo} alt="Logo" className="logo" />
                <div className="vector-container">
                    <img src={Vector} alt="Vector" className="Vector" />
                    <h1>ADMIN</h1>
                </div>
            </header>
            <body className='bodyy'>
            <h2>Nova Atividade</h2>
            <div>
                <label>Motivo:</label>
                <input
                    type="text"
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                />
            </div>
            <div>
                <label>Data de Término:</label>
                <input
                    type="date"
                    value={dataTermino}
                    onChange={(e) => setDataTermino(e.target.value)}
                />
            </div>
            <div>
                <label>Nome do Analista:</label>
                <input
                    type="text"
                    value={nomeAnalista}
                    onChange={(e) => setNomeAnalista(e.target.value)}
                />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>
            <div>
                <button onClick={limparCampos}>Limpar</button> 
                <button>Salvar</button>
            </div>
            </body>
        </div>
    );
}

export default TelaAtividade;
