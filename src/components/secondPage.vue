<template>
  <main>
  <section class="block_1">
    <article>
      <h2>Персональные данные</h2>
      <p>{{ lastPersonInfo }} лет</p>
    </article>
  </section>
  <section class="block_2">
    <article>
      <h2>Дети</h2>
      <p v-if="lastPerson.children.length > 0"> {{ lastPerson.children.map(child => `${child.name}, ${child.age}`).join(', ') }}</p>
    </article>
  </section>
</main>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const lastPerson = computed(() => {
      const storedPersons = JSON.parse(localStorage.getItem('persons')) || [];
      return storedPersons.length > 0 ? storedPersons[storedPersons.length - 1] : {};
    });

    const lastPersonInfo = computed(() => {
      if (lastPerson.value.name && lastPerson.value.age) {
        return `${lastPerson.value.name}, ${lastPerson.value.age}`;
      } else {
        return '';
      }
    });

    return {
      lastPerson,
      lastPersonInfo
    };
  }
});
</script>
 <style scoped>
  .block_2 p { 
    color: #000000;
    font-weight: 700;
    font-family: Montserrat;
    font-size: 16px;
    text-align: left;
    padding-left: 5%;
    min-width: 197px;
  }

  .block_1, .block_2 { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    width: 100%;
  }
  .block_1 h2, .block_2 h2 { 
    text-align: left;
    color: #111111;
    font-weight: 500;
    font-family: Montserrat;
    font-size: 16px;
  }
  .block_1 p { 
    font-weight: 700;
    font-family: Montserrat;
    color: #111111;
    font-size: 16px;
  }
  </style>