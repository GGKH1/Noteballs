<template>
    <nav
        class="navbar is-success"
        role="navigation"
        aria-label="main navigation"
        ref="navbarRef"> 
        <div class="container is-max-desktop px-2">
            
        
            <div class="navbar-brand">
            <div class="navbar-item is-size-4 is-family-monospace">
                Noteballs 
            </div>

        <a
          @click.prevent="showMovileNavbar = !showMovileNavbar"
          role="button"
          class="navbar-burger"
          :class="{'is-active': showMovileNavbar}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">        
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" 
        class="navbar-menu"
        :class="{'is-active': showMovileNavbar}"
        ref="navbarMenuRef"   
        >
        <div class="navbar-start">
            <button 
            v-if="storeAuth.user.id"
            @click="logout"
            class="button is-small is-info mt-3 ml-3">
                Log out {{ storeAuth.user.email }}
            </button>
        </div>
        <div class="navbar-end">
        <RouterLink
        @click="showMovileNavbar = false" 
        to="/"
        class="navbar-item"
        active-class="is-active"
        >
            Notes
        </RouterLink>
        <RouterLink
        @click="showMovileNavbar = false" 
        to="/stats"
        class="navbar-item"
        active-class="is-active"
        >
        Stats
        </RouterLink>
        </div>
    </div>
   </div>
</nav>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

const showMovileNavbar = ref(false)
const navbarRef = ref(null)

onClickOutside(navbarRef, () => {
    showMovileNavbar.value = false
})

const logout = () => {
    showMovileNavbar.value = false
    storeAuth.logoutUser()
}

</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>