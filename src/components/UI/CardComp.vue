<template>
    <div class="card" :style="style">
        <slot></slot>
    </div>
</template>

<script>


export default {
    components: { 
    },
    props: {
        type: {
            type: String,
            default: "button"
        },
        buttonType: {
            type: String,
            default: null
        },
        style:[String, Object]
    },

    data() {
        return {
        }
    },
    computed : {
    },
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>
    
<style scoped>
.card {
    background: white;
    box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
    border-radius: 10px;
    color: black;
}
</style>