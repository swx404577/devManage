<template>
  <div style="height:100%;overflow: hidden">
    <!--路由区域-->
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    methods: {},
    mounted() {
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        isLoading: state => state.vux.isLoading
      })
    },
    components: {

    },
  }
</script>