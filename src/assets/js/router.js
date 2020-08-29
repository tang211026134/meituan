
import VueRouter from 'vue-router'

import index from '../../components/index.vue'
import address from '../../components/address.vue'
import login from '../../components/login.vue'
import personal from '../../components/personal.vue'
import cate from '../../components/cate.vue'
import snack from '../../components/snack.vue'
import type from '../../components/type.vue'
import beauty from '../../components/beauty.vue'
import tour from '../../components/tour.vue'
import hotel from '../../components/hotel.vue'
import ktv from '../../components/ktv.vue'
import movie from '../../components/movie.vue'
import take_out from '../../components/take_out.vue'
import entertainment from '../../components/entertainment.vue'
import allBook from '../../components/allBook.vue'
import register from '../../components/register.vue'
import protocol from '../../components/protocol.vue'
import mymovie from '../../components/mymovie.vue'
import hotelList from '../../components/hotelList.vue'
import ciname from '../../components/ciname.vue'
import search from '../../components/search.vue'
import cityList from '../../components/cityList.vue'

import details from '../../components/details.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:index,
        
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/address',
            component:address
        },
        {
            path:'/cate',
            component:cate
        },
        {
            path:'/movie',
            component:movie,
            children:[
                {
                    path:'/mymovie',
                    component:mymovie
                }

            ]
        },
        {
            path:'/hotel',
            component:hotel
        },
        {
            path:'/personal',
            component:personal
        },
        {
            path:'/entertainment',
            component:entertainment
        },
        {
            path:'/take_out',
            component:take_out
        },
        {
            path:'/ktv',
            component:ktv
        },
        {
            path:'/tour',
            component:tour
        },
        {
            path:'/beauty',
            component:beauty
        },
        {
            path:'/snack',
            component:snack
        },
        {
            path:'/type',
            component:type
        },
        {
            path:'/details/:sh',
            component:details
        },
        {
            path:'/allBook',
            component:allBook
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/protocol',
            component:protocol
        },
        
        {
            path:'/hotelList',
            component:hotelList
        },

         {
            path:'/ciname',
            component:ciname
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/cityList',
            component:cityList
        },
       
    ]
})