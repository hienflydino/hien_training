<template>
    <div>
        <Header></Header>
        <main class="flex flex-col h-screen">
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>
