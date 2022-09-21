<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes"/>
</template>


<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: {
    Form,
    List
  },
  data() {
    return {
      notes: [
        'task 1',
        'task 2',
        'task 3'
      ]
    }
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    getNotes () {
      const localNotes = localStorage.getItem('notes');

      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit (note) {
      this.notes.push(note);
    },
    handleRemove (index) {
      this.notes.splice(index, 1);
    }
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true
    }    
  }
  
}
</script>