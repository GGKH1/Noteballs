<template>
    <div class="notes">

        <div class="car has-background-success-dark p-4 mb-5">
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea 
                    v-model="newNote"
                    class="textarea" 
                    ref="newNoteRef"
                    placeholder="Add a new note"></textarea>
                </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button 
                    @click="addNote"
                    :disabled="!newNote"
                    class="button is-link has-background-success">
                        Add New Note
                    </button>
                </div>
            </div>
        </div>

        <Note
        v-for="note in storeNotes.notes"
        :key="note.id" 
        :note="note"
        @delete-note="deleteNote"
        />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Note from '@/components/notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const storeNotes = useStoreNotes()

const newNote = ref('')
const newNoteRef = ref(null)



const addNote = () => {
    if (!newNote.value) return
    let note = {
        id: uuidv4(),
        content: newNote.value 
    }

    notes.value.unshift(note)
    newNote.value = ''    

    newNoteRef.value.focus()
}

const deleteNote = (id) => {
    notes.value = notes.value.filter(note => note.id !== id)
}
</script>