<template>
    <header>
        <h1> task tracker : {{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: "lineGraph",
    props: {
        title: {
            type: String,
            default: "james",
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>