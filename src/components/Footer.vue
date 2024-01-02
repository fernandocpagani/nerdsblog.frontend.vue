<template>
    <div id="footer">
        <p>Nerd's blog &copy; 2023 </p>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
#footer {
    font-size: 16px;
    height: 10vh;
    padding: 20px;
    background-color: #d32488;
    color: black;
    width: 100%;
    text-align: center;
    align-content: center;
    justify-items: center;
}


@media(max-width: 490px) {
    #footer {
        width: 100vh;
        height: 10vh;
    }
}
</style>