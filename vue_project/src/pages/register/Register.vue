<template>
  <div class="register">
    <Header title="注册" />
    <div class="img">滴团</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#ffc400"
        >
          注册
        </van-button>
        <van-button round block type="info" color="#ffc400" class="register" @click="$router.push('/login')">
          已有账号去登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { reactive, toRefs } from "vue";
import {useRouter} from "vue-router";
import {Toast} from 'vant'

export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter()
    let data = reactive({
      username: "",
      password: "",
    });
    //注册
    const register=(value)=>{
      Toast('注册成功!')
      console.log(value)
      localStorage.setItem('userInfo',JSON.stringify(value))
      router.push('/login')
    }

    // 提交按钮
    const onSubmit = (value) => {
      if(localStorage.userInfo){
        let userInfo=JSON.parse(localStorage.userInfo)
        if(userInfo['用户名']===value['用户名'])
        {
          Toast('账号已经存在')
          return;
        }
        else{
          register(value)
        }
      }
      else {
        register(value)
      }
    };

    return {
      ...toRefs(data),
      onSubmit,
    };
  },
};
</script>

<style lang='less' scoped>
.register {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>