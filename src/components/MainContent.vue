<template>
<InputForm @add-product="addProduct"></InputForm>

<CardComp style=" width: 41%;margin: 0 auto;">
    <h3 class="heading">Filter and Sort</h3>
    <div class="filters">
    <div class="togg">
        <label for="sort">Sort By</label>
        <select name="sort" id="sort" v-model="sortValue" @change="sortData">
            <option value="none" >Please select one</option>
            <option value="id">Id</option>
            <option value="type">Type</option>
            <option value="name">Name</option>
        </select>
        <div class="togg-div">
            <ToggleSwitch v-if="sortValue !== 'none'" ref="idTogg" c-name="a" @sort-update="sortData"></ToggleSwitch>
        </div>
    </div>
    <div class="filter-term">
        <label for="s-term"></label>
        <input id="s-term" type="text" v-model="searchTerm" placeholder="Filter contents..." @keyup="checkEmptySearch($event)" style="height: 38.4px;"/>
        <ButtonComp button-type="info" @click="filterTable" style="height:38.4px;">Search</ButtonComp>
    </div>
</div>
</CardComp>
<table class="center">
    <thead>
        <th>Id</th>
        <th>Type</th>
        <th>Name</th>
        <th>Topping</th>
    </thead>

    <tbody>
      <tr v-for="(item,index) in filteredAndSorted" :key="index">
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
import ToggleSwitch from './UI/ToggleSwitch.vue';
import ButtonComp from './UI/ButtonComponent.vue';
import CardComp from './UI/CardComp.vue'

export default {
    components: { 
        InputForm,
        ToggleSwitch,
        ButtonComp,
        CardComp
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
            ],
            filteredAndSorted: [],
            desId: false,
            desType: false,
            desName: false,
            searchTerm: '',
            sortValue: 'none'
        }
    },
    computed : {
    },
    methods: {
        addProduct(data) {
            this.allValues = [...this.allValues, data];
            this.filteredAndSorted = [...this.filteredAndSorted, data];
        },
        sortData(data) {
            let val = '';
            if (data && !data.target) {
                val = data;
            } else {
                val = data && data.target ? data.target._modelValue : 'asc';
            }
            if (this.sortValue !== 'none') {
                this.reorderData(val,this.sortValue);
            } else if (this.sortValue === 'none' && this.searchTerm !== '') {
                this.filterTable();
            } else {
                this.filteredAndSorted = JSON.parse(JSON.stringify(this.allValues));
            }
        },
        reorderData(isDescending, column) {
            this.filteredAndSorted.sort((a,b) => {
                let fa = a[column].toLowerCase(),
                    fb = b[column].toLowerCase();
                if (isDescending === "des") {
                    if (fa < fb) {
                        return 1
                    }
                    if (fa > fb) {
                        return -1
                    }
                } else {
                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                }
                return 0
            });
        },
        filterTable() {
           let filteredArray = [];
           if (this.searchTerm !== '') {
                filteredArray =  this.filteredAndSorted.filter(item => {
                    return item.id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || item.type.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || item.topping.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1
                });
                this.filteredAndSorted = filteredArray;
            } else {
                this.filteredAndSorted = JSON.parse(JSON.stringify(this.allValues));
            }
        },
        checkEmptySearch(event) {
            if (event.target.value.length === 0) {
                this.filteredAndSorted = JSON.parse(JSON.stringify(this.allValues));
                if (this.sortValue !== 'none') {
                    this.sortData(this.$refs.idTogg.descending);
                }
            }
        }
    },
    mounted() {
        this.filteredAndSorted = JSON.parse(JSON.stringify(this.allValues));
    },
    watch: {
        sortValue () {
            if (this.$refs.idTogg) {
                this.$refs.idTogg.resetToggle(false);
            }
        }
    }
}
</script>

<style scoped>
select,
option,
input,
.heading{
    color: black;
}
.heading {
    width: 27%;
    margin: 10px auto 0 auto;
    padding: 10px;
}
.filters{
    display: flex;
    justify-content: center;
    gap: 10%;
    padding: 10px
}
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
  border: 1px solid white;
  padding: 5px;
}
.flex-div{
    display: flex;
    justify-content: center;
}
.togg-div{
    display: flex;
    padding-left: 20px;
    flex-direction: column;
}
.filter-term{
    display: flex;
    justify-content: center;
}
.togg{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
}
label[for="sort"] {
    margin: 10px;
    color:black;
}

</style>