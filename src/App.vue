<template>
<img :src="logo" class="logo">
  <header>
    <nav>
      <article class="nav_links">
        <router-link to="/">Форма</router-link>
        <router-link to="/second-page">Превью</router-link>
      </article>
    </nav>
  </header>
  <main>
    <router-view /> 
  </main>
</template>
<style scoped>  

header { 
  display: flex;
  align-items: center;
  justify-content: center;
}
nav { 
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .nav_links { 
      display: flex;
      gap: 50%;
    }
    nav a { 
      text-decoration: none;
      color: #1111117A;
      font-family: Montserrat;
      font-weight: 400;
      font-style: 14px;
      transition: .2s;
    }
    nav a:hover { 
      color: #01A7FD;
    }
    .logo { 
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10%;
    }
    * { 
      margin: 0;
    }
</style>
<script>
import logo from './logo.png';
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  data(){
    return { 
    logo: logo
  }
  },
  setup() {
    return {
      router
    }
  }
});
</script>

