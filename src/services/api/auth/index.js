import { API_KEY } from '@env'

import api from '../api'

class _AuthApiService {
  constructor() {
    this.context = 'AuthApiService'
  }

  async userLogin({ email, password }) {
    const resp = await api.post(
      '/login',
      {
        email,
        password,
      },
      {
        headers: {
          apiKey: API_KEY,
        },
      }
    )

    return resp
  }

  async refreshToken({ refreshToken }) {
    const resp = await api.post(
      '/auth/refresh',
      {
        refreshToken,
      },
      {
        headers: {
          apiKey: API_KEY,
        },
      }
    )

    return resp
  }

  // TODO remove this request
  async home() {
    const resp = await api.get(`/home`)

    return resp
  }
}

export const AuthApiService = new _AuthApiService()
