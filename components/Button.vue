<template>
  <div>
    <v-btn rounded color="primary" @click.prevent="clickEvent">{{ text }} </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    clickEvent: {
      type:  Function
    },
    text: {
      type: String,
      default: "",
    },
    styleType: {
      type: String,
      default: "round"
    }
  },
};
</script>
<style lang="scss">

</style>