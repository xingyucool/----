<template>
  <div class="cart">
    <Header title="购物车" edit="true"/>
    <CartDetails v-if='isShow' :changeShow="changeShow"/>
    <Blank v-else/>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Blank from '@/components/Blank'
import Header from "../../components/Header.vue";
import CartDetails from './components/CartDetails'
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex' 
export default {
  components: {
    Footer,
    Blank,
    Header,
    CartDetails,
},
setup() {
  let isShow=ref(true)  //初始化详情展示与否
  const store = useStore()
  const init =()=>{
    if(store.state.cartList.length===0){
        isShow.value=false;
    }
  };
  onMounted(()=>{
    init()
  })
  const changeShow=()=>{
    isShow.value = false;
  }
  return {
    isShow,
    changeShow,

  }
}
};
</script>

<style lang='less' scoped>
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>