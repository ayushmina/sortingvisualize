import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VisualizerController from './visualizer';
import SortingVisualizer from './sortingmethods.js';
import './App.css';
function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         default: {
    //             sortingAlgorithm: 'Bubble Sort',
    //             size: '15',
    //             speed: 'Fast',
    //             barColor: 'Blue',
    //             pointerColor: 'Red',
    //             sortedColor: 'Green',
    //             sort: false,
    //             randomize: true
    //         },
    //         sorted: false
    //     };
    // }
const [sortingAlgorithm,setSortingAlgorithum]=   useState('Bubble Sort');
const [speed,setSpeed]=   useState("Fast");
const [barcolor,setBarColor]=   useState("Blue");
const [pointerColor,setPointerColor]=   useState("Red");
const [sortColor,setSortedColor]=   useState("Green");
const [message,setMessage]=   useState("Feeling lazy ? its O");
const [size,setSize]=   useState('15');
const [sort ,setSort]=useState(false);
const [randomize ,setRandomize]=useState(true);
const sorted=false;
function   setusestate(e,cb){
    setSortingAlgorithum(e.sortingAlgorithm);
    setSize(e.size);
    setSpeed(e.speed);
    setBarColor(e.barColor)
    setPointerColor(e.pointerColor);
    setSortedColor(e.sortedColor);
    setSort(e.sort);
    setRandomize(e.randomize);
    cb(e);
}

// const [sortedColor,setSortedColor]= useState('green');
   const controllerDataHandler = (e) => {setusestate(e ,(e)=> {
    if (e['sort'] === true) {
        var element = document.getElementById('sortingVisualizer');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}) 
       
    }
  const visualizerDataHandler = (e) => {
        sorted=e.sorted;
    }
    const kk={
    sortingAlgorithm: 'Bubble Sort',
    size: '15',
    speed: 'Fast',
    barColor: 'Blue',
    pointerColor: 'Red',
    sortedColor: 'Green',
    sort: false,
    randomize: true
    }
        return (
        
           <div className="App">
                <div className='king'>
                <Container fluid>
                    <Row><Col><p style={{ color: 'white' }}></p></Col></Row>
                    <Row xl={2} lg={2} md={2} sm={1} xs={1}>
                    <Col id='sortingVisualizer'><SortingVisualizer visualizerDataHandler={this.visualizerDataHandler} controllerData={this.state.default}></SortingVisualizer></Col>
                    </Row>
                    <Row xl={2} lg={2} md={2} sm={8} xs={1}>

                        <Col xl={4} lg={4} md={4}><VisualizerController controllerDataHandler={this.controllerDataHandler} visualizerData={this.state.sorted}>{this.state.sorted}</VisualizerController></Col>
                        
                        {/* <Col id='sortingVisualizer'><SortingVisualizer visualizerDataHandler={this.visualizerDataHandler} controllerData={this.state.default}></SortingVisualizer></Col> */}
                    </Row>
                    
                </Container>
                </div>
                {/* <Particles  params={pra} classNmae="App-particles__container"/> */}
            </div>
        
        );
    
}
export default App;