<template>
  <div class="note-form-wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea v-model="value" placeholder="Type your note" required></textarea>
      <TagsList @onItemClick="handleTagClick" :items="tags" :activeTags="activeTags"/>
      <button class="btn btnPrimary" type="submit">Add new Note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
  components: {
    TagsList
  },
  data () {
    return {
      value: '',
      tags: ['home','work','travel'],
      activeTags: []
    }
  },
  methods: {
    onSubmit() {
      const newNote = {
        title: this.value,
        tags: this.activeTags
      }

      this.$emit('onSubmit', newNote);
      this.value = '';
      this.activeTags = [];
    },
    handleTagClick(item) {
      const index = this.activeTags.indexOf(item);
        
      if (index >= 0) {
        this.activeTags.splice(index, 1);
      } else {
        this.activeTags.push(item);
      }
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

  textarea {
    margin-bottom: 0;
  }
}
</style>