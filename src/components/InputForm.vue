<template>
<CardComp style=" width: 41%;margin: 0 auto;">
    <h3 class="heading">Add Baked Goods</h3>
    <form class="input" @submit="onSubmit">
        <label for="Id">Id</label>
        <input id="Id" type="text" v-model="id"/>
        <label for="type">Type</label>
        <input id="type" type="text" v-model="type"/>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name"/>
        <label for="topping">Topping</label>
        <input id="topping" type="text" v-model="topping"/>
        <ButtonComp type="submit" button-type="success">Submit</ButtonComp>
    </form>
</CardComp>
</template>

<script>
import ButtonComp from './UI/ButtonComponent.vue'
import CardComp from './UI/CardComp.vue'
export default {

    components: { 
        ButtonComp,
        CardComp
    },

    props: {
    },

    data() {
        return {
            id: '',
            type: '',
            name: '',
            topping: ''
        }
    },
    computed : {
    },
    methods: {
        onSubmit(e) {  
            e.preventDefault();
            const newData = {
                id: this.id,
                type: this.type,
                name: this.name,
                topping: this.topping
            }
            this.$emit('add-product', newData);
            this.id = '';
            this.type = '';
            this.name = '';
            this.topping = '';
        }
    }
}
</script>

<style scoped>
.heading {
    color:black;
    width: 27%;
    margin: 10px auto 0 auto;
    padding-top: 10px;
}
form {
    color: black
}
.input {
    margin: 0.5rem auto 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    text-align: center;
    color: black;
}

.input label {
  display: -webkit-box;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: black
}

.input input {
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
  color: black
}

.input input:focus {
  outline: none;
  border-color: #4f005f;
}
</style>