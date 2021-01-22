<template>
    <div class="not-found">
        <div>
            <div>
                <h1>Oops!</h1>
                <h2>404 - THE PAGE CAN'T BE FOUND</h2>
            </div>
            <router-link :to="{name: 'home'}">GO TO HOMEPAGE</router-link>
        </div>
    </div>
</template>
<style scoped>
    .not-found {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
