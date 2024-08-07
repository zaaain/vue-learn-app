<template>
<div class="Container">
    <p>Inc Dec Test</p>
    <p class="counterVal">{{ counter }}</p>
    <div class="btnContainer">
        <button @click="handleIncrement">Increment</button>
        <button @click="handleDecrement">Decrement</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'IncDec',
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        handleIncrement() {
            this.counter++;
        },
        handleDecrement() {
            if (this.counter === 0) return
            this.counter--;
        }
    },
}
</script>

<style scoped>
.Container {
    width: 90%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.counterVal {
    font-size: 28px
}

.btnContainer {
    width: 50%;
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

p {
    margin-bottom: 50px;
}
</style>
