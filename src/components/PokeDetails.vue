<template>
   <div>
<b-container>
      <b-card  id="div" class="shadow">
    <b-row> 
  
          <b-col md="5">
              <img v-bind:src="'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id +'.png'" class="img-responsive" id="poke_img"/> 
          </b-col>
         
            <b-col md="7">
            <p id="poke_name">{{pokemon.name}}</p>
             <p id="poke_name">{{pokemon.type}}</p>
              <b-button squared variant="primary" @click="goPokemon" id="btn_back">Back to Poke`dex</b-button>
          </b-col>
     
    </b-row>
       </b-card>
  </b-container>

      
    
   </div>
</template>
<script>
import axios from 'axios'
export default {
    methods: {
        goPokemon(){
            this.$router.push('/');
        }
    },

      data(){
       return{
           id:this.$route.params.id,
           pokemon:[],
        
       }
   },
    mounted(){
    var self = this;
     const sendGetRequest = async () => {    
        try {
         
         const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+this.id); 
          console.log(response.data);
        self.pokemon = response.data;
     
        } catch (err) {

            console.error(err);
        }
    };
    sendGetRequest();
  }

}
</script>

<style scoped>
#poke_img {
  max-width: 100%;
}
#poke_name {
  font-family: 'Russo One', sans-serif;
  font-size: 35px;
}

#div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>