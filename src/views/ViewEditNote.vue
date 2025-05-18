<template>
    <div class="edit-notes">
        <AddEditNote
        v-model="noteContent"
        ref="addEditNoteRef"
        bgColor="link"
        placeholder="Edit your note here..."
        label="Edit Note"
        >
            <template #buttons>
                <button 
                @click="$router.back()"
                class="button is-link is-light mr-2"
                >
                Cancel
                </button>
                <button 
                class="button is-link has-background-link"
                :disabled="!noteContent">
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { ref } from 'vue'

const noteContent = ref('')
</script>