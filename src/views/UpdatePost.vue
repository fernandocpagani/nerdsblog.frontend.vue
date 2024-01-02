<template>
  <div id="main-container" class="container-fluid" v-if="isLogged">
    <div class="new-post-container">
      <h1 class="page-title">Atualize seu post Nerd</h1>

      <form id="add-post-form">

        <div class="form-group">
          <label for="title">Título:</label>
          <input type="text" class="form-control" id="title" name="title" v-model="title" maxlength="60"
            placeholder="Digite o título do seu post">
        </div>

        <div class="form-group">
          <label for="title">Imagem:</label>
          <input type="text" class="form-control" id="image" name="image" v-model="image"
            placeholder="Digite um link para sua imgaem">
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
          <textarea name="description" id="description" rows="5" class="form-control" maxlength="2000"
            v-model="description" placeholder="Descreva o post..."></textarea>
        </div>

        <div class="form-group">
          <label for="title">Fonte/referência:</label>
          <input type="text" class="form-control" id="reference" name="reference" v-model="reference" maxlength="60"
            placeholder="Digite a referência de seu post">
        </div>

        <div class="button" @click="updatePost()">
          <input type="button" class="card-btn" value="Atualizar post">
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "UpdatePost",
  components: {

  },

  data() {
    return {

      title: null,
      image: null,
      category: null,
      description: null,
      reference: null
    }
  },

  methods: {

    async updatePost() {

      const result = await axios.put(`https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post/` + this.$route.params.id + `/update`,
        {
          title: this.title,
          image: this.image,
          category: this.category,
          description: this.description,
          reference: this.reference
        });
      if (result.status == 200) {
        this.$router.push({ name: 'home' });
      }
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

  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'login' })
    }
    const result = await axios.get(`https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post/` + this.$route.params.id)
    console.log(result.data)

    this.title = result.data.title
    this.image = result.data.image
    this.category = result.data.category
    this.description = result.data.description
    this.reference = result.data.reference
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
  #main-container {
    width: 100vh;
    height: 150vh;
  }
}
</style>

