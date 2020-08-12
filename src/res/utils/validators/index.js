import { STRINGS } from '~/res/strings'

export function isRequired(text = '') {
  let message = ''

  if (!text.trim().replace(' ', '')) {
    message = STRINGS.REQUIRED_FIELD
  }

  return message
}

export function isValidEmail(text = '') {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let message = ''

  if (!emailRegex.test(String(text).toLowerCase())) {
    message = 'E-mail inválido'
  }

  return message
}
