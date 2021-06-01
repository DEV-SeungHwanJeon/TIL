import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentRooms: [
      {
        roomId: 1,
        roomTitle: '전승환의 방입니다',
        roomPublisher: {userId: 1, userName: '전승환'},
        roomMember: [
          {userId: 1, userName: '전승환', url: 'https://cdn2.thecatapi.com/images/185.gif'},
          {userId: 2, userName: '박상락', url: 'https://cdn2.thecatapi.com/images/b2a.jpg'}, 
          {userId: 3, userName: '박진형', url: 'https://cdn2.thecatapi.com/images/em.jpg'}, 
          {userId: 4, userName: '허지혜', url: 'https://cdn2.thecatapi.com/images/81m.gif'},
          {userId: 99, userName: '으악', url: 'https://cdn2.thecatapi.com/images/81m.gif'},
        ]
      },
      {
        roomId: 2,
        roomTitle: '드루와~~',
        roomPublisher: {userId: 5, userName: '방장2'},
        roomMember: [
          {userId: 11, userName: '접속자11', url: 'https://cdn2.thecatapi.com/images/b2a.jpg'},
          {userId: 12, userName: '접속자12', url: 'https://cdn2.thecatapi.com/images/q2.jpg'}, 
          {userId: 13, userName: '접속자13', url: 'https://cdn2.thecatapi.com/images/inOYUgQlv.jpg'},
        ],
      },
      {
        roomId: 3,
        roomTitle: '너만오면 마피아 고',
        roomPublisher: {userId: 6, userName: '방장3'},
        roomMember: [
          {userId: 14, userName: '접속자14', url: 'https://cdn2.thecatapi.com/images/23UtKZntN.jpg'},
          {userId: 15, userName: '접속자15', url: 'https://cdn2.thecatapi.com/images/7v1.gif'},
          {userId: 16, userName: '접속자16', url: 'https://cdn2.thecatapi.com/images/b2a.jpg'},
          {userId: 17, userName: '접속자17', url: 'https://cdn2.thecatapi.com/images/clm.jpg'},
        ],
      },
    ],
    user: {
      userId: 1,
      userName: '전승환',
      // currentRoom: {
      //   roomId: 1,
      //   roomTitle: '전승환의 방입니다',
      //   roomPublisher: {userId: 1, userName: '전승환'},
      //   roomMember: [
      //     {userId: 1, userName: '전승환', url: 'https://cdn2.thecatapi.com/images/185.gif'},
      //     {userId: 2, userName: '박상락', url: 'https://cdn2.thecatapi.com/images/b2a.jpg'}, 
      //     {userId: 3, userName: '박진형', url: 'https://cdn2.thecatapi.com/images/em.jpg'}, 
      //     {userId: 4, userName: '허지혜', url: 'https://cdn2.thecatapi.com/images/81m.gif'},
      //   ]
      // },
    },
  },
  mutations: {
    JOIN_ROOM: function (state, room) {
      state.user.currentRoom = room
      console.log(state.user.currentRoom)
    },
    
  },
  actions: {
    joinRoom: function (context, room) {
      context.commit('JOIN_ROOM', room)
    },
  },
  modules: {
  }
})
