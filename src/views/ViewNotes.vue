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

        <progress 
        v-if="!storeNotes.notesLoaded"
        class="progress is-large is-success" 
        max="100"
        ></progress>

        <template
        v-else
        >
        <Note
        v-for="note in storeNotes.notes"
        :key="note.id" 
        :note="note"
        />

        <div 
        v-if="!storeNotes.notes.length"
        class="is-size-5 has-text-centered has-text-grey-light is-family-monospace py-6 mt-5"
        >
            No notes here yet...
        </div>
    </template>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters.js'


const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''    
    addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)

</script>