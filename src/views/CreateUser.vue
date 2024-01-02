<template>
  <div>

    <div id="main-container" class="container-fluid">

      <div class="new-user-container">

        <router-link to="/">
          <button class="button-back">
            <img src="../../public/img/backspace.svg" alt="back-icon">
          </button>
        </router-link>

        <h1 class="page-title">Criar um usuário Nerd</h1>

        <Message :msg="msg" v-show="msg" />

        <form id="form">

          <input type="hidden" name="type" value="create">

          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" class="form-control" id="email" name="email" v-model="email"
              placeholder="Digite seu e-mail">
          </div>

          <div class="form-group">
            <label for="name">Nome completo:</label>
            <input type="text" class="form-control" id="name" name="name" v-model="name"
              placeholder="Digite seu nome">
          </div>

          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" class="form-control" id="password" name="password" v-model="password"
              placeholder="Digite sua senha | Min: 6 caracteres | Senha com JWT Auth">
          </div>

          <div class="form-group">
            <label for="password_confirmation">Confirmação de senha:</label>
            <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
              v-model="password_confirmation" placeholder="Confirme sua senha | Min: 6 caracteres | Senha com JWT Auth">
          </div>

          <div class="button" @click="createUser()">
            <input type="button" class="card-btn" value="Registrar">
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Message from './Message.vue'

export default {
  name: "CreateUser",
  components: {
    Message
  },

  data() {
    return {
      email: null,
      name: null,
      password: null,
      password_confirmation: null,
      msg: null,
    }
  },

  methods: {

    async createUser() {

      const data = {
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }

      if (password.value !== password_confirmation.value) {

        this.msg = `Email já cadastrado e/ou as senhas não coincidem`
        setTimeout(() => this.msg = "", 3000);

      } else {

        axios.post('https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/auth/register', data)
          .then(function (response) {
            console.log(response);

          })
          .catch(function (error) {
            console.error(error);
            this.msg = `Não foi possível cadastrar`
            setTimeout(() => this.msg = "", 3000);
          });

        this.msg = "Usuário cadastrado com sucesso!"
        setTimeout(() => this.msg = "", 3000);

        this.email = "";
        this.name = "";
        this.password = "";
        this.password_confirmation = "";
      }
    }
  },
}
</script>    

<style scoped>
.button-back {
  border: none;
  background-color: #02dafa;
  transition: .5x;
  margin-bottom: 2px;
}

.button-back:hover {
  scale: 1.2;
}

#main-container {
  background-image: url(../../public/img/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg);
  background-position: center center;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 40px;
  height: 75vh;
  margin: 0;

}

.new-user-container {
  width: 70vh;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #02dafa;
}

.form-group input,
.form-group textarea {
  font-size: 12px;
  border-radius: 5px;
  border: none;
}

#category {
  font-size: 12px;
}

.form-group label {
  font-size: 14px;
}

.button {
  text-align: center;
  padding: 8px 0px;
}

.card-btn {
  padding: 3px 20px;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #e6e6e6;
  text-align: center;
}

.card-btn:hover {
  background-color: #d32488;
}

.page-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

.form-group {
  display: flex;
  flex-direction: column;
  padding: 3px 0px;
}

@media(max-width: 490px) {
  #main-container {
    width: 100vh;
    height: 161.5vh;
  }
}
</style>
