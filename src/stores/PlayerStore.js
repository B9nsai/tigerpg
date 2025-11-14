import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
    state: () => ({
        level: 1,
        xp: 0
    }),
    getters: {
    canUse: (state) => {
      return (requiredLevel) => state.level >= requiredLevel
    }
  },
    actions: {
        gainXp(amount) {
            this.xp += amount
            if (this.xp >= this.level*100) {
                this.xp = 0
                this.level++
            }
        },
    },

})
