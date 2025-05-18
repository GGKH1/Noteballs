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
                @click="handleSaveClicked"
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
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

const noteContent = ref('')
const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.noteId, noteContent.value)
    router.push('/')
}

noteContent.value = storeNotes.getNoteContent(route.params.noteId)

</script>