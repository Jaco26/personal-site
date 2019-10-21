export default class GameBase {
  listeners = {}
  animationFrameHandle = null

  constructor(animationRate = 0) {
    this.animationRate = animationRate
  }

  on(event, listener) {
    if (this.listeners[event]) {
      this.off(event)
    }
    this.listeners[event] = listener
  }

  off(event) {
    this.listeners[event] = null
  }

  emit(type, payload) {
    if (this.listeners[type]) {
      this.listeners[type](payload)
    } else {
      console.error(`No event of type "${type}" registered`)
    }     
  }

  pause() {
    cancelAnimationFrame(this.animationFrameHandle)
  }

  run(callback) {
    let mainLoop
    if (this.animationRate) {
      let _rateCounter = this.animationRate
      mainLoop = () => {
        _rateCounter -= 1
        if (_rateCounter === 0) {
          callback()
          _rateCounter = this.animationRate
        }
        this.animationFrameHandle = requestAnimationFrame(mainLoop)
      }
    } else {
      mainLoop = () => {
        callback()
        this.animationFrameHandle = requestAnimationFrame(mainLoop)
      }
    }
    mainLoop()
  }

}