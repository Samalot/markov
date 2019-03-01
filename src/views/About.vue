<template>

  <div class="about_container">
    <strong>1) </strong>A profile of a subreddit is created by collecting around 10,000 post titles using <a href="https://praw.readthedocs.io/en/latest/" target="_blank">PRAW</a> (Python Reddit API Wrapper).

    <div class="divider"></div>

    <strong>2) </strong> Titles are automatically rejected if they are too long or contain non-ascii characters.

    <div class="divider"></div>

    <strong>3) </strong> Titles are passed through a <a href="https://en.wikipedia.org/wiki/Truecasing" target="_blank">truecase</a> algorithm which attempts to apply the correct capitalisation to each word.

    <div class="divider"></div>

    <strong>4) </strong> Named Entity Recognition (NER) is performed on each title to extract entities such as: names, brands, locations. All entities of a certain type are interchangeable in the generared titles.

    <div class="divider"></div>

    <strong>5) </strong> A frequncy map is generated to track how often certain words occur next to each other.

    <div class="divider"></div>

    <strong>6) </strong> The frequncy maps are used to create new sentances containing words likely to be next to eachother.

    <div class="divider"></div>

    <strong>7) </strong> Random post metadata (author, comments, karma) is added for flair.

  </div>

</template>


<style scoped lang="scss">
@import "./src/assets/css/colors";

.about_container {
  display: inline-block;
  vertical-align: top;
  background-color: white;
  width: 528px;
  padding: 20px;
  border: solid 4px darken($primary, 30%);
  color: darken($primary, 30%);
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  border-radius: 10px;
}

.divider {
  display: inline-block;
  width: 100%;
}

</style>
