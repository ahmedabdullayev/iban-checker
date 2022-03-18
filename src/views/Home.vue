<template>
  <div class="home">
    <IbanChecker/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IbanChecker from '@/components/IbanChecker.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    IbanChecker,
  },
});
</script>
