<template>

<div class="auth">
    <div class="tabs is-centered">
        <ul>
            <li 
            :class="{ 'is-active': !register }">
                <a @click.prevent="register = false">
                    Login
                </a>
            </li>
            <li 
            :class="{ 'is-active': register }">
                <a @click.prevent="register = true">
                    Sign up
                </a>
            </li>
        </ul>
    </div>

    <div class="card auth-form">
        <div class="card-content">
            <div class="tittle has-text-centered is-size-3">
                {{ formTitle }}
            </div>

            <form 
            @submit.prevent="onSubmit"
            >
                <div class="field">
                <label class="label">Email</label>
                    <div class="control">
                        <input 
                        v-model="credentials.email"
                        class="input" 
                        type="email" 
                        placeholder="e.g. mail@example.com"
                        >
                    </div>
                </div>

                <div class="field">
                <label class="label">Password</label>
                    <div class="control">
                        <input 
                        v-model="credentials.password" 
                        class="input" 
                        type="password" 
                        placeholder="Enter your password"
                        >
                    </div>
                </div>

                <div class="field is-grouped is-grouped-right">
                    <p class="control">
                        <button class="button is-primary">
                            {{ formTitle }}
                        </button>
                    </p>
                </div>
            </form>

        </div>
    </div>

</div>

</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

const register = ref(false);

const formTitle = computed(() => {
    return register.value ? 'Sign up' : 'Login';
});

const credentials = reactive({
    email: '',
    password: ''
});

const onSubmit = () => {
    if (!credentials.email || !credentials.password) {
        alert('Please fill in all fields.');
        return;
    }
    else {
        if (register.value) {
            storeAuth.registerUser(credentials);
        } else {
            console.log('Logging in user:', credentials);
        }
    }
};
</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>