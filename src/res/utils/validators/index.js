import { STRINGS } from '~/res'

export function isRequired(text = '') {
  let message = ''

  if (!text.trim().replace(' ', '')) {
    message = STRINGS.REQUIRED_FIELD
  }

  return message
}
