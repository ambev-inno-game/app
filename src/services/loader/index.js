import EventEmitter from 'sm-event-emitter'

class _LoaderService {
  constructor() {
    this.isLoading = false
  }

  show() {
    EventEmitter.emit('GLOBAL_LOADER_SHOW')
  }

  hide() {
    EventEmitter.emit('GLOBAL_LOADER_HIDE')
  }
}

export const LoaderService = new _LoaderService()
