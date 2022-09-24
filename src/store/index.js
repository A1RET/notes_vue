import { createStore } from "vuex";

export const store = createStore({
  state: {
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
    ],
    formTags: ['home','work','travel'],
    activeTags: []
  },
  mutations: {
    setActiveTags(state, items) {
      state.activeTags = items;
    },
    setNotes(state, items) {
      state.notes = items;
    }
  },
  actions: {
    handleActiveTag({commit}, item) {
      const activeTags = this.getters.getActiveTags;
      const index = activeTags.indexOf(item);
        
      if (index >= 0) {
        activeTags.splice(index, 1);
      } else {
        activeTags.push(item);
      }

      commit('setActiveTags', activeTags);
    },
    clearActiveTags({commit}) {
      commit('setActiveTags', []);
    },
    getLocalNotes({commit}) {
      const localNotes = localStorage.getItem('notes');

      if (localNotes) {
        commit('setNotes', JSON.parse(localNotes));
      }
    },
    updateNotes({commit}, notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
      commit('setNotes', notes);
    },
    addNote({dispatch}, note) {
      const notes = this.getters.getNotes;
      notes.push(note);

      dispatch('updateNotes', notes)
    },
    removeNote({dispatch}, index) {
      const notes = this.getters.getNotes;
      notes.splice(index, 1);

      dispatch('updateNotes', notes)
    },
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
    getFormTags(state) {
      return state.formTags
    },
    getActiveTags(state) {
      return state.activeTags
    }
  }
})