import EventEmitter from 'sm-event-emitter'

class _ToastService {
  show({ message }) {
    EventEmitter.emit('GLOBAL_TOAST_SHOW', { message })
  }
}

export const ToastService = new _ToastService()
