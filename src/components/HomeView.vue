<template>
  <section class="block_1">
    <article class="block_1_all">
    <h2>Персональные данные</h2>
    <article class="block_1_inputs">
      <input type="text" placeholder="Имя" v-model="person.name">
      <input type="text" placeholder="Возраст" v-model="person.age">
    </article>
  </article>
  </section>
  <section class="block_2">
    <article class="block_2_btn">
      <h2>Дети (макс. 5)</h2>
      <button class="addChild" @click="addChild" v-if="children.length < 5">+ Добавить ребенка</button>
    </article>
    <article v-for="(child, index) in children" :key="index" class="child_container">
      <article class="child">
        <input type="text" placeholder="Имя" v-model="child.name">
        <input type="text" placeholder="Возраст" v-model="child.age">
        <button class="delChild" @click="deleteChild(index)">Удалить</button>
      </article>
    </article>
  </section>
  <section class="block_3">
    <article class="block_3_btn">
    <button @click="addLocalStorage(), sendData(), addPerson()">Сохранить</button>
  </article>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'; 
export default defineComponent({
  setup() {
    let router = useRouter()
    let children = ref([])
    let person = ref({ name: '', age: '' })
    let persons = ref([])
    let addPerson = () => {
      persons.value.push({ ...person.value, children: [...children.value] })
      person.value = { name: '', age: '' }
      children.value = [];
    }
    const addChild = () => {
      if (children.value.length < 5) {
        children.value.push({ name: '', age: '' })
      }
    }
    const deleteChild = (index) => {
      children.value.splice(index, 1)
    }
    const sendData = () => {
      console.log(children.value)
      console.log(person.value)
    }
    const addLocalStorage = () => {
      const storedPersons = JSON.parse(localStorage.getItem('persons')) || []
      const newPerson = { ...person.value, children: [...children.value] }
      storedPersons.push(newPerson)
      localStorage.setItem('persons', JSON.stringify(storedPersons))
    }
    return {
      children,
      person,
      persons,
      addPerson,
      addChild,
      deleteChild,
      sendData,
      addLocalStorage
    };
  }
});
</script>
  <style scoped>
  .block_3 { 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .block_1 { 
    padding-top: 5%;
  }
  .block_1_inputs { 
    padding-top: 5%;
  }
  .block_2 { 
    padding-top: 5%;
  }
  .block_3_btn { 
    padding-top: 5%;
    padding-right: 500px;
  }
  .block_3_btn button{ 
    color: #fff;
    background-color: #01A7FD;
    border-radius: 100px;
    padding: 20px 30px;
    font-weight: 400;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }
  .delChild { 
    border: none;
    color: #01A7FD;
    font-weight: 400;
    font-family: Montserrat;
    font-size: 14px;
    cursor: pointer;
  }
  .child { 
    display: flex;
  }
  .child_container input { 
    border:none;
      min-width: 260px;
      min-height: 56px;
      color: #111111;
      font-weight: 400;
      font-family: Montserrat;
  }
  .block_2_btn button { 
    border: 2px solid #01A7FD;
    color: #01A7FD;
    font-size: 14px;
    font-weight: 400;
    border-radius: 100px;
    background: none;
    padding: 15px 40px;
    cursor: pointer;
  }
  .block_2_btn { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 616px;
  }
  .block_2_btn h2  { 
    color: #111111;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
  }
  
  .block_2 { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 616px;
  }
  * { 
    margin: 0;
  }
  header { 
    padding:0px 100px ;
    margin: 0; 
    display: flex;
    gap: 40%;
  }
  .block_1 h2 { 
    font-family: Montserrat;
    color: #111111;
    font-weight: 500;
  }
  .block_1 { 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
  }
    .block_1_inputs { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
  
    }
    .block_1_inputs input { 
      border:none;
      min-width: 616px;
      min-height: 56px;
      color: #111111;
      font-weight: 400;
      font-family: Montserrat;
      display: flex;
      flex-direction: column;
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
    }
  </style>