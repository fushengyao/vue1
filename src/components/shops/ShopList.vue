<template>
  <div>{{ac}}</div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        name: "ShopList",
        computed: {
          //此处无this
          ac(){
            return this.$store.state.count
          },
          ...mapState({
            viewsCount: 'shop_list'
          })
        },
        mounted() {
          //console.log(111, this.viewsCount);
          var _this = this;
          this.fooGet()
          this.$axios.get("/api/users").then(function (res) {
            console.log(res);
            console.log(_this.$md5("hello"));
          })
        },
        methods: {
          ...mapGetters({
            fooGet: 'foo/fooGet'
          }),
          ...mapMutations({
            increment: 'increment'
          }),
          ...mapActions('foo',{
            someAction: 'someAction'
          })
        }
    }
</script>

<style scoped>

</style>
