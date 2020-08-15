import { API_KEY } from '@env'

import api from '../api'

class _QuestionsApiService {
  constructor() {
    this.context = 'QuestionsApiService'
  }

  async getInitialQuestions() {
    const resp = await api.get(`/preferences`)

    return resp
  }
}

export const QuestionsApiService = new _QuestionsApiService()
