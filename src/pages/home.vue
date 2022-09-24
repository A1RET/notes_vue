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
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    }
  },
  mounted() {
    this.$store.dispatch('getLocalNotes')
  },
  methods: {
    handleSubmit (note) {
      this.$store.dispatch('addNote', note);
    },
    handleRemove (index) {
      this.$store.dispatch('removeNote', index);
    }
  }  
}
</script>