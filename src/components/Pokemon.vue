<template>

    <b-container> 
        <center>
          <img src="../assets/zxcv.png" class="img-responsive" id="poke_img"/> 
        </center>
        <b-form-input type="text" v-model="search" placeholder="Search Pokemon" id="search" class="shadow"></b-form-input>
   
    <b-row align-v="center"> 
          <b-col md="2" v-bind:key="pokemons.id" v-for="pokemons in filterPokemons">
              <PokemonList v-bind:pokemons="pokemons"/> 
         </b-col>  
    </b-row> 
</b-container>
</template>

<script>
import axios from 'axios'
import PokemonList from './PokemonList.vue';
export default {
    name:"Pokemon",
    components: {
        PokemonList
    },
   data(){
       return{
           pokemon:[],
          search:''
       }
   },
    mounted(){
    var self = this;
    const pokeCount = 150;
    var pokeContainer = [];
     const sendGetRequest = async () => {
       
        try {
             for(let i = 1; i <= pokeCount; i++){
         const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+i+''); 
            pokeContainer.push(response.data);
          }
          self.pokemon = pokeContainer;
        } catch (err) {
    
            console.error(err);
        }
    };
    sendGetRequest();
  },
  
computed:{
    filterPokemons:function(){
        return this.pokemon.filter((pokemons) => {
            return pokemons.name.match(this.search);
        })
    }
}

}

</script>

<style scoped>
#search{
    max-width: 100%;
    padding: 5px;
    margin-top: 10px;
      font-family: 'Russo One', sans-serif;
}
</style>