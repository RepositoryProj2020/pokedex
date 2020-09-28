<template>
    <div >
       <b-card class="my-2 shadow" >
      <img v-bind:src="'https://pokeres.bastionbot.org/images/pokemon/' + pokemons.id +'.png'" class="img-responsive" id="poke_img"/>
    <router-link v-bind:to="'pokeDetails/'+pokemons.id"> <p id="poke_name">{{pokemons.name}}</p></router-link>
    </b-card>  
    </div>
</template>
<script>
export default {
    name:"PokemonList",
    props:["pokemons"]
}

</script>
<style scoped>
#poke_img {
  max-width: 100%;
}
#poke_name {
  font-family: 'Russo One', sans-serif;
  text-align: center;
}
</style>