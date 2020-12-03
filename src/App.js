import React from 'react';
import './App.css';

var models=["slider-1.jpg", "slider-2.jpg"];




function Header(props){
  return (<header>
      <img src="logoOrs.png" ></img>
      <h1>{props.name} Triko</h1>

  </header>);
}
function Main(props){
  return (<section>
      <h2>Our {props.adj} Models Here</h2>
     { props.images.map((imh)=>(<img src={imh}></img>))}

  </section>);
}
function Footer(props){
  return (<footer>
      <h2>Copyright {props.year}</h2>

  </footer>);
}
function App() {
  return (
    <div className="App">
    <Header name="Orsun"/>
    <Main adj="Fall 2020" images={models}/>
    <Footer year={new Date().getFullYear()} />

    </div>
  );
}

export default App;
