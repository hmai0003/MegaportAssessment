<template>
    <button class="normal" :class="buttonType" :type="type" @click="callback($event)" :style="style">
        <slot></slot>
    </button>
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
        style: [String,Object]
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
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color:#fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.danger {
    background-color: #ff4949;
    color: #fff;
}
.success {
    background-color: #13ce66;
    color: #fff;
}
.info {
    background-color: #50bfff;
    color: #fff;
}

</style>