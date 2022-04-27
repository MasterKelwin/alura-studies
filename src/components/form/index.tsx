import React from "react";
import Botao from "../button";
import style from './form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você vai estudar?" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao>
                    Adicionar  
                </Botao>
            </form>
        )
    }
}

export default Form;