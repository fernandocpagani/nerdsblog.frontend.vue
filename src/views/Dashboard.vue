<template>
  <div id="main-container" class="container-fluid" v-if="isLogged">
    <Message :msg="msg" v-show="msg" />
    <div class="dashboard-container">

      <h1 class="page-title">Dashboard</h1>
      <label class="section-description">Adicione ou atualize as informações dos posts que você enviou</label>

      <table>

        <thead>
          <tr class="post-table-heading">
            <th class="table-number">Id</th>
            <th class="table-title">Título</th>
            <th class="table-category">Categoria:</th>
            <th class="table-action">Ações:</th>
          </tr>
        </thead>

        <tbody>
          <div v-for="post in posts " :key="post.id">
            <div v-if="post.user_id == userId()">

              <tr class=" post-table-row">
                <td class="table-number">{{ post.id }} </td>
                <td class="table-title">{{ post.title }} </td>
                <td class="table-category">{{ post.category }} </td>
                <td class="table-action">
                  <button class="delete-btn" @click="deletePost(post.id)">Deletar</button>
                  <button class="card-btn"> <router-link :to="'updatepost/' + post.id" class="update">Atualizar</router-link></button>
                </td>
              </tr>

            </div>
          </div>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Message from './Message.vue'

export default {
  name: "Dashboard",
  components: {
    Message
  },
  data() {
    return {
      posts: [],
      post: null,
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
    },

    isAPost() {
      if (user_id != null) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    async deletePost(id) {
      axios.delete(`https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post/${id}/delete`)
        .then((response) => {
          this.msg = "Post removido com sucesso!"
          this.lista()
          setTimeout(() => this.msg = "", 3000);
        })
    },

    userId() {
      let userId = JSON.parse(localStorage.getItem('user-info')).user.id;
      return userId
    },

    lista() {
      axios
        .get('https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post')
        .then((response) => {
          this.posts = response.data
        })
    }
  },

  mounted() {
    this.lista()
  }
}
</script>

<style scoped>

.update{
  text-decoration: none;
}

.table-category th, .table-action th{
  margin-left: 15vh;
}

.post-table-heading,
.post-table-row,
.post-table-rows {
  display: flex;
  flex-wrap: wrap;
}

.post-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #d32488;
}

.post-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #e6e6e6;
}

.post-table-heading .table-id,
.post-table-row .table-number {
  width: 5vh;
}

.post-table-heading .table-title,
.post-table-row .table-title {
  width: 70vh;
  text-align: center;
}

.post-table-heading .table-category,
.post-table-row .table-category {
  width: 20vh;
  text-align: center;
}

.post-table-heading .table-action,
.post-table-row .table-action {
  margin-left: 7vh;
  width: 30vh;
  text-align: center;
}

.section-description {
  text-align: center;
  padding: 5px;
}

#main-container {
  background-image: url(../../public/img/360_F_323880864_TPsH5ropjEBo1ViILJmcFHJqsBzorxUB.jpg);
  background-position: center center;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 40px;
  min-height: 75vh;
  margin: 0;
}

.dashboard-container {
  width: 140vh;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #02dafa;
}

.page-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

td {
  background-color: #02dafa;
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
  text-decoration: none;
}

.card-btn:hover {
  background-color: #d32488;
}

.delete-btn {
  padding: 3px 20px;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  background-color: rgba(255, 29, 29, 0.836);
  text-align: center;
  margin: 0 13px;
}

.delete-btn:hover {
  background-color: red;
}

@media(max-width: 490px) {

  #main-container {
    width: 100vh;
    align-items: center;
  }

  .dashboard-container {
    width: 90vh;
    align-items: center;
  }

  .post-table-heading,
  .post-table-row,
  .post-table-rows {
    width: 80vh;
    align-items: center;
  }

  .post-table-heading .table-title,
  .post-table-row .table-title {
    width: 40vh;
  }

  #main-container {
    width: 100vh;
    height: 161.5vh;
  }

  .post-table-heading .table-action,
  .post-table-row .table-action {
    width: 13vh;
  }

  .post-table-heading .table-category,
  .post-table-row .table-category {
    align-items: center;
    width: 8vh;
    margin-left: 2vh;
  }

  .card-btn,
  .delete-btn {
    margin: 5px 0px
  }

}
</style>