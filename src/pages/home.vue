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
        {
          title:'Test note',
          tags: ['work']
        },
        {
          title:'Test note2',
          tags: ['work', 'home']
        },
        {
          title:'Test note3',
          tags: []
        },
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