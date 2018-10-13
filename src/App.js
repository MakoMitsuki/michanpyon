import React, { Component} from 'react';
// https://reactjs.org/docs/dom-elements.html

const colors = ['coral', 'salmon', 'beige', 'olive', 'darkteal'];

function randomColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}

// MAIN APP
class App extends Component {
  render() {
    return (
      <div className="Main">
        <MainTitle />
        <Nav />
      </div>
    );
  }  
}

class MainTitle extends Component {
  constructor(props)
  {
    super(props);
    this.state = {color:randomColor()};
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  
  onClick(e){

  } 
  
  onMouseOver(e)
  {
    this.setState({color:randomColor()});
  }
  
  render(){
    let className = "maintitle "+this.state.color;
    return <div className={className} onClick={this.onClick} onMouseOver={this.onMouseOver}>Mika</div>;
  }
}
            
// ================== NAV FUNCTIONS ================================
class Nav extends React.Component {
  constructor(props){
    super(props);
    this.aboutClickHandler = this.aboutClickHandler.bind(this);
    this.codeClickHandler = this.codeClickHandler.bind(this);
    this.artClickHandler = this.artClickHandler.bind(this);
    this.gameClickHandler = this.gameClickHandler.bind(this);
    this.contactClickHandler = this.contactClickHandler.bind(this);
    this.state = {navSelected: "about"};
  }
  
  aboutClickHandler(e) {
    e.preventDefault();
    
    this.setState({navSelected: "about"});
    console.log(this.state.navSelected);
  }
  
  codeClickHandler(e) {
    e.preventDefault();
    this.setState({navSelected: "code"});
  }
  
  artClickHandler(e) {
    e.preventDefault();
    this.setState({navSelected: "art"});
  }
  
  gameClickHandler(e) {
    e.preventDefault();
    this.setState({navSelected: "game"});
  }
  
  contactClickHandler(e){
    e.preventDefault(e);
    this.setState({navSelected: "contact"});
  }

  render(){
    let navSel = this.state.navSelected;
    return (
      <div>
        {/*<div className="nav">
          <NavPart type="about" onClick={this.aboutClickHandler}/>
          <NavPart type="code" onClick={this.codeClickHandler}/>
          <NavPart type="art" onClick={this.artClickHandler}/>
          <NavPart type="game" onClick={this.gameClickHandler}/>
          <NavPart type="contact" onClick={this.contactClickHandler}/>
        </div>*/}
        <ContentBody comp={navSel}/>
      </div>
    );
  }
}
          
function NavPart (props){
    return (<div className={"mainmenu "+props.type} onClick={props.onClick}>{props.type}</div>);
}

class ContentBody extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    if (this.props.comp === "about")
      return <AboutBody />;
    else if (this.props.comp === "game")
      return <GameBody />;
    else if (this.props.comp === "code")
      return <CodeBody />;
    else if (this.props.comp === "art")
      return <ArtBody />;
    else if (this.props.comp === "contact")
      return <ContactBody />;
    else
      return <div>{this.props.comp}</div>;
  }
}

// ================ CONTENT BODY COMPONENTS ====================

class AboutBody extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="aboutbody">
        <p>(Pronounced as me-kuh, not mhai-kuh.)</p>
        <p>I am a programming student and part-time web developer living in Chicago.</p>
        <p>I draw as bad as I code. I also sing as bad as I do both.</p>
        <p>ENG/FIL/ESP/日本 OK.</p>
        <br></br>
        <Footer />
      </div>
    );
  }
}

class CodeBody extends Component
{
  constructor(props)
  {
    super(props);
  }

  render(){
    return(<div>
      <p><h2>Work Experience</h2>
      <h3>Web Developer</h3>
      UIC Student Affairs Technology
      University of Illinois at Chicago, Chicago, IL
      <h3>Undergraduate Student Assistant</h3>
      UIC College of Engineering Computer Science Department
      University of Illinois at Chicago, Chicago, IL
      <br /></p>
      <a href="https://www.linkedin.com/in/mika-cabudol/">LinkedIn</a>
    </div>);
  }
}

class ArtBody extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <img src="https://cdn.glitch.com/a8027c13-8ce9-42b3-be4b-2eafbbd6d1b2%2Fback.jpg?1539385449464" width="1020px" />
    );
  }
}

class GameBody extends Component {
  constructor(props){
    super(props);
  }

  render(){
    /*       <h3>GACHA</h3><ul>
          <li>OPTC: 952113280</li>
          <li>FFBE: 760691691958</li>
          <li>BanDori: 1050527</li>
          <li>Dissidia Opera Omnia: 530046256</li>
        </ul></p>
        <li>Discord: michanpyon#7085</li>*/
    return(
      <div className="gamebody">
        <div className="gamebody_part"><b>CONSOLE</b>
          <GameItem imgsrc="" gameid="PSN" text="MakoMitsuki"/>
          <GameItem imgsrc="" gameid="Battle.net" text="MakoMitsuki#1797"/>
        </div>
        <div className = "gamebody_part"><b>GACHA</b>
          <GameItem imgsrc="" gameid="Final Fantasy Brave Exvius" text="760691691958"/>
          <GameItem imgsrc="" gameid="One Piece Treasure Cruise" text="952113280"/>
          <GameItem imgsrc="" gameid="Dissidia Opera Omnia" text="530046256"/>
          <GameItem imgsrc="" gameid="BanDori" text="1050527"/>
        </div>
      </div>
    );
  }
}

class GameItem extends Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    return(
      <div id={this.props.gameid}>
      <img className="gameitem" src={this.props.imgsrc}/>
      <br/>
      {this.props.text}
      </div>
    );
  }
}

class ContactBody extends Component{
  constructor(props) {
    super(props);
    /*this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);*/
  }

  /*handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();*/

  render() {
    return(
      <div classname="contactBody"></div>
    );
  }
}

// =============== FOOTER STUFF ==============================

class Footer extends Component {
    constructor(props){
      super(props);
    }
  
  render(){
    return(
      <div>  
      <b>SITE UNDER CONSTRUCTION</b>
        <div class="socialmedia">
          <a href="https://twitter.com/michanpyon"><img class="socialmediaicon" src="https://cdn.glitch.com/a8027c13-8ce9-42b3-be4b-2eafbbd6d1b2%2FTwitter.png?1539390444314" /></a>
          <a href="https://www.instagram.com/michanpyon/"><img class="socialmediaicon" src="https://cdn.glitch.com/a8027c13-8ce9-42b3-be4b-2eafbbd6d1b2%2FInstagram.png?1539390443925" /></a>
          <a href="https://github.com/MakoMitsuki"><img class="socialmediaicon" src="https://cdn.glitch.com/a8027c13-8ce9-42b3-be4b-2eafbbd6d1b2%2FGithub.png?1539390443982" /></a>
          <a href="https://www.linkedin.com/in/mika-cabudol/"><img class="socialmediaicon" src="https://cdn.glitch.com/a8027c13-8ce9-42b3-be4b-2eafbbd6d1b2%2FLinkedin.png?1539390443945" /></a>
        </div>
      </div>
    );
  }
}

export default App;