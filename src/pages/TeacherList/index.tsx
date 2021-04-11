import React from 'react';

import PageHeader from '../../components/PageHeader';

import wathsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
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
            </main>
        </div>
    )
}

export default TeacherList; 