<template>
    <div class="character-viewer">
        <h1>Character Viewer</h1>
        <div class="table_container">
          <table class="table table-striped">
            <thead class="thead-dark">
              <th>Name</th>
              <th>Profession</th>
              <th></th>
            </thead>
            <tbody>
              <tr v-for="(character, index) in charactersList" v-bind:key="index">
                <th>{{character.name}}</th>
                <th>{{character.profession}}</th>
                <th>
                  <button class="btn btn-danger" type="button" name="button" @click="deleteCharacter(index, character)">Delete</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

    export default {
        name: 'CharacterViewer',
        data () {
          return {
            charactersList: []
          }
        },

        props: {
            characters: Array
        },

        methods: {
          deleteCharacter(idx, character) {
            this.charactersList.splice(idx, 1)
            axios
                .delete('http://localhost:3000/characters/'+character._id, {
                    character
                });
          }
        },

        watch: {
          characters: function (newVal) {
            this.charactersList = newVal
          },
          charactersList: function(newVal) {
            this.characters = newVal
          }
        }
    }
</script>

<style scoped>
  .character-viewer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .character-viewer h1 {
    margin-bottom:0.4em;
  }

  .table_container {
    width: 30em;
    margin: 0 auto;
  }
</style>
