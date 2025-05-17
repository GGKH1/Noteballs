<template>
    <div class="notes">

        <AddEditNote
        v-model="newNote"
        ref="addEditNoteRef"
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

        <!-- <div class="car has-background-success-dark p-4 mb-5">
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
        </div> -->

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