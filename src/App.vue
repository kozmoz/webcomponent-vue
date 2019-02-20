<template>
    <div id="app">

        <h2>Web Component + Vue</h2>

        <p>Demonstration of Web Component within Vue.</p>

        <p>
            Web Component:
            <increment-button :value="value" @update:value="value = $event.target.value"></increment-button>
        </p>

        <!-- Show the Vue values. -->
        <p>
            Vue: {{value}}
            <button @click="increaseValue">+</button>
        </p>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {value: 3}
        },
        name: 'app',
        components: {},
        methods: {
            increaseValue() {
                this.value += 1;
            },
        }
    }
</script>

<style>
    #app {
        font-family: sans-serif;
        text-align: center;
        color: #151d2b;
        margin-top: 60px;
    }

    p {
        margin-bottom: 2em;
    }
</style>
