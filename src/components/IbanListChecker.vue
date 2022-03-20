<template>
<div class="container">
  <div class="page">
    <input type="file" accept="text/plain" id="actual-btn" v-on:change="handleFileUpload" v-on:click="triggerEvent"  hidden/>
    <label for="actual-btn" class="mb-2">Choose Text File</label>
        <div class="archive" v-for="(item, value, index) in filteredObject" :key="index">
          <article class="article">
            <h2 v-show="item" class="success">#{{item}}</h2>
            <h2 v-show="item === false" class="fail">#{{item}}</h2>
            <p>{{value}}</p>
            <hr>
          </article>
        </div>
  </div>
</div>


</template>

<script lang="ts">
import {defineComponent} from "vue";
import validIban from "@/services/iban-checker";
import Iban from "@/types/Iban";

export default defineComponent({
  name: "IbanListChecker",
  data() : {
    file: string[]
    filteredObject: Iban
  }{
    return {
      file: [],
      filteredObject: {}
    };
  },
  methods:{
    triggerEvent(e : any){
      e.target.value = ''
    },
    async handleFileUpload(e : any){
      this.filteredObject = {}
      let files = e.target!.files
      const fileReader = new FileReader()
      fileReader.readAsText(files[0]);

      fileReader.onload= async ()=>  {
        let fileRes : string = fileReader!.result!.toString();
        this.file = fileRes.split('\r\n')
        this.file.forEach((el:any) => {
          let isTrue = validIban(el.trim())
          this.filteredObject[el] = isTrue
        })
      }
    },
  }
})

</script>

<style lang="less" scoped>
@desktop:   ~"only screen and (min-width: 501px) ";
@phone:    ~"only screen and (max-width: 500px)";

@mainColor: #42b983;
@blackColor: #000;
@whiteColor: #fff;
@deleteColor: #dc143c;
hr {
  height: 15px !important;
  border: none;
  background: rgba(0, 0, 0, 0.4);
}


label {
  background-color: indigo;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}

#file-chosen{
  margin-left: 0.3rem;
  font-family: sans-serif;
}
@media @phone {
  .page {
    padding: 1em;
    border-radius: 5px;
    text-align: center;
    background: @mainColor;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
@media @desktop {
  .page {
    padding: 1.5em;
    border-radius: 5px;
    text-align: center;
    background: @mainColor;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
}
p{
  word-wrap: break-word;
}
.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
}
.fail{
  color: #dc3545;
}
.success{
  color: #42b983;
}
.article {
  padding: 1em;
  background: @whiteColor;
  box-shadow:
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 20px 20px rgba(0, 0, 0, 0.05);
}
.button-delete {
  background-color: @whiteColor; /* Green */
  border: none;
  color: @blackColor;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid @mainColor;
}

.button-delete:hover {
  background-color: @mainColor;
  color: @whiteColor;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.button-edit {
  background-color: @whiteColor; /* Green */
  border: none;
  color: @blackColor;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid @mainColor;
}

.button-edit:hover {
  background-color: @deleteColor;
  color: @whiteColor;
}
</style>