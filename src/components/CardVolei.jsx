import React from 'react';
import './CardVolei.css';

const CardVolei = ({nome, img, descricao, cor}) => {
    return (
        <div className="card" style={{background:cor}}>
            <img
                src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/Lucarelli-avalia-volei-brasileiro-em-Paris-2024.jpg?w=873"
                alt="Vôlei"
                className="card-img"
            />
            <div className="card-content">
                <h2>Vôlei</h2>
                <p>
                    O vôlei é um esporte dinâmico que exige agilidade, comunicação e
                    espírito de equipe. Seja na quadra ou na praia, ele proporciona
                    diversão e competitividade.
                </p>
            </div>
        </div>
    );
};
export default CardVolei;