const {createRouter, createWebHistory} = VueRouter;

import HomeView from "./view/HomeView.js";
import AboutView from "./view/AboutView.js";
import UserView from "./view/UserView.js";
import UserProfile from "./view/UserProfile.js";
import UserPosts from "./view/UserPosts.js";

const routes = [
    { path: '/', component: HomeView},
    { path: '/index', redirect:"/"},
    { path: '/about', component: AboutView},
    
    { path: '/user/:id', 
      name:'user', 
      component: UserView,
      props:true,
      children : [
        {path: 'UserProfile', component : UserProfile},
        {path: 'UserPosts', component : UserPosts},
      ]
    },

    //{ path: '/userInfo', component: UserView}
    { path: '/userInfo', 
      redirect : to => { return {name: 'user', params: {id : to.query.username}}}
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})