<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea v-model="value" placeholder="Type your note" required></textarea>
      <button class="btn btnPrimary" type="submit">Add new Note</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value);
      this.value = ''
    }
  }
}
</script>

<style lang="scss">
.note-form-wrapper {
  max-width: 600px;
  margin: 0 auto;
}
.note-form {
  display: flex;
  flex-direction: column;
}
</style>