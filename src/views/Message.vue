<template>
    <div>
        <div class="message-container">
            <p>{{ msg }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .message-container {
        padding: 5px 10px 0px 10px;
        background-color: #d32488;       
        color: black;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 10px;
    }

   
</style>
