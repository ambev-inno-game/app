import EventEmitter from 'sm-event-emitter'

class _ToastService {
  constructor() {
    this.context = 'ToastService'
  }

  show({ message }) {
    EventEmitter.emit('GLOBAL_TOAST_SHOW', { message })
  }
}

export const ToastService = new _ToastService()
