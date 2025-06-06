import { defineStore, acceptHMRUpdate } from 'pinia'
import { db } from '@/firebase/firebase'
import { get } from '@vueuse/core'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

const notesCollectionRef = collection(db, 'notes')

export const useStoreNotes = defineStore('storeNotes', {
   state: () =>  {
    return {
        notes: []
     }
    },
    actions: {
        async getNotes(){
        onSnapshot(notesCollectionRef, (querySnapshot) => {
            let notes = []
            querySnapshot.forEach((doc) => {
                let note = {
                            id: doc.id,
                            content: doc.data().content
                        }
            notes.push(note)
            });
            this.notes = notes
          });
        },

        async addNote(newNoteContent){
            await addDoc(notesCollectionRef, {
                content: newNoteContent,
              });
        },
        async deleteNote(idToDelete){
            await deleteDoc(doc(notesCollectionRef, idToDelete));
        },
        async updateNote(id, content){
            await updateDoc(doc(notesCollectionRef, id), {
                content
              });
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

