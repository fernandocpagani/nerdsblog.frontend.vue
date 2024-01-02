<template>
  <div id="main-container" v-if="isLogged">
    <input class="search-input" v-model="keyword" @input="getResults" placeholder="Digite sua pesquisa">
    <div class="post-container" v-bind:key="result.id" v-for="result in results">
      <h1 class="title-post">{{ result.title }}</h1>
      <img v-bind:src="result.image" class="image-post">
      <div class="info">
        <h3 class="info-post">{{ result.category }}</h3>
        <h3 class="info-post">Postado por: {{ result.user ? result.user.name : "sem usuário" }}</h3>
      </div>
      <p class="description">{{ result.description }}</p>
      <p class="reference">Referencia/fonte: <a v-bind:href= "result.post" target="_blank">{{ result.reference }}</a></p>    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      keyword: '',
      results: [],
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

  watch: {
    keyword: function (newVal) {
      if (newVal.length > 2) {
        this.getResults();
      }
    }
  },
  methods: {
    getResults() {
      if (this.keyword.length >= 3)
        axios.get("https://nerdsblogbackendlaravel-jtw-production.up.railway.app/api/post/search?search=" + this.keyword)
          .then(res => (this.results = res.data))
          .catch(err => console.log(err));        
    },
  },

  created() {
    this.getResults()
  }
}

</script>

<style scoped>

.description {
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;  
  padding-bottom: 10px;
  border-bottom: 1.5px solid #d32488;
}


.reference {
  font-size: 12px;
  color: black;
  padding: 2px 0;
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: 600;
}

.info-post {
  font-size: 12px;
  color: black;
  font-weight: 600;
}
.search-input {
  margin-top: 5vh;
  padding: 5px 30px;
  border-radius: 10px;
  border: none;
  text-decoration: none;
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
}

.description {
  font-size: 15px;
  margin-top: 5px;
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
    height: 161.5vh;
    align-items: center;
  }

  .post-container {
    width: 90vh;
  }

  .search-input {
    margin-top: 20px;
    padding: 7px 40px;
    border-radius: 10px;
    border: none;
    text-decoration: none;
    font-size: 20px;
  }
}
</style>