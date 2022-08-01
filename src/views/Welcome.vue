<template>
  <div class="html-wrapper" v-html="htmlContent">
  </div>
</template>

<script>
import {marked} from "marked";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Welcome',
  data() {
    return {
      htmlContent: ''
    }
  },
  mounted() {
    this.initPage()
  },
  methods: {
    initPage() {
      this.htmlContent = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    }
  }
}
</script>

<style scoped lang="less">
.html-wrapper {
  padding: 10px 15px;
}
</style>