import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import OpcoesFotos from "../../components/Imagem/Imagem.js"
// import BotaoSelecao from "../../components/BotaoSelecao/BotaoSelecao.js";

// const AppSelect = () => {
//   const [fotoSelecionada, setFotoSelecionada] = useState(null);

//   const imagens = [
//     './imagens/cachoeira.jpg',
//     './imagens/penguim.png',
//     // Adicione mais imagens conforme necessário
//   ];

//   const handleSelecaoFoto = (foto) => {
//     setFotoSelecionada(foto);
//   };

//   return (
//     <div>
//       <OpcoesFotos imagens={imagens} onSelect={handleSelecaoFoto} />
//       <BotaoSelecao onSelectClick={() => console.log(fotoSelecionada)} />
//     </div>
//   );
// };

// export default AppSelect;

const AppSelect = () => {
    const ImgUpload =({
        onChange,
        src
      })=>
        <label htmlFor="photo-upload" className="custom-file-upload fas">
          <div className="img-wrap img-upload" >
            <img for="photo-upload" src={src}/>
          </div>
          <input id="photo-upload" type="file" onChange={onChange}/> 
        </label>
      
      
      const Name =({
        onChange,
        value
      })=>
        <div className="field">
          <label htmlFor="name">
            name:
          </label>
          <input 
            id="name" 
            type="text" 
            onChange={onChange} 
            maxlength="25" 
            value={value} 
            placeholder="Alexa" 
            required/>
        </div>
      
        
      const Status =({
        onChange,
        value
      })=>
        <div className="field">
          <label htmlFor="status">
            status:
          </label>
          <input 
            id="status" 
            type="text" 
            onChange={onChange} 
            maxLength="35" 
            value={value} 
            placeholder="It's a nice day!" 
            required/>
        </div>
      
      
      const Profile =({
        onSubmit,
        src,
        name,
        status,
      })=>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
            <label className="custom-file-upload fas">
              <div className="img-wrap" >
                <img for="photo-upload" src={src}/>
              </div>
            </label>
            <div className="name">{name}</div>
            <div className="status">{status}</div>
            <button type="submit" className="edit">Edit Profile </button>
          </form>
        </div>
           
            
      const Edit =({
        onSubmit,
        children,
      })=>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
              {children}
            <button type="submit" className="save">Save </button>
          </form>
        </div>
      
      class CardProfile extends React.Component {
        state = {
          file: '',
          imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
          name:'',
          status:'',
          active: 'edit'
        }
      
        photoUpload = e =>{
          e.preventDefault();
          const reader = new FileReader();
          const file = e.target.files[0];
          reader.onloadend = () => {
            this.setState({
              file: file,
              imagePreviewUrl: reader.result
            });
          }
          reader.readAsDataURL(file);
        }
        editName = e =>{
          const name = e.target.value;
          this.setState({
            name,
          });
        }
        
        editStatus = e => {
          const status = e.target.value;
          this.setState({
            status,
          });
        }
        
        handleSubmit= e =>{
          e.preventDefault();
          let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
          this.setState({
            active: activeP,
          })
        }
        
        render() {
          const {imagePreviewUrl, 
                 name, 
                 status, 
                 active} = this.state;
          return (
            <div>
              {(active === 'edit')?(
                <Edit onSubmit={this.handleSubmit}>
                  <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
                  <Name onChange={this.editName} value={name}/>
                  <Status onChange={this.editStatus} value={status}/>
                </Edit>
              ):(
                <Profile 
                  onSubmit={this.handleSubmit} 
                  src={imagePreviewUrl} 
                  name={name} 
                  status={status}/>)}
              
            </div>
          )
        }
      }
      
      ReactDOM.render(
        <CardProfile/>,
        document.getElementById('root')
      )
}

export default AppSelect;

