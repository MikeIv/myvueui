import authApi from '@/api/auth';
import {setItem} from '@/helpers/persistanceStorage';

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

export const mutationType = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure',
}
export const actionType = {
  register: '[auth] register',
}

const mutations = {
  [mutationType.registerStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationType.registerSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationType.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
};

const actions = {
  [actionType.register](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationType.registerStart)
      authApi.register(credentials).then((response) => {
        context.commit(mutationType.registerSuccess, response.data.user)
        setItem('accessToken', response.data.user.token)
        resolve(response.data.user)
      })
      .catch(result => {
        context.commit(mutationType.registerFailure, result.response.data.errors)
      })
    });
    // setTimeout (() => {
    //   context.commit('registerStart')
    // }, 500)
  },
};

export default {
  state,
  mutations,
  actions,
};
