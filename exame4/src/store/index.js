import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    strict: false,
    state: {
        list: [{
            "id": 0,
            "name": "很重要-很紧急",
            "children": []
        }, {
            "id": 1,
            "name": "重要-不紧急",
            "children": []
        }, {
            "id": 2,
            "name": "不重要-紧急",
            "children": []
        }, {
            "id": 3,
            "name": "不重要-不紧急",
            "children": []
        }]
    },
    mutations: {
        addEvent(state, opt) {
            let datas = state.list.find(item => item.id == opt.id)
            datas.children.push({
                val: opt.val,
                id: datas.children.length
            })
            console.log(datas)
        },
        changeEvent(state, opt) {
            let olddata = state.list.find(item => item.id == opt.big)
            let newdata = state.list.find(item => item.id == opt.sml)
            let items = olddata.children.find(item => item.id == opt.id)
            newdata.children.push({ val: items.val, id: newdata.children.length })
            olddata.children.splice(opt.id, 1)
        }
    },
    getters: {
        list: state => state.list
    }
})