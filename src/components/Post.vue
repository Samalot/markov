<template>
  <div class="post_container">

    <div class="score noselect">
      <div class="upvote"></div>
      <div class="karma"> {{ post.karma }} </div>
      <div class="downvote"></div>
    </div>

    <div class="thumbnail" :style="{'background-position': '0px -'+thum_y[post.thumbnail]+'px'}"></div>

    <div class="text">
      <div class="post_title"> {{ post.title }} </div>
      <div class="post_submit noselect"> {{ "submitted "+post.time+" hours ago by "+post.user }} <div class="gilded" v-if="post.gilded"></div> </div>
      <div class="post_extra noselect" :style="{'margin-top': (post.gilded ? 0 : 2)+'px'}"> {{ post.comments+" comments " }} <span class="copy"> copy </span> </div>
    </div>


  </div>
</template>


<script>
export default {
  props: ["post"],

  data () { return {
    thum_y: ['1267', '1211', '1155', '1099', '1043']
  } },

}
</script>


<style scoped lang="scss">
@import "./src/assets/css/colors";

.post_container {
  display: inline-block;
  vertical-align: top;
  background-color: white;
  min-width: 540px;
  height: 70px;
  text-align: left;
  margin: 5px;
  padding: 4px 10px;
  border: solid 4px darken($primary, 30%);
  border-radius: 10px;
}

.score {
  position: relative;
  display: inline-block;
  vertical-align: top;
  height: 100%;
  text-align: center;
}

.upvote {
  display: inline-block;
  vertical-align: top;
  position: absolute;
  top: 2px;
  width: 15px;
  margin: auto;
  left: 0;
  right: 0;
  background-image: url("../assets/sprite.png");
  background-position: 0px -1676px;
  background-repeat: no-repeat;
  height: 15px;
}

.downvote {
  display: inline-block;
  vertical-align: top;
  position: absolute;
  bottom: 2px;
  width: 15px;
  margin: auto;
  left: 0;
  right: 0;
  background-image: url("../assets/sprite.png");
  background-position: -86px -1653px;
  background-repeat: no-repeat;
  height: 15px;
}

.karma {
  display: inline-block;
  vertical-align: top;
  font: normal x-small verdana,arial,helvetica,sans-serif;
  font-weight: bold;
  font-size: small;
  color: #c6c6c6;
  margin-top: 19px;
}

.thumbnail {
  display: inline-block;
  vertical-align: top;
  width: 70px;
  background-image: url("../assets/sprite.png");
  background-repeat: no-repeat;
  height: 50px;
  margin-top: 2px;
}

.text {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  font: verdana,arial,helvetica,sans-serif;
}

.post_title {
  color: #0000ff;
  font-size: medium;
}

.post_submit {
  color: #888;
  font-size: x-small;
}

.post_extra {
  color: #888;
  font-weight: bold;
  padding: 0 1px;
  font-size: x-small;
}

.copy {
  color: #a79128;
  margin-left: 4px;

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
}

.gilded {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  background-image: url("../assets/sprite.png");
  background-position: -127px -1368px;
  background-repeat: no-repeat;
  height: 15px;
  margin-top: -2px;
}

</style>
