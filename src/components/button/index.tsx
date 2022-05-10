import React from 'react';
import style from './botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void,
    children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
    return (
        <button 
            onClick={onClick} 
            type={type} className={style.botao}>
                {children}
        </button>
    )
} 


class BotaoAntigo extends React.Component <{ 
    children: any
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props; //caso não especificar o tipo, o tipo será button
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
