import EventEmitter = require('eventemitter3');

export const AudioStatus = {
  WAIT_PLAY: 1,
  CALL_PLAY: 2,
  PLAYING: 3,
  PAUSE: 4,
};

export const EventMap = {
  STATUS_CHANGE: 'statusChange',
  CALL_PLAY: 'callPlay',
  PLAYED: 'played',
  PAUSE: 'pause',
  ERROR: 'error',
  TIME_UPDATE: 'timeupdate',
  ENDED: 'ended',
};

class Player {
  get audioStatus() {
    return this.sAudioStatus;
  }

  set audioStatus(val) {
    this.sAudioStatus = val;
    this.eventBus.emit(EventMap.STATUS_CHANGE, val);
  }

  public audioRef = new Audio();

  private sAudioStatus = AudioStatus.WAIT_PLAY;

  private eventBus = new EventEmitter();

  private lockP: null | Promise<any>;

  constructor() {
    this.init();
  }

  public init() {
    this.audioRef.addEventListener('ended', this.handlePlayEnded);
    this.audioRef.addEventListener('timeupdate', this.handleTimeUpdate);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  public handleVisibilityChange = () => {
    if (document.hidden) {
      this.pause();
    } else {
      // 页面呼出
    }
  };

  public async play() {
    // tslint:disable-next-line:no-unused-expression
    this.lockP && (await this.lockP);
    if (this.audioStatus === AudioStatus.PLAYING) {
      return;
    }
    try {
      this.audioStatus = AudioStatus.CALL_PLAY;
      this.eventBus.emit(EventMap.CALL_PLAY);
      this.lockP = this.audioRef.play();
      // tslint:disable-next-line:no-unused-expression
      this.lockP instanceof Promise && (await this.lockP);
      this.eventBus.emit(EventMap.PLAYED);
      this.audioStatus = AudioStatus.PLAYING;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      this.eventBus.emit(EventMap.ERROR, error);
    } finally {
      this.lockP = null;
    }
  }

  public async pause() {
    // tslint:disable-next-line:no-unused-expression
    this.lockP && (await this.lockP);
    if (this.audioStatus !== AudioStatus.PLAYING) {
      return;
    }
    try {
      this.audioRef.pause();
      this.eventBus.emit(EventMap.PAUSE);
      this.audioStatus = AudioStatus.PAUSE;
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      this.eventBus.emit(EventMap.ERROR, error);
    } finally {
      this.lockP = null;
    }
  }

  public handlePlayEnded = async () => {
    this.eventBus.emit(EventMap.ENDED);
    this.audioStatus = AudioStatus.WAIT_PLAY;
  };

  public handleTimeUpdate = async () => {
    this.eventBus.emit(EventMap.TIME_UPDATE);
  };

  public async setAudioSrc(src, autoplay = true) {
    // tslint:disable-next-line:no-unused-expression
    this.lockP && (await this.lockP);
    const oldSrc = this.audioRef.src;
    this.audioRef.src = src;
    this.audioStatus = AudioStatus.WAIT_PLAY;
    if (oldSrc && oldSrc !== src) {
      try {
        await this.audioRef.load();
      } catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
      }
    }
    if (autoplay) {
      await this.play();
    }
  }

  public on(eventName, cb) {
    this.eventBus.on(eventName, cb);
  }

  public off(eventName, cb) {
    this.eventBus.off(eventName, cb);
  }

  public emit(eventName, ...args) {
    this.eventBus.emit(eventName, ...args);
  }

  public async destroy() {
    this.pause();
    this.audioRef.removeEventListener('ended', this.handlePlayEnded);
    this.audioRef.removeEventListener('timeupdate', this.handleTimeUpdate);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    delete this.audioRef;
    Object.values(EventMap).forEach((eventName) => {
      this.eventBus.removeAllListeners(eventName);
    });
  }
}

export default Player;
