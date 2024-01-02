<template>
  <div id="main-container" v-if="isLogged">
    <div v-for="post in posts" :key="post.id">
      <div class="post-container" v-if="post.category == 'Games'">
        <h1 class="title-post">{{ post.title }}</h1>
        <img v-bind:src="post.image" class="image-post">
        <div class="info">
          <h3 class="info-post">{{ post.category }}</h3>
          <h3 class="info-post">Postado por: {{ post.user && post.user.name ? post.user.name : "sem usuário"}}</h3>
        </div>
        <p class="description">{{ post.description }}</p>
        <p class="reference">Referencia/fonte: <a v-bind:href=" post.reference " target="_blank">{{ post.reference }}</a></p>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
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

  mounted() {
    {
      axios
      .get('https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post')
        .then((response) => {
          this.posts = response.data
        })
    }
  }
}

</script>

<style scoped>
.welcome {
  margin-top: 5vh;
  background-color: #d32488;
  color: black;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
}

.welcome2 {
  color: #02dafa;
  font-weight: 600;
}

.welcome3 {
  font-weight: bold;
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

.post-container {
  margin: 10px 20px;
  width: 110vh;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #02dafa;
}

.title-post {
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding-top: 10px;
  padding-bottom: 15px;
}

.info {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #d32488;
}

.info-post {
  font-size: 12px;
  color: black;
  font-weight: 600;
}

.reference {
  font-size: 12px;
  color: black;
  padding: 2px 0;
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: 600;
}

.description {
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #d32488;
}

.image-post {
  max-width: 80vh;
  max-height: 60vh;
  width: auto;
  height: auto;
  margin: 0 auto;
}

@media(max-width: 490px) {

  #main-container {
    width: 100vh;
    align-items: center;
  }

  .post-container {
    width: 90vh;
  }
}
</style>
