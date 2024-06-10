const {createRouter, createWebHistory} = VueRouter;

//import HomeView from "./view/HomeView.js";
import fors from "./for.js";
import dataBinding from "./dataBinding.js";
import posts from "./post.js";
import todos from "./todo.js"



const routes = [
    { path: '/for', component: fors},
    { path: '/dataBinding', component: dataBinding},
    { path: '/posts', component: posts},
    { path: '/todos', component: todos},
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})