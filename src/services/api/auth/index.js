import { API_KEY } from '@env'

import api from '../api'

class _AuthApiService {
  async useLogin({ email, password, apiKey }) {
    const resp = await api.post('/login', {
      email,
      password,
      apiKey,
    })

    return resp
  }

  async refreshToken({ refreshToken }) {
    const resp = await api.post('/auth/refresh', {
      refreshToken,
      apiKey: API_KEY,
    })

    return resp
  }

  // TODO remove this request
  async home() {
    const resp = await api.get(`/home`)

    return resp
  }
}

export const AuthApiService = new _AuthApiService()
