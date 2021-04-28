<template>
  <p class="server-mag">{{serverMsg}}</p>
  <p class="test">{{msg}}</p>
</template>

<script>
import axios from "axios";

export default {
  name:'app',
  data(){
    return {
      msg: "hello vue !!",
      serverMsg: '',
    }
  },
  created() {
    axios.get("/api/docker").then((res) => {
      console.log(res.data);
      this.serverMsg = res.data;
    });
  }
}
</script>
<style >
.test{
  color:#020202;
  font-size:18px;
}
.server-mag{
  color: #020202;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 25px;
}
</style>