import React, {useState} from 'react';
import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import warning from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css'


function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {week_day: 0, from:'', to:''}
 ]);
  
  function addNewScheduleItem () {
    setScheduleItems([
      ...scheduleItems,
      {week_day: 0, from:'', to:''}
    ]);
  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description ="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              { value: 'Artes', label: 'artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Física', label: 'Física'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'história', label: 'história'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Quimica', label: 'Quimica'},
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula (em R$)" />
        </fieldset>

        <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
              </button>
            </legend>  

           {scheduleItems.map(scheduleItem => {
             return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  name="week_day" 
                  label="Dia da semana"
                  options={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-feira'},
                    { value: '2', label: 'Terça-feira'},
                    { value: '3', label: 'Quarta-feira'},
                    { value: '4', label: 'Quinta-feira'},
                    { value: '5', label: 'Sexta-feira'},
                    { value: '6', label: 'Sabado-feira'},
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
             );
           })}
        </fieldset>     

        <footer>
          <p>
            <img src={warning} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os seus dados
          </p>
          <button type="button">  
              Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm; 