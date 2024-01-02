<template>
  <div id="main-container" class="container-fluid" v-if="isLogged">
    <div class="new-post-container">
      <h1 class="page-title">Adicionar um post Nerd</h1>
      <Message :msg="msg" v-show="msg" />

      <form id="add-post-form">

        <div class="form-group">
          <label for="title">Título:</label>
          <input type="text" class="form-control" id="title" name="title" v-model="title" maxlength="100" placeholder="Digite o título do seu post" required>
        </div>

        <div class="form-group">
          <label for="title">Imagem:</label>
          <input type="text" class="form-control" id="image" name="image" v-model="image"
            placeholder="Digite um link para sua imagem" required>
        </div>

        <!-- <div class="form-group">
                <label for="image" >Imagem:</label>
                <input type="file" class="form-control-file" name="image"  id="image" >
              </div>  -->

        <div class="form-group">
          <label for="category">Categoria:</label>
          <select name="category" id="category" class="form-control" v-model="category">
            <option value="">Selecione</option>
            <option value="Games">Games</option>
            <option value="Animes">Animes</option>
            <option value="Heróis">Heróis</option>
            <option value="Filmes e séries">Filmes e séries</option>
          </select>
        </div>

        <div class="form-group">
          <label for="description">Descrição:</label>
          <textarea name="description" id="description" rows="5" class="form-control" v-model="description"
            placeholder="Descreva o post..."></textarea>
        </div>

        <div class="form-group">
          <label for="title">Fonte/referência:</label>
          <input type="text" class="form-control" id="reference" name="reference" v-model="reference" 
            placeholder="Digite a referência de seu post">
        </div>

        <div class="button" @click="createPost()">
          <input type="button" class="card-btn" value="Adicionar post">
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Message from './Message.vue'

export default {
  name: "CreatePost",
  components: {
    Message
  },

  data() {
    return {
      title: null,
      image: null,
      category: null,
      description: null,
      reference: null,
      user_id: null,
      msg: null,
    }
  },

  computed: {
    isLogged() {
      if (localStorage.getItem("user-info")) {
        return true
      } else {
        return this.$router.push({ name: "login" })
      }
    }
  },

  methods: {

    async createPost() {

      const user = JSON.parse(localStorage.getItem("user-info"))

      const data = {
        title: this.title,
        image: this.image,
        category: this.category,
        description: this.description,
        reference: this.reference,
        user_id: user.user.id,
      }


      axios.post('https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post/register', data)
        .then(function (response) {
          console.log(response);

        })
        .catch(function (error) {
          this.msg = `Não foi possível cadastrar`
          setTimeout(() => this.msg = "", 3000);
          console.error(error);
        });

        setTimeout(() =>this.$router.push({ name: "home" }), 1000);
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

.new-post-container {
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
   #main-container{
    width: 100vh;
    height: 161.5vh;
  }
 }
</style>

