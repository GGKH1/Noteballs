import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '@/firebase/firebase'

export const useStoreAuth = defineStore('storeAuth', {
   state: () =>  {
    return {
        
     }
    },
    actions: {
       registerUser(credentials) {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            const user = userCredential.user;
            log('User registered successfully:', user);
        })
        .catch((error) => {
            log('Error registering user:', error.message);
        });
     },
         logoutUser() {
          signOut(auth).then(() => {
                console.log('User signed out successfully');
          }).catch((error) => {
                console.log('Error signing out user:', error.message);
          });
      }
    }
})

export const useAuth = defineStore('auth', {
  })



