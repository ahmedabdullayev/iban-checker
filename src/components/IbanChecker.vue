<template>
<div class="container">
  <form v-on:submit.prevent>
    <div class="form-floating mb-1">
      <input v-on:keypress="removeFeedbacks" type="text" class="form-control" id="floatingInputIban" placeholder="IBAN" v-model="iban">
      <label for="floatingInputIban">IBAN</label>
    </div>
    <div v-show="right" class="alert alert-success mt-2 mb-2" role="alert">
      This is a success alert—check it out!
    </div>
    <div v-show="right===false" class="alert alert-danger mt-2 mb-2" role="alert">
      This is a danger alert—check it out!
    </div>
    <button type="submit" class="btn btn-primary mb-3" v-on:click="checkIban">Confirm</button>
  </form>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import validIban from './iban-checker'
export default defineComponent({
  name: 'HelloWorld',
  data() : {
    right: null | boolean
    iban: string
  }{
    return {
      iban: "",
      right: null
    };
  },
  methods:{
    checkIban(){
      this.right = validIban(this.iban)
      if(this.right ===  true){
        document.querySelector('#floatingInputIban')!.classList.remove('fail')
        document.querySelector('#floatingInputIban')!.classList.add("success")
      }else{
        document.querySelector('#floatingInputIban')!.classList.remove('success')
        document.querySelector('#floatingInputIban')!.classList.add("fail")
      }
    },
    removeFeedbacks(){
      document.querySelector('#floatingInputIban')!.classList.remove('fail')
      document.querySelector('#floatingInputIban')!.classList.remove('success')
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.success{
  border: 1px solid #198754;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(25, 135, 84, 0.6) !important;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.fail{
  border: 1px solid #dc3545;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6) !important;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
