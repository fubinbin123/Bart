<template>
  <div class="left-counent">
    <div class="count-item" v-for="(int,ids) in list" :key="int.id">
      <div class="one" v-show="ids===current">
        <input
          type="text"
          @keyup.enter="(e) => {
             addEvent({id:int.id,val:e.target.value.trim()})

            current=false
         }
            "
        >
      </div>
      <div class="two">
        <span>{{int.name}}</span>
        <span @click="shows(ids)">+</span>
      </div>
      <div class="three" v-if="int.children.length">
        <li v-for="(eachs) in int.children" :key="eachs.id">
          <b @click="send(ids,eachs.id)"></b>
          <i>{{eachs.val}}</i>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "ItemEl",
  data() {
    return {
      types: false,
      current: ""
    };
  },
  computed: {
    ...mapGetters(["list"])
  },
  methods: {
    ...mapMutations(["addEvent"]),
    shows($index) {
      this.types = !this.types;
      this.current = $index;
    },
    send($index,$id){
        this.$emit("chooseIndex",$index)
        this.$emit("chooseId",$id)
    }
  }
};
</script>

<style>
.one {
  width: 100%;
  position: absolute;
  top: -80px;
  height: 40px;
}
.one input {
  width: 100%;
  height: 100%;
}
.two {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
}
.three {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  
}
.three li b{
    width: 5px;
    height: 5px;
    display: inline-block;
    border:1px solid #ccc;
}
</style>
