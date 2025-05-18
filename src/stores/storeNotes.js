import { defineStore, acceptHMRUpdate } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useStoreNotes = defineStore('storeNotes', {
   state: () =>  {
    return {
        notes: [
            {
                id: uuidv4(),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius doloribus vero saepe dolorem veritatis rem eaque obcaecati reprehenderit, voluptatem repellat voluptatum iusto porro odit quae qui voluptates similique cupiditate!'
            },
            {
                id: uuidv4(),
                content: 'Just a text note'
            },
            {
                id: uuidv4(),
                content: 'Third note'
            }
        ]
     }
    },
    actions: {
        addNote(newNoteContent){
            let note = {
                id: uuidv4(),
                content: newNoteContent 
            }

            this.notes.unshift(note)
        },
        deleteNote(idToDelete){
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        },
        updateNote(id, content){
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => note.id === id )[0].content
              }
        },
    totalNotesCount: (state) => {
        return state.notes.length
    },
    totalNumberOfCharacters: (state) => {
        let total = 0
        state.notes.forEach(note => {
            total += note.content.length
        })
        return total
    }
  }
})

export const useAuth = defineStore('auth', {
  })

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
  }

