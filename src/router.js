import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path)
{
    return () => import(`./components/${path}.vue`);
}

const router =  new VueRouter
({
    mode: "history",
    routes: 
    [{
        path: "/",
        name: "admin",
        component: importComponent("DashboardLayout"),
        children:
        [
            {
                path: "/",
                name: "Root",
                component: importComponent("Dashboard"),
            },

            {
                path: "/products",
                name: "Products",
                component: importComponent("Products"),
            },

            {
                path: "/contact",
                name: "Contact",
                component: importComponent("Contacts"),
            },

            {
                path: "/aboutus",
                name: "Abou Us",
                component: importComponent("AboutUs"),
            },
        ],
    },
    ],
});

export default router;