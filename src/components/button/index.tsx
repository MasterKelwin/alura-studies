import React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component <{ 
    children: any
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type = "button" } = this.props; //caso não especificar o tipo, o tipo será button
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;