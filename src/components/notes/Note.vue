<template>
        <div 
        class="card mb-4"
        >
        <div class="card-content has-background-grey-lighter">
            <div class="content has-text-dark">
               {{ note.content }}
            
            <div 
            class="has-text-right has-text-gray-dark mt-2">
            <small>{{ characterLength }}</small>
          </div>
         </div>
        </div>
        <footer class="card-footer has-background-grey-lighter"> 
            <RouterLink
              :to="`/editNote/${ note.id }`"
              class="card-footer-item">
              Edit
            </RouterLink>            
            <a
                @click="modals.deleteNote = true"
                href="#"
                class="card-footer-item">
                Delete
            </a>        
        </footer>
        <ModalDeleteNote 
        v-if="modals.deleteNote"
        v-model="modals.deleteNote"
        :noteId="note.id"/>
        </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import  ModalDeleteNote  from '@/components/notes/ModalDeleteNote.vue'

const storeNotes = useStoreNotes()

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const characterLength = computed(() => {
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character'
    return `${ length } ${description}`
})

const modals = reactive({
    deleteNote: false
})

</script>