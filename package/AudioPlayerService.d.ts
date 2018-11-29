export declare const AudioStatus: {
    WAIT_PLAY: number;
    CALL_PLAY: number;
    PLAYING: number;
    PAUSE: number;
};
export declare const EventMap: {
    STATUS_CHANGE: string;
    CALL_PLAY: string;
    PLAYED: string;
    PAUSE: string;
    ERROR: string;
    TIME_UPDATE: string;
    ENDED: string;
};
declare class Player {
    audioStatus: number;
    audioRef: HTMLAudioElement;
    private sAudioStatus;
    private eventBus;
    private lockP;
    constructor();
    init(): void;
    handleVisibilityChange: () => void;
    play(): Promise<void>;
    pause(): Promise<void>;
    handlePlayEnded: () => Promise<void>;
    handleTimeUpdate: () => Promise<void>;
    setAudioSrc(src: any, autoplay?: boolean): Promise<void>;
    on(eventName: any, cb: any): void;
    off(eventName: any, cb: any): void;
    emit(eventName: any, ...args: any[]): void;
    destroy(): Promise<void>;
}
export default Player;
