<template>
  <v-footer id="footer" color="rgb(255,255,255,0)" app inset
    ><v-spacer></v-spacer
    ><span
      ><v-icon color="#c7a275" class="mr-1">$envelope</v-icon> Potrzebujesz
      pomocy? <a href=""> tech@homeden.pl</a></span
    ></v-footer
  >
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
span {
  font-size: 14px;
  line-height: 60px;
  color: #c7a275;
}
span a {
  text-decoration: none;
  color: #ee5d2c;
}
#footer {
  position: absolute !important;
}
</style>
