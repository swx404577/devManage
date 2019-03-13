<template>
  <div>
  home
  <div>当前用户: <span>{{userName}}</span></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: ''
      }
    },
    methods: {},
    mounted() {
      console.log(this.$store.state.route)
      this.userName = this.$store.state.route.params.userName
    },
    computed: {
    },
    components: {

    }
  }
</script>