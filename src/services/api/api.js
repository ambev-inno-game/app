import axios from 'axios'

import { API_BASE_URL } from '@env'

import { HTTP_STATUS } from '~/res/constants'

const api = axios.create({
  baseURL: API_BASE_URL,
})

api.interceptors.response.use(
  (resp) => {
    return Promise.resolve(resp.data)
  },
  ({ response, config }) => {
    const { status } = response

    // TODO verify if 403 is not from refresh token try
    if (status === HTTP_STATUS.FORBIDDEN) {
      console.log('REFRESH')
    }

    return Promise.reject(response)
  }
)

export default api
