import React from 'react';

import wathsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
        <header>    
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Bertoldo_Klinger_perfil_1930s.jpg" alt="Bertoudo Jesus"/>
          <div>
              <strong>Bertoudo Jesus</strong>
              <span>História</span>
          </div>
        </header>

        <p>
          Ele estudou na University College School e no King's College London antes de entrar no Caius College, Cambridge em 1867. 
          <br/><br />
          Migrando para o St John's College, ele ganhou seu B.A. com uma primeira classe no Natural Sciences Tripos e obteve uma bolsa universitária – a primeira em seu assunto – em 1873.  
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 5,00</strong>  
          </p>
          <button type="button">
            <img src={wathsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
    </article>
  );
}

export default TeacherItem;