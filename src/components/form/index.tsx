import React from "react";
import Botao from "../button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você vai estudar?" required />
                </div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="01:30:00" required />
                <div>

                </div>
                <Botao />
            </form>
        )
    }
}

export default Form;