<template>
  <div>

    <div class="search_container noselect" v-if="true">
      <div class="search_info"> Name generates Reddit post titles using Markov chains! </div>
      <div class="search_info"> Select up to <strong>3 subreddits</strong> to by influenced by. </div>

      <div v-if="selected_subreddits.length > 0">
        <div class="search_divider"></div>
        <div v-for="(subreddit, index) in selected_subreddits" :key="'subreddit-'+index"
             class="search_selected_container"
             @click="remove_subreddit(index)">
          <span class="search_selected_id"> {{ '#'+(index+1) }}  </span>
          <span class="search_selected_name"> {{ subreddit }} </span>
          <div class="search_selected_delete"> <i class="fas fa-times"></i> </div>
        </div>
      </div>

      <div class="search_divider"></div>

      <div>
        <div class="search_filter">
          Filter:
          <div class="search_filter_select">
            <b-select v-model="selected_category" size="is-small" @input="filter_categories">
              <option v-for="(category, index) in categories" :value="category" :key="'category-'+index"> {{ category }} </option>
            </b-select>
          </div>
        </div>

        <div>
          <div class="search_subreddits_container">
            <div v-for="(subreddit, index) in filtered_subreddits">
              <div class="search_subreddit" @click="add_subreddit(subreddit)"> {{ subreddit }} </div>
            </div>
          </div>
        </div>

        <div class="search_divider" v-if="selected_subreddits.length > 0"></div>

      </div>

      <div v-if="selected_subreddits.length > 0">
        <div class="search_generate"> Generate </div>
      </div>

    </div>


    <div v-for="(result, index) in results" :key="'result-'+index">
      <reddit-post :post="result"/>
    </div>


  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Subreddits from '@/components/subreddits.json'
let random = require('random-name'),
    randomWords = require('random-words');


export default {
  name: "Home",
  components: { "reddit-post": Post },

  data () { return {
    subreddits: Subreddits,
    show_select: true,
    filtered_subreddits: [],
    categories: [],
    selected_category: "All",
    selected_subreddits: [],
    results: []
  } },

  methods: {

    remove_subreddit (index) {
      this.selected_subreddits.splice(index, 1);
    },

    add_subreddit (subreddit) {
      if (this.selected_subreddits.length < 3 & !this.selected_subreddits.some(s => s === subreddit) ) {
        this.selected_subreddits.push(subreddit);
      }
    },

    filter_categories () {
      this.filtered_subreddits = [];
      this.subreddits.forEach( s => {
        if ( this.selected_category === "All" || s[1].some( c => c === this.selected_category ) ) { this.filtered_subreddits.push(s[0]) }
      });
    },

    generate_username () {
      let word = randomWords()
      return random.first() + "_" + word.charAt(0).toUpperCase() + word.slice(1) + "_" + Math.floor(Math.random() * (1000 - 1) + 1);
    },

    assign_meta (post) {
      return {
        title: post,
        thumbnail: Math.floor(Math.random() * (4)),
        karma: Math.floor(Math.random() * (9000 - -9000) + -9000),
        time: Math.floor(Math.random() * (20 - 1) + 1),
        comments: Math.floor(Math.random() * (1000 - 1) + 1),
        user: this.generate_username(),
        gilded: Math.random() * (100) < 10
      }
    }

  },

  created () {
    let categories_set = new Set([]);
    this.subreddits.forEach( s => {
      this.filtered_subreddits.push(s[0]);
      s[1].forEach( c => { categories_set.add(c) } );
    });
    this.categories = Array.from(categories_set);
    this.categories.sort();
    this.categories.unshift("All");

    this.results.push(this.assign_meta("All user has more realistic than this major case will sjw!"));
    this.results.push(this.assign_meta("All user has more realistic than this major case will sjw!"));
    this.results.push(this.assign_meta("All user has more realistic than this major case will sjw!"));
    this.results.push(this.assign_meta("All user has more realistic than this major case will sjw!"));
  }


}
</script>


<style scoped lang="scss">
@import "./src/assets/css/colors";

.search_container {
  display: inline-block;
  vertical-align: top;
  background-color: white;
  width: 528px;
  padding: 10px 0 10px 0;
  border: solid 4px darken($primary, 30%);
  color: darken($primary, 30%);
  box-sizing: border-box;
  font-size: 0;
  border-radius: 10px;
}

.search_selected_container {
  display: inline-block;
  vertical-align: top;
  height: 21px;
  line-height: 14px;
  margin: 0 25px 0 0;
  padding: 2px 10px 2px 7px;
  position: relative;
  background-color: darken($primary, 20%);
  color: lighten($primary, 80%);
  border: solid 2px darken($primary, 30%);
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
  font-size: 11px;
  text-align: left;
  position: relative;
}

.search_info {
  font-size: 16px;
  margin-top: 5px;
}

.search_selected_delete {
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 21px;
  background-color: darken($primary, 30%);
  position: absolute;
  top: -2px;
  right: -20px;
  text-align: center;
  line-height: 21px;
  box-sizing: border-box;
  border-radius: 0 5px 5px 0;

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
}

.search_selected_name {
  font-weight: bold;
  margin-left: 5px;
}

.search_generate {
  display: inline-block;
  vertical-align: top;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 20px;
  background-color: darken($primary, 30%);
  color: lighten($primary, 80%);
  border: solid 2px darken($primary, 30%);
  border-radius: 5px;

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
}

.search_divider {
  display: inline-block;
  vertical-align: top;
  width: 95%;
  height: 2px;
  background-color: lighten($primary, 20%);
  margin: 10px 0 10px 0;
}

.search_filter {
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
  height: 27px;
  line-height: 27px;
  margin-bottom: 10px;
}

.search_filter_select {
  display: inline-block;
  vertical-align: top;
}

.search_subreddits_container {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  font-size: 16px;
  background-color: lighten($primary, 20%);
  border: solid 2px darken($primary, 30%);
  border-radius: 5px;
  max-height: 400px;
  overflow-y: scroll;
  padding: 5px;
}

.search_subreddit {
  display: inline-block;
  vertical-align: top;
  background-color: darken($primary, 30%);
  color: lighten($primary, 80%);
  border: solid 2px darken($primary, 30%);
  padding: 2px 5px 2px 5px;
  margin: 2px;
  width: 200px;
  border-radius: 5px;
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
}


</style>
