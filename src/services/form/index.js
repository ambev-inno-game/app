export class FormService {
  constructor() {
    this.mappedInputRefs = []
  }

  saveInputRef(ref, name) {
    this.mappedInputRefs.push({ ref, name })

    return ref
  }

  setFocus(name) {
    const { ref = null } = this.mappedInputRefs.find(
      (mappedRef) => mappedRef.name === name
    )

    if (ref) {
      ref.focus()
    }
  }
}
