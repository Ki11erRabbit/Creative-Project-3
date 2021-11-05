<template>
  <img v-bind:src="src" v-on:click="edit" />
</template>

<script>
const { Pixo } = window;

export default {
  name: 'PixoImage',
  props: {
    src: String,
  },
  methods: {
    edit() {
      new Pixo.Bridge({
         type: 'modal',
         apikey: '1a87o2suvtb4', // put your API key here!
         onSave: img => this.$emit('edited', img.toDataURL()),
      }).edit(this.$props.src);
    }
  }
}
</script>

<style>

</style>