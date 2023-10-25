<template>
    <div class="dashboard">
        <v-app-bar class="navbar" fixed app color="#F2E3D5">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> 
            <VSpacer />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="fullheight" width="256" app color="#F2E3D5">
            <v-list-item>
                <v-list-item-content>
                    
                    <img
                        height="60"
                        width="40"
                        src="../assets/image.png"
                    />
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    tag="router-link" 
                    :to="item.to"       
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <div class="grey lighten-4 fullheight pa-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default 
{
    name: "Dashboard",
    data()
    {
        return {
            drawer: false,
            items:
            [
                { title: "Home", to: "/" },
                { title: "Products", to: "/products"},
                { title: "About Us", to: "/aboutus"},
                { title: "Contact", to: "/contact"},
            ],
        };
    },
};
</script>

<style scoped>
    .fullheight
    {
        min-height: 100vh !important;
    }
</style>
