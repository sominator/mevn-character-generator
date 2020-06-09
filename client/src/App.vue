<template>
    <div id="app">
      <div class="buttons_container">
        <button class="btn btn-primary btn-md" v-on:click="toggle='character-viewer'; getCharacters()">View all characters</button>
        <button class="btn btn-success btn-md" v-on:click="toggle='character-creator'">Create a characters</button>
      </div>
        <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters"/>
        <CharacterCreator v-show="toggle==='character-creator'" />
    </div>
</template>

<script>
    import CharacterViewer from './components/CharacterViewer.vue'
    import CharacterCreator from './components/CharacterCreator.vue'
    import axios from "axios"

    export default {
        name: 'App',
        components: {
            CharacterViewer,
            CharacterCreator
        },
        data: function () {
            return {
                toggle: "character-viewer",
                characters: null
            }
        },
        methods: {
            getCharacters: function () {
                axios
                    .get('http://localhost:3000/characters')
                    .then(response => (this.characters = response.data))
            }
        },
        mounted: function () {
            this.getCharacters();
        }
    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .buttons_container {
      display: flex;
      justify-content: center;
    }

    .buttons_container button {
      margin: 0.3em 0em 0.5em 0.3em;
    }
</style>
