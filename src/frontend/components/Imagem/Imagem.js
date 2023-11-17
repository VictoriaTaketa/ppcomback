import React from 'react';

const OpcoesFotos = ({ imagens, onSelect }) => {
  return (
    <div>
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={imagem}
          alt={`Foto ${index}`}
          onClick={() => onSelect(imagem)}
          style={{ cursor: 'pointer', marginRight: '10px' }}
        />
      ))}
    </div>
  );
};

export default OpcoesFotos;