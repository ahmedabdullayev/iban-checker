<template>
<IbanListChecker></IbanListChecker>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import IbanListChecker from "../components/IbanListChecker";
export default defineComponent({
  name: "ListsPage",
  components: {IbanListChecker}
})
</script>

<style scoped>

</style>