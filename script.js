function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'snare', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
{ id: 'bass 1', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
{ id: 'bongo', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
{ id: 'tom tom', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
{ id: 'bass 3', letter: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
{ id: 'shotgun', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
{ id: 'high hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
{ id: 'drum hit', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
{ id: 'laser', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",







    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);}
    });_defineProperty(this, "handleClick",
    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);}
  render() {
    return (
      React.createElement("div", { className: "drum-pad", id: this.props.id, onClick: this.handleClick }, React.createElement("p", null, this.props.letter),
      React.createElement("audio", { ref: ref => this.audio = ref, className: "clip", src: this.props.src, id: this.props.letter })));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: '' };}
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "drum-pads" },
      React.createElement("div", { id: "container1" },
      data.map((d) =>
      React.createElement(DrumPad, { id: d.id, letter: d.letter, src: d.src, handleDisplay: this.handleDisplay })), " ")),


      React.createElement("div", { id: "container2" },
      React.createElement("div", { id: "display" }, this.state.display, "      "), " ")));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));