<template>
  <div id="detail_item_page">
    <div class="title_section">
      <img class="back_icon" :src="`${back_icon}`" alt="" v-on:click="$emit('back_to_first_page')">
      <span class="item_title">{{ item_clicked.name }}</span>
    </div>

    <div class="grid_img">
      <img class="item_img" :src="`${item_clicked.image}`" alt="">
      <img v-if="item_clicked.isSoldOut" class="sold_icon" :src="`${sold_img}`" alt="">
    </div>

    <div class="item_detail">
      <p class="item_name_sub">{{ item_clicked.name }}</p>
      <div class="like_and_comment">
        <div class="gray_bg like_count">♡ {{ item_clicked.like_count }}</div>
        <div class="gray_bg comment_section">
          <img class="comment_icon" :src="`${comment_icon}`" alt="">
          <span v-if="item_clicked.comment_count >=0">{{ item_clicked.comment_count }}</span>
          <span v-if="item_clicked.cot_count >=0">{{ item_clicked.cot_count }}</span>
        </div>
      </div>
      <div class="desc_section">
        <div class="desc_title"><p>商品の説明</p></div>
        <p>{{ item_clicked.description }}</p>
      </div>
    </div>

    <div class="price_at_bottom">
      <div class="price_tag">
        ‎¥{{ item_clicked.price }}
        <span>{{ item_clicked.shippingFee }}</span>
        <div class="buy_button">購入手続きへ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['item_clicked','if_ind_item_hidden','if_all_items_hidden'],
  data: function () {
    return {
      sold_img:"https://i.imgur.com/2nlglcD.png",
      back_icon:"https://i.imgur.com/RiezlGZ.png",
      comment_icon:"https://i.imgur.com/n0oLHp1.png"
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // console.log(this.item_clicked);
    })
  }
}
</script>
