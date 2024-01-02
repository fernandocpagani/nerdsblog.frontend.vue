<template>
    <div>
        <nav id="nav">

            <div id="logo-url" v-if="isLogged">
                <router-link to="/home"><img src="../../public/img/logo.jpg" alt="" id="logo"></router-link>

                <router-link to="/home">
                    <div class="nerds">
                        <h1 class="text-aqua">Nerd's </h1>
                        <h1 class="text-purple"> blog</h1>
                    </div>
                </router-link>
            </div>

            <div id="logo-url" v-else>
                <router-link to="/"><img src="../../public/img/logo.jpg" alt="" id="logo"></router-link>

                <router-link to="/">
                    <div class="nerds">
                        <h1 class="text-aqua">Nerd's </h1>
                        <h1 class="text-purple"> blog</h1>
                    </div>
                </router-link>
            </div>
            
            <div class="menu-right" v-if="isLogged">

            <router-link to="/search">
                <button class="button-search">
                    <img src="../../public/img/search.svg" alt="search-icon">
                </button>
            </router-link>
                
                <div>
                    <ul class="main-dropdown">
                        <li class="dropdown-hover">
                            <a href="#"><img src="../../public/img/filter.svg" alt=""></a>
                            <ul class="dropdown-menu">
                                <li><a href="/games">Games</a></li>
                                <li><a href="/animes">Animes</a></li>
                                <li><a href="/herois">Heróis</a></li>
                                <li><a href="/filmeseseries">Filmes/séries</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <router-link to="/createpost" class="menu-item">Criar post </router-link>
                <router-link to="/dashboard" class="menu-item">Dashboard</router-link>
                <a v-on:click="logout" href="/" class="bold menu-item">Sair</a>
                <router-link to="/about" class="menu-item">Sobre</router-link>


            </div>

            <div class="menu-right" v-else>
                <router-link to="/">Login</router-link>
                <router-link to="/about">Sobre</router-link>
            </div>

        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"],
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "login" })
        }
    },
    computed: {
        isLogged() {
            return localStorage.getItem("user-info");
        }
    }
}
</script>

<style scoped>
.menu-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
}

.input-search {
    border-radius: 5px;
    border: 1px;
    height: 22px;
}

.input-search:hover {
    background-color: #02dafa;
    border: none;
}

.button-search {
    border: none;
    background-color: #e6e6e6;
    transition: .5x;
}

.button-search:hover {
    scale: 1.2;
    color: #d32488;
}

#nav {
    height: 15vh;
    background-color: #e6e6e6;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.nerds {
    display: flex;
    flex-direction: row;
}

.text-aqua {
    margin-top: 0px;
    color: #02dafa;
    font-weight: bold;
    font-size: 40px;
}

.text-purple {
    margin-top: 20px;
    margin-left: 5px;
    color: #d32488;
    font-size: 25px;
}

#logo-url {
    margin: auto;
    margin-left: 0;
    display: flex;
    font-size: 30px;
    flex-direction: row;
}

#logo {
    width: 50px;
    height: 50px;
    background-color: black;
}

#nav a {
    color: black;
    text-decoration: none;
    margin: 10px;
    transition: .5s;
}

#nav a:hover {
    color: #d32488;
    scale: 1.05;
}

.main-dropdown {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-hover:hover>ul {
    display: flex;
    flex-direction: row;  
    align-items: center;
}

.dropdown-menu {
    display: none;
    justify-items: center;  
    background-color: #fff;   
    font-size: 14px;   
}

@media(max-width: 490px) {
    #nav {     
        width: 100vh;
    }   

    .text-aqua {
        font-size: 25px;
    }

    .text-purple {
        font-size: 14px;
        margin-bottom: 30px;
        color: #d32488;
    }
  
    #nav a {
        padding: 0px;
        margin: 2px 10px;
    }

    #logo-url {
        margin-top: 15px;
        margin-left: 10px;
    }

    #nav a {  
    margin: 12px;
    font-size: 20px;   
    }    

    .dropdown-hover:hover>ul{
        display: flex;
        flex-direction: row;
    }

}
</style>