<template>
        <div 
        class="card mb-4"
        >
        <div class="card-content has-background-grey-lighter">
            <div class="content has-text-dark">
               {{ note.content }}
            
            <div 
            class="columns is-mobile has-text-gray-dark mt-2">
            <small class="column has-text-left">{{ dateFormated }}</small>
            <small class="column has-text-right">{{ characterLength }}</small>
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
import { useDateFormat} from '@vueuse/core'
import { useStoreNotes } from '@/stores/storeNotes'
import  ModalDeleteNote  from '@/components/notes/ModalDeleteNote.vue'

const storeNotes = useStoreNotes()

const dateFormated = computed(() => {
    let date = new Date(parseInt(props.note.createdAt))
    return useDateFormat(date, 'DD-MM-YYYY HH:mm:ss')
})

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