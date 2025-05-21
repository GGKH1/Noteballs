<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Statistics</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Charecters (of all notes)</td>
                    <td>{{ storeNotes.totalNumberOfCharacters }}</td>
                </tr>
            </tbody>
        </table>
        <input 
        v-model="loveNoteballs"
        class="input"
        type="text"
        placeholder="Do you love this app?"
        v-auto-focus>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes.js';
import { vAutoFocus } from '@/directives/vAutoFocus.js';
import { useWatchCharacters } from '@/use/useWatchCharacters.js';

const storeNotes = useStoreNotes();

const loveNoteballs = ref('');

useWatchCharacters(loveNoteballs, 50);
</script>