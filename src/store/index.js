import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

const stores = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default stores;