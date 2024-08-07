<template>
    <div>
        <div class="container">
            <p>Todo App Test</p>
            <div class="wrapper">
                <input placeholder="Enter Task" v-model="inputVal" />
                <button @click="handleAdd">Add Now</button>
            </div>
        </div>
        <div class="cardContainer" v-if="data && data.length > 0">
            <TodoCard v-for="(item, index) in data" :key="index" :data="item" :handleDelete="handleDelete"
                :handleUpdate="handleUpdate" />
        </div>
    </div>
</template>

<script>
import TodoCard from "@/components/cards/TodoCard";

export default {
    name: "MyTodoApp",
    components: {
        TodoCard,
    },
    data() {
        return {
            inputVal: "",
            data: [],
        };
    },
    methods: {
        handleAdd() {
            this.data.push(this.inputVal);
            this.inputVal = "";
        },
        handleDelete(val) {
            if (!val) return
            const updateData = this.data.filter((item) => item !== val)
            this.data = updateData
        },
        handleUpdate(oldVal, newVal) {
            const indexToUpdate  = this.data.indexOf(oldVal);
            this.data.splice(indexToUpdate, 1, newVal);
        }
    },
};
</script>

<style scoped>
.container {
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wrapper {
    display: flex;
    margin: 30px 0px;
    width: 100%;
}

input {
    width: 90%;
    padding: 10px;
}

button {
    margin-left: 10px;
}

.cardContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    background-color: black;
}
</style>
