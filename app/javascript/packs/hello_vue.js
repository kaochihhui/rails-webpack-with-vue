import Vue from 'vue/dist/vue.esm'
import all_data from '../../../json/all.json'
import detail_item_page from '../detail_item_page.vue'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#display_item',
    components: { detail_item_page },
    data: function () {
      return {
        item_info: all_data.data,
        sold_img:"https://i.imgur.com/2nlglcD.png",
        if_all_items_hidden: false,
        if_ind_item_hidden: true,
        item_clicked:null
      }
    },
    methods: {
      get_item_id: function (id) {
        if (id) {
          this.item_clicked=this.item_info[id-1];
          this.if_all_items_hidden=true;
          this.if_ind_item_hidden=false;
        }
      },
      back_to_first_page: function () {
        if(this.if_all_items_hidden) this.if_all_items_hidden=false;
        if(!this.if_ind_item_hidden) this.if_ind_item_hidden=true;
      }
    },

  })
})
