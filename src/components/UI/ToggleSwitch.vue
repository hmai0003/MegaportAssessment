<template>
    <span>{{descending}}</span>
    <input type="checkbox" :name="cName" :id="cName" true-value="des" false-value="asc" v-model="descending" @change="updateSortFilter($event)">
    <label :for="cName"></label>
</template>

<script>


export default {
    emits: ["sort-update"],
    components: { 
    },
    props: {
        cName: {
            type: String,
            defualt: "switch",
            required: true
        }
    },

    data() {
        return {
            descending: "asc"
        }
    },
    computed : {
    },
    methods: {
        updateSortFilter(e) {
            this.$emit('sort-update', e)
        },
        resetToggle(data) {
            this.descending = data;
        }
    }
}
</script>
    
<style scoped>
    span{
        padding-left: 5px;
        color: black;
    }
    input[type="checkbox"] {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    label {
        display: block;
        width: 34px;
        height: 20px;
        background-color: #4287f5;
        border-radius: 100px;
        position: relative;
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0 0 20px #477a8550;
    }
    label::after {
        content: "";
        width: 12px;
        height: 12px;
        background-color: #e8f5f7;
        position: absolute;
        border-radius: 70px;
        top: 4px;
        left: 3px;
        transition: 0.5s;
    }
    input:checked + label:after {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }
    input:checked + label {
        background-color: #243d42;
    }
    label:active:after {
        width: 16px;
    }

</style>