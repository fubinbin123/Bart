<template>
  <div class="wrap">
    <h1 @click="show">+</h1>
    <div class="box">
      <div class="left">
        <v-item @chooseIndex="cindex" @chooseId="cid"></v-item>
      </div>
      <div class="right" v-show="type">
        <div class="top">
          <span>取消</span>
          <span @click="()=>{
              changeEvent({big:bigindex,id:oldid,sml:chindex})
              }">保存</span>
        </div>
        <div class="bot">
          <li v-for="(item,index) in list" :key="item.id">
            <b :class="{active:chindex===item.id}" @click="changes(index)"></b>
            {{item.name}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
-
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Index",
  data() {
    return {
      type: false,
      chindex:null,
      bigindex:null,
      oldid:null
    };
  },
  methods: {
      ...mapMutations(["changeEvent"]),
    show() {
      this.type = !this.type;
    },
    cindex($index){
        console.log($index)
        this.type=true
        this.chindex=$index
        this.bigindex=$index
    },
    changes($index){
         this.chindex=$index
    },
    cid($id){
        this.oldid=$id
    }
  },
  computed: {
    ...mapGetters(["list"])
  }
};
</script>

<style>
.active{
    border:1px solid gold !important;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h1 {
width:20px;
float: right;
  height: 42px;
 
}
.box {
  width: 100%;
  display: flex;
}
.left {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.left-counent {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.count-item {
  width: 49%;
  height: 200px;
  border: 1px solid #ccc;
  position: relative;
}
.right {
  width: 20%;
  height: 200px;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
}
.bot {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.bot li {
  width: 100%;
  height: 30px;
  list-style: none;
}
.bot li b{
    width: 10px;
    height: 10px;
    display: inline-block;
    border:1px solid #ccc;
}
</style>
