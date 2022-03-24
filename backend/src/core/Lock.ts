import { EventEmitter } from 'events'

class Lock {
  private _locked
  private readonly _ee

  constructor() {
    this._locked = false
    this._ee = new EventEmitter()
  }

  public async acquire(): Promise<void> {
    return await new Promise((resolve) => {
      // If nobody has the lock, take it and resolve immediately
      if (!this._locked) {
        // Safe because JS doesn't interrupt you on synchronous operations,
        // so no need for compare-and-swap or anything like that.
        this._locked = true
        return resolve()
      }

      // Otherwise, wait until somebody releases the lock and try again
      const tryAcquire: () => void = () => {
        if (!this._locked) {
          this._locked = true
          this._ee.removeListener('release', tryAcquire)
          return resolve()
        }
      }
      this._ee.on('release', tryAcquire)
    })
  }

  public release(): void {
    // Release the lock immediately
    this._locked = false
    setImmediate(() => this._ee.emit('release'))
  }
}

export default Lock
