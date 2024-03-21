import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './TelaInicial.css';
import logo from './Componentes/auth/logo.jpeg';
import Vector from './imgs/Vector.png';
import admin from './imgs/admin.png';
import solar from './imgs/solar.png';
import arquivo from './imgs/arquivo.png';
import pesquisar from './imgs/pesquisar.png';
import { Link } from 'react-router-dom';


function TelaInicial() {
    return (
      <div>
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <img src={Vector} alt="Vector" />
          <h1>ADMIN</h1>
        </header>
        <body className='bodyy'>
          <h2>Seja Bem Vindo!</h2>
          <div className='campos'>
              <div className='div1'>
                <img src={admin} alt="admin" />
                <p>Gerenciar Analista</p>
              </div>
              <div className='div1'>
                <img src={arquivo} alt="arquivo" />
                <p>Gerenciar Atividade</p>
              </div>
              <div className='div1'>
                <img src={pesquisar} alt="pesquisar" />
                <p>Consultar Métricas</p>
              </div>
              <div className='div1'>
                <img src={solar} alt="solar" />
                <p>Upload GitHub</p>
              </div>
          </div>
        </body>
      </div>
    );
  }
  
  export default TelaInicial;
  