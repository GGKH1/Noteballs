import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
   state: () =>  {
    return {
        notes: [
            {
                id: uuidv4(),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius doloribus vero saepe dolorem veritatis rem eaque obcaecati reprehenderit, voluptatem repellat voluptatum iusto porro odit quae qui voluptates similique cupiditate!'
            },
            {
                id: uuidv4(),
                content: 'Just a text note'
            },
            {
                id: uuidv4(),
                content: 'Third note'
            }
        ]
     }
    }
})