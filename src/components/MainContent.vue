<template>
<InputForm @add-product="addProduct"></InputForm>
<table class="center">
    <thead>
        <th>Id</th>
        <th>Type</th>
        <th>Name</th>
        <th>Topping</th>
    </thead>

    <tbody>
      <tr v-for="(item,index) in allValues" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.topping }}</td>
      </tr>
    </tbody>

  </table>
</template>

<script>
import InputForm from './InputForm';

export default {
    components: { 
        InputForm
    },

    props: {
    },

    data() {
        return {
            allValues: [
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Glazed"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Powdered Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Chocolate with Sprinkles"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Chocolate"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Regular Maple"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate None"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Glazed"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Powdered Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Chocolate with Sprinkles"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Chocolate"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Chocolate Maple"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry None"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Glazed"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Powdered Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Chocolate with Sprinkles"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Chocolate"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Blueberry Maple"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food None"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Glazed"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Powdered Sugar"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Chocolate with Sprinkles"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Chocolate"
                },
                {
                "id": "0001",
                "type": "donut",
                "name": "Cake",
                "topping": "Devil's Food Maple"
                },
                {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "topping": "Regular None"
                },
                {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "topping": "Regular Glazed"
                },
                {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "topping": "Regular Sugar"
                },
                {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "topping": "Regular Chocolate"
                },
                {
                "id": "0002",
                "type": "donut",
                "name": "Raised",
                "topping": "Regular Maple"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Regular None"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Regular Glazed"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Regular Chocolate"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Regular Maple"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Chocolate None"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Chocolate Glazed"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Chocolate Chocolate"
                },
                {
                "id": "0003",
                "type": "donut",
                "name": "Old Fashioned",
                "topping": "Chocolate Maple"
                },
                {
                "id": "0004",
                "type": "bar",
                "name": "Bar",
                "topping": "Regular Chocolate"
                },
                {
                "id": "0004",
                "type": "bar",
                "name": "Bar",
                "topping": "Regular Maple"
                },
                {
                "id": "0005",
                "type": "twist",
                "name": "Twist",
                "topping": "Regular Glazed"
                },
                {
                "id": "0005",
                "type": "twist",
                "name": "Twist",
                "topping": "Regular Sugar"
                },
                {
                "id": "0006",
                "type": "filled",
                "name": "Filled",
                "topping": "Regular Glazed"
                },
                {
                "id": "0006",
                "type": "filled",
                "name": "Filled",
                "topping": "Regular Powdered Sugar"
                },
                {
                "id": "0006",
                "type": "filled",
                "name": "Filled",
                "topping": "Regular Chocolate"
                },
                {
                "id": "0006",
                "type": "filled",
                "name": "Filled",
                "topping": "Regular Maple"
                }
            ]
        }
    },
    computed : {
    },
    methods: {
        addProduct(data) {
            this.allValues = [...this.allValues, data];
        }
    }
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 15px;
}

th {
  background-color: #4287f5;
  color: white;
}

th,
td {
  width: 150px;
  text-align: center;
  border: 1px solid black;
  padding: 5px;
}

</style>