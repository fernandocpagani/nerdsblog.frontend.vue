<template>
  <div id="main-container" class="container-fluid">
    <div class="login-container">

      <h1 class="page-title">Logar</h1>
      <Message :msg="msg" v-show="msg" />

      <form>

        <input type="hidden" name="type" value="login">

        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="Digite seu e-mail"
            v-model="email">
        </div>

        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Digite sua senha"
            v-model="password">
        </div>

        <div class="button">
          <input class="card-btn" value="Entrar" v-on:click="login">
        </div>

        <div class="new-user">
          <label>Novo no Nerd's? <a class="new-user-link" href="/createuser">Cadastre-se</a></label>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Message from './Message.vue'
export default {
  name: "Login",
  components: {
    Message
  },
  data() {
    return {
      email: '',
      password: '',
      msg: null,
    }
  },
  methods: {
    async login() {
      axios.post(`https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/auth/login`, { email: this.email, password: this.password })
        .then((result) => {
          localStorage.setItem("user-info", JSON.stringify(result.data))
          this.$router.push({ name: 'home' })
        })

        .catch(error => {
          this.msg = "Usuario e/ou senha incorreto(s)"
          setTimeout(() => this.msg = "", 3000);
        })
    },

    mounted() {
      let user = localStorage.getItem('user-info');
      if (user) {
        this.$router.push({ name: "home" })
      }
    }
  }
}

</script>

<style scoped>
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

.login-container {
  width: 45vh;
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

.new-user-link {
  color: #e6e6e6;
}

.new-user-link:hover {
  color: #d32488;
}

.new-user {
  font-size: 14px;
  margin: 5px;
  text-align: center;
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
