// 使用vuex的时候，必须引入vue
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    // state放置的是数据 类似于之前的data  state.$store.state.数据名字
    // 可以修改数据，但是不建议
  state: {
    type:'休闲娱乐',
    currentCity:'广州',
    month1:new Date().getMonth()+1,
    day1:new Date().getDate(),
    month2:new Date().getMonth()+1,
    day2:new Date().getDate()+1,
  },
//   mutations放置的是方法。类似之前的methods state.$store.commit('方法名',k,k)k代表的是参数
  mutations: {
      cmonth1(state,n){
        state.month1 = n;
      },
      cday1(state,n){
        state.day2 = n;
      },
      cmonth2(state,n){
        state.month2 = n;
      },
      cday2(state,n){
        state.day2 = n;
      },
      ccurrentCity(state,n){
        state.currentCity = n;
      }
  }
})
export default () =>store;