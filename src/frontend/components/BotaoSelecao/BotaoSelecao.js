import React from 'react';

const BotaoSelecao = ({ onSelectClick }) => {
  return (
    <button onClick={onSelectClick}>
      Escolher Foto de Perfil
    </button>
  );
};

export default BotaoSelecao;