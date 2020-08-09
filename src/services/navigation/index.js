import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native'

class _NavigationService {
  constructor() {
    this.navigator = null
  }

  setNavigator({ navigator }) {
    this.navigator = navigator
  }

  navigate({ screen, key, params, stack = null }) {
    if (stack) {
      this.navigator.navigate(stack.NAME, { screen: screen.NAME, key, params })
    } else {
      this.navigator.dispatch(
        CommonActions.navigate({ name: screen.NAME, key, params })
      )
    }
  }

  pushReplacement({ screen, params }) {
    this.navigator.dispatch(
      StackActions.replace(screen.NAME, {
        ...params,
      })
    )
  }

  push({ screen, params }) {
    this.navigator.dispatch(
      StackActions.push(screen.NAME, {
        ...params,
      })
    )
  }

  openDrawer() {
    this.navigator.dispatch(DrawerActions.openDrawer())
  }

  pop({ quantity = 1 } = {}) {
    this.navigator.dispatch(StackActions.pop(quantity))
  }

  resetStack() {
    this.navigator.dispatch(StackActions.popToTop())
  }
}

export const NavigationService = new _NavigationService()
