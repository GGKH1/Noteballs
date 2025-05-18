<template>
    <div class="notes">

        <AddEditNote
        v-model="newNote"
        ref="addEditNoteRef"
        placeholder="Add a new note here..."
        >
            <template #buttons>
                <button 
                @click="addNote"
                :disabled="!newNote"
                class="button is-link has-background-success">
                    Add New Note
                </button>
            </template>
        </AddEditNote>

        <Note
        v-for="note in storeNotes.notes"
        :key="note.id" 
        :note="note"
        />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import Note from '@/components/notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import AddEditNote from '@/components/notes/AddEditNote.vue'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''    
    addEditNoteRef.value.focusTextarea()
}
</script>