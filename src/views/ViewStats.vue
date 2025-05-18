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
    </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes.js';

const storeNotes = useStoreNotes();
</script>