import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../button";
import style from './form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<ITarefa[] | any>  
}

function Form({ setTarefas }: Props) {
    const [tarefa, setTarefa] = React.useState("");
    const [tempo, setTempo] = React.useState("00:00")


    function  addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); //para não dar refresh na página
        setTarefas((tarefasAntigas: any) =>
        [
            ...tarefasAntigas,
            {
                tarefa,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]
    );
    setTarefa("");
    setTempo("00:00");
    }
    
    return (
        
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                type="text"
                name="tarefa" 
                id="tarefa" 
                placeholder="O que você vai estudar?"
                value={tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type="time" 
                name="tempo" 
                id="tempo" 
                step="1" 
                value= {tempo}
                onChange={evento => setTempo(evento.target.value)}
                min="00:00:00" 
                max="01:30:00" 
                required />
            </div>
            <Botao type="submit">
                Adicionar  
            </Botao>
        </form>
    )
}

class FormAntigo extends React.Component<{
    setTarefas: React.Dispatch<ITarefa[] | any>  
}> {
    state: ITarefa = {
        tarefa: "",
        tempo: "00:00",
        selecionado: false,
        completado: false,
        id: 'cu'
    }


    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); //para não dar refresh na página
        this.props.setTarefas((tarefasAntigas: any) =>
        [
            ...tarefasAntigas,
            {
                ...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]
    );
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você vai estudar?"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    name="tempo" 
                    id="tempo" 
                    step="1" 
                    value= {this.state.tempo}
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    min="00:00:00" 
                    max="01:30:00" 
                    required />
                </div>
                <Botao type="submit">
                    Adicionar  
                </Botao>
            </form>
        )
    }
}

export default Form;