import { createRouter, createWebHashHistory } from 'vue-router'

import { useStoreAuth } from '@/stores/storeAuth'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewAuth from '@/views/ViewAuth.vue'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: ViewNotes
    },
    {
        path: '/editNote/:noteId',
        name: 'edit-note',
        component: ViewEditNote
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    },
    {
        path: '/auth',
        name: 'auth',
        component: ViewAuth
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Navigation guard to check if the user is authenticated
router.beforeEach(async (to, from) => {
   const storeAuth = useStoreAuth()
   if (!storeAuth.user.id && to.name !== 'auth') {
       // If the user is not authenticated and trying to access a protected route, redirect to auth
       return { name: 'auth' }
   }
    if (storeAuth.user.id && to.name === 'auth') {
         // If the user is authenticated and trying to access auth, redirect to notes
         return false
    }
  })

export default router