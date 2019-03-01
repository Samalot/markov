<template>
  <div>

    {{ subreddits }}

    <div><reddit-post :post="post"/></div>
    <div><reddit-post :post="post"/></div>
    <div><reddit-post :post="post"/></div>
    <div><reddit-post :post="post"/></div>

  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Subreddits from '@/components/subreddits.json'


export default {
  components: { "reddit-post": Post },

  data () { return {
    subreddits: Subreddits,

    show_select: true,

    post: {
      title: 'lol, Trump is a poop',
      thumbnail: 2,
      karma: -456,
      time: 10,
      comments: 9345,
      user: 'Petealot',
      gilded: true
    }

  } },


}
</script>
