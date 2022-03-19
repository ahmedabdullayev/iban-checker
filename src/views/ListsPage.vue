<template>
<IbanListChecker></IbanListChecker>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import IbanListChecker from "../components/IbanListChecker.vue";
export default defineComponent({
  name: "ListsPage",
  components: {IbanListChecker}
})
</script>

<style scoped>

</style>