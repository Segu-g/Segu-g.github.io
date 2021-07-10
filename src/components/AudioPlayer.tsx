import React from "react"



type RenderArgs = {
    currentTime: number,
    paused: boolean,
    play: () => Promise<void>,
    pause: () => void,
    jump: (value: number) => number,
}

type AudioProviderProps = {
    url: string,
}


class AudioProvider<T = {}> extends React.Component<T & AudioProviderProps>{

    protected audio;
    constructor(props: T & AudioProviderProps) {
        super(props);
        this.audio = new Audio(this.props.url);
    }

    componentDidMount = () => {
        console.log("Mounted");
        this.audio = new Audio(this.props.url);
        this.audio.addEventListener("play", () => this.forceUpdate());
        this.audio.addEventListener("pause", () => this.forceUpdate());
        this.audio.addEventListener("ended", () => this.forceUpdate());
        this.audio.addEventListener("timeupdate", () => this.forceUpdate());
    }

    componentWillUnmount = () => {
        console.log("Ummounted!")
        this.audio.removeEventListener("play", () => this.forceUpdate());
        this.audio.removeEventListener("pause", () => this.forceUpdate());
        this.audio.removeEventListener("ended", () => this.forceUpdate());
        this.audio.removeEventListener("timeupdate", () => this.forceUpdate());
    };

    play = () => this.audio.play();
    pause = () => this.audio.pause();
    jump = (value: number) => (this.audio.currentTime += value);
}

class AudioPlayer extends AudioProvider<{}> {
    constructor(props: AudioProviderProps) {
        super(props);
    }

    render() {
        return <div>
            <p>currenttime: {this.audio.currentTime}</p>

            <button onClick={this.audio.paused ? this.play : this.pause}>
                {this.audio.paused ? "Play" : "Pause"}
            </button>

            <button onClick={() => this.jump(30)}>30sec ▶︎</button>
        </div>
    }
}


export default AudioPlayer;
