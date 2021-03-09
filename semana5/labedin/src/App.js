import React, { useLayoutEffect } from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/75901276?s=460" 
          nome="Luana Farias" 
          descricao="Oi, eu sou Luana, tenho 26 anos e estudo Desenvolvimento Web na Labenu. Atualmente estou aprendendo Front End que consiste em HTML, CSS E JavaScript. Agora iniciei o aprendizado com React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
        icone={'https://cdn.icon-icons.com/icons2/629/PNG/512/email-outlined-envelope-back-symbol_icon-icons.com_57846.png'}
        link={'https://www.outlook.com'}
        nome={'Entre em contato pelo-mail'}
        />

      <CardPequeno
        icone={'https://image.flaticon.com/icons/png/512/174/174857.png'}
        link={'https://www.linkedin.com'}
        nome={'Entre em contato pelo Linked-In'}
        />

      <CardPequeno
        icone={'http://pngimg.com/uploads/github/github_PNG45.png'}
        link={'https://www.linkedin.com'}
        nome={'Encontre-me no GitHub!'}
        />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante Web Full Stack na Labenu." 
        />
        
        <CardGrande 
          imagem="https://image.freepik.com/icones-gratis/camera-do-vintage-quadrado_318-10040.jpg" 
          nome="Fotógrafa" 
          descricao="Sou fotógrafa autônoma há 10 anos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
