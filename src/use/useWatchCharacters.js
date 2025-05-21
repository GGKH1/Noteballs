import { watch } from 'vue'

export function useWatchCharacters(valueToWatch, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === maxChars) {
            alert(`You have reached the maximum number of ${maxChars} characters for a note.`)
        }
    })
}