<template>
    <div class="modal is-active p-2">
            <div class="modal-background"></div>
                <div 
                ref="modalCardRef"
                class="modal-card">

                    <header class="modal-card-head">
                    <p class="modal-card-title">Delete Note?</p>
                    <button
                      @click="closeModal"  
                      class="delete"
                      aria-label="close">
                    </button>
                    </header>

                    <section class="modal-card-body has-text-white">
                        Are you sure you want to delete this note? This action cannot be undone.
                    </section>

                    <footer class="modal-card-foot is-justify-content-flex-end">
                    <div class="buttons">
                        <button class="button"
                        @click="closeModal">
                        Cancel
                    </button>

                        <button 
                        @click="storeNotes.deleteNote(props.noteId)"
                        class="button is-danger">
                            Delete
                        </button>

                    </div>
            </footer>

        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, onMounted, onUnmounted } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: false
    },
    noteId: {
        type: String,
        required: true
    }
})

const storeNotes = useStoreNotes()

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
    emit('update:modelValue', false)
}

const modalCardRef = ref(false)

onClickOutside(modalCardRef, closeModal)

const handleKeyUp = (event) => {
    if (event.key === 'Escape') {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyUp)
})

</script>