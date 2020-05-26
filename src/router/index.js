import Vue from 'vue'
import Router from 'vue-router'
import ContactMe from '@/components/ContactMe'
import MyApp from '@/components/MyApp'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path:'/contactme/:email',
            name:'Contact Me',
            props: true,
            component: ContactMe
        },
        {
            path:'/myapp',
            name:'My App',
            component: MyApp
        }

    ]
})