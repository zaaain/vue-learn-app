<template>
<div class="container">
    <p>{{ data }}</p>
    <div class="btnContainer">
        <button @click="updateStatus(data)">Update</button>
        <button @click="handleDelete(data)">Delete</button>
    </div>
    <div v-if="updateFlag">
        <input placeholder="Enter update val" v-model="updateVal" />
        <button @click="handleUpdated">Save</button>
    </div>
</div>
</template>

<script>
export default {
    name: "TodoCard",
    props: {
        data: String,
        handleDelete: Function,
        handleUpdate: Function
    },
    data() {
        return {
            updateFlag: false,
            updateVal: ""
        }
    },
    methods: {
        updateStatus(oldVal) {
            this.updateVal = oldVal
            this.updateFlag = !this.updateFlag
        },
        handleUpdated() {
            this.handleUpdate(this.data, this.updateVal);
            this.updateFlag = false;
            this.updateVal = "";
        }
    }
}
</script>

<style scoped>
.container {
    min-width: 300px;
    max-width: 300px;
    background-color: red;
    display: flex;
    padding: 10px;
    flex-direction: column;
}

p {
    font-size: 20px;
    color: white;
}

.btnContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
}

.btn {
    padding: 10px;
}
</style>
