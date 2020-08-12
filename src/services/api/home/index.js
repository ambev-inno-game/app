import api from '../api'

class _HomeApiService {
  constructor() {
    this.context = 'HomeApiService'
  }

  async getHomePage() {
    const resp = await api.get(`/product/11`)

    return resp
  }
}

export const HomeApiService = new _HomeApiService()
