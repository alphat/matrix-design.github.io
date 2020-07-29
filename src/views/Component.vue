<template>
  <main></main>
</template>
<script>
export default {
  name: "Document",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.path);
  },
  methods: {},
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>
