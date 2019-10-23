export default class GameBase {
  listeners = {}
  animationFrameHandle = null
  cachedRunCallback = null
  _running = false

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

  stop() {
    this._running = false;
    cancelAnimationFrame(this.animationFrameHandle)
  }


  resume() {
    if (!this._running && this.cachedRunCallback) {
      this.run(this.cachedRunCallback)
    }
  }

  run(callback) {
    this._running = true
    this.cachedRunCallback = callback.bind(this)
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