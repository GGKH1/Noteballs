<template>
            <div class="car has-background-success-dark p-4 mb-5">
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea 
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea" 
                    ref="textareaRef"
                    placeholder="Add a new note"></textarea>
                </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="buttons"></slot>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})
</script>