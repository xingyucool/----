<template>
  <div class="item" @click="$router.push('/store')">
      <img :src="item.pic" alt=""/>
      <div class="item_right">
          <div class="title">{{item.title}}</div>
          <div class="price">{{item.sales}}</div>
          <div class="label">起送费{{item.sales}}免配送费</div>
          <div class="label">
              <div v-for="(i,index) of item.label" :key="index">{{i}}</div>
          </div> 
      </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
props:['item'],
}
</script>

<style lang="less" scoped>
.item:not(:first-child){
    margin-top:10px;
}
.item{
    background-color:#fff;
    border-radius:10px;
    display:flex;
    padding:10px;
    img{
        width:120px;
        height:120px;
        border-radius:10px;
        margin-right:20px;
    }
    .item_right{
        display:flex;
        flex-flow:column;
        justify-content: space-between;
        .title{
            font-size:18px;
        }
        .label{
            display:flex;
            div {
                background-color:#ffc40047;
                border-radius:5px;
                padding:2p 5px;
            }
            div:not(:first-child){
                margin-left:5px;
            }
        }
    }
    
}

</style>