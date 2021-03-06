const state = {
  gameState: 'PLAYING',
  gameStartTime: new Date()
}

const getters = {
  isGameOver: state => state.gameState === 'GAME_OVER',
  isGameWin: state => state.gameState === 'WIN',
  gameStartTime: state => state.gameStartTime
}

const mutations = {
  RESTART_GAME (state) {
    state.gameState = 'PLAYING'
    state.gameStartTime = new Date()
    this.commit('RESET_GRID')
  },
  SET_GAME_OVER_STATE (state) {
    state.gameState = 'GAME_OVER'
  },
  SET_GAME_WIN_STATE (state) {
    state.gameState = 'WIN'
  }
}

const actions = {
  gameOver ({ commit }) {
    commit('SET_GAME_OVER_STATE')
  },
  restartGame ({ commit }) {
    commit('RESTART_GAME')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
