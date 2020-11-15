<template>
    <div class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Firebase Auth</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/login">Login</router-link>
            </li>
        </ul>
    </div>
    <div class="container py-4">
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
