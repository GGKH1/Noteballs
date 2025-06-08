import { defineStore, acceptHMRUpdate } from 'pinia'
import { db } from '@/firebase/firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, orderBy, query } from "firebase/firestore";

const notesCollectionRef = collection(db, 'notes')

const notesCollectionQuery = query(notesCollectionRef, orderBy('createdAt', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
   state: () =>  {
    return {
        notes: [],
        notesLoaded: false
     }
    },
    actions: {
        async getNotes(){

        this.notesLoaded = false

        onSnapshot(notesCollectionQuery, (querySnapshot) => {
            let notes = []
            querySnapshot.forEach((doc) => {
                let note = {
                            id: doc.id,
                            content: doc.data().content,
                            createdAt: doc.data().createdAt
                        }
            notes.push(note)
            });
                this.notes = notes
                this.notesLoaded = true
          });
        },

        async addNote(newNoteContent){
            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                createdAt: new Date().getTime()
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

