<template>
  <div class="main-container">    
    <div class="about">  
      <label class="title">Criado por:</label>  
      <label class="title2">Fernando Códolo Pagani</label>
      <label>Projeto de autoria própria</label>
      <label> para fins de estudo</label>
      <label class="title2">Linguagens utilizadas:</label>
      <label>Frontend: Vue JS</label>
      <label>Backend: Laravel PHP</label>     
      <div class="icons">
        <a  href="https://www.linkedin.com/in/fernandocpagani/" target="_blank"><img class="linkedin" src="../../public/img/linkedin.svg" alt="icone linkedin"></a>  
        <a  href="https://www.instagram.com/fernandocpagani/" target="_blank"><img class="instagram" src="../../public/img/instagram.svg" alt="icone instagram"></a>  
        <a  href="https://www.facebook.com/fernando.codolopagani/" target="_blank"><img class="facebook" src="../../public/img/facebook.svg" alt="icone facebook"></a>  
        <a  href="https://github.com/fernandocpagani" target="_blank"><img class="facebook" src="../../public/img/github.svg" alt="icone gihub"></a>  
      </div>    
    </div>
  </div>  
</template>

<style scoped>
  .main-container{
    background-image: url(../../public/img/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg);      
    background-position: center center;
    display: grid;      
    align-content: center;
    justify-items: center;
    gap: 40px;
    height: 75vh;
    margin: 0;
  }
  .about{
    margin-top: 10px;
    padding: 20px;
    border-radius: 10%;    
    display: flex;
    flex-direction: column;
    text-align: center;   
    color: black;
    box-sizing: border-box;
    background-color: #02dafa;    
  }

  .title{
    font-size: 25px;
    font-weight: bold;    
    color: black;
    margin-bottom: 20px;
  }
  
  .icons{
    margin: 10px;
  }

  img{
    margin-top: 9px;
    height: 40px;
    width: 40px; 
    margin: 10px;   
  }

  .title2{
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
  }

  .linkedin:hover{   
    background-color: #d32488;   
  }

  .instagram:hover{   
    background-color: #d32488; 
    border-radius: 11px;  
  }

  .facebook:hover{   
    background-color: #d32488; 
    border-radius: 50%;   
  }

  @media(max-width: 490px) {
   .main-container{
    width: 100vh;
    height: 161.5vh;
  }
 }
</style>