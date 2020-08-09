import { STRINGS } from '~/res/strings'

export function isRequired(text = '') {
  let message = ''

  if (!text.trim().replace(' ', '')) {
    message = STRINGS.REQUIRED_FIELD
  }

  return message
}
