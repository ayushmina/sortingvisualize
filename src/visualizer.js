import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './VisualizerController.css'
function VisualizerController(props) {
   
     
 const [arr,setArr]=   useState([]);
const [sortingAlgorithm,setSortingAlgorithum]=   useState('Bubble Sort');
const [speed,setSpeed]=   useState("Fast");
const [barColor,setBarColor]=   useState("Blue");
const [pointerColor,setPointerColor]=   useState("Red");
const [sortedColor,setSortedColor]=   useState("Green");
const [message,setMessage]=   useState("Feeling lazy ? its O");
const [size,setSize]=   useState('15');

  

let object={
        sortingAlgorithm: sortingAlgorithm,
        speed: speed,
        size: size,
        barColor: barColor,
        pointerColor: pointerColor,
        sortedColor: sortedColor,
        message: 'Feeling lazy ? its OK , just click Sort ! '
    };
        // let     onSelectingSortingAlgorithm = onSelectingSortingAlgorithm(props)
        // let     onSelectingSpeed = onSelectingSpeed(props)
        // let     onSelectingSize = onSelectingSize(props)
        // let     onSelectingBarColor = onSelectingBarColor(props)
        // let     onSelectingPointerColor = onSelectingPointerColor(props)
        // let     onSelectingSortedColor = onSelectingSortedColor(props)
        // let     randomize = randomize(props)
        // let    sort = sort(props)
        let    randomizeRef = React.createRef()
        let    sortRef = React.createRef()
    
    useEffect(() => {

        if (props.visualizerData === true) {
            randomizeRef.current.textContent = 'Randomize Array';
        }
    },[]);

    function onSelectingSortingAlgorithm(eventKey, event) {
            setSortingAlgorithum(eventKey);

    }
   function onSelectingSpeed(eventKey, event) {
        
            setSpeed(eventKey);
       
    }
    function  onSelectingSize(eventKey, event) {
        let temp = update();
        temp['sort'] = false;
        temp['randomize'] = true;
        temp['size'] = eventKey;
        
        props.controllerDataHandler(object);
    }
    function   onSelectingBarColor(eventKey, event) {
        let temp = update();
        temp['sort'] = false;
        temp['randomize'] = false;
        temp['barColor'] = eventKey;
        
        props.controllerDataHandler(object);
      
    }
    function   onSelectingPointerColor(eventKey, event) {
        
            setPointerColor(eventKey);
       
    }
    function  onSelectingSortedColor(eventKey, event) {
        
            setSortedColor(eventKey);
     
    }
    function  update() {
        var temp = {
            sortingAlgorithm: '',
            speed: '',
            size: '',
            barColor: '',
            pointerColor: '',
            sortedColor: ''
        };
        temp.sortingAlgorithm = sortingAlgorithm;
        temp.size = size;
        temp.speed = speed;
        temp.barColor = barColor;
        temp.pointerColor = pointerColor;
        temp.sortedColor = sortedColor;
        return temp;
    }
    function   randomize() {
        randomizeRef.current.textContent = 'Randomize Array';
        sortRef.current.disabled = false
        document.getElementById('speed').disabled = false;
        document.getElementById('size').disabled = false;
        document.getElementById('sortingAlogrithm').disabled = false;
        document.getElementById('barColor').disabled = false;
        document.getElementById('pointerColor').disabled = false;
        document.getElementById('sortedColor').disabled = false;
        let temp = update();
        temp['sort'] = false;
        temp['randomize'] = true;
        props.controllerDataHandler(object);

    }
    function  sort() {
        randomizeRef.current.textContent = 'Stop & Randomize Array';
        sortRef.current.disabled = true
        document.getElementById('speed').disabled = true;
        document.getElementById('size').disabled = true;
        document.getElementById('sortingAlogrithm').disabled = true;
        document.getElementById('barColor').disabled = true;
        document.getElementById('pointerColor').disabled = true;
        document.getElementById('sortedColor').disabled = true;
        let temp = update();
        temp['sort'] = true;
        temp['randomize'] = false;
        temp['sorted'] = false;
        
            props.controllerDataHandler(object)
    }

        return (
            <div className='VisualizerController'>
                
                <Container>
                    <Row>
                        <Col>
                            <SplitButton title={sortingAlgorithm} id='sortingAlogrithm' variant='light' onSelect={onSelectingSortingAlgorithm}>
                                <Dropdown.Item disabled>Sorting Algorithm</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey='Bubble Sort'>Bubble Sort (Default)</Dropdown.Item>
                                <Dropdown.Item eventKey='Linear Sort'>Linear Sort</Dropdown.Item>

                            </SplitButton>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <SplitButton title={speed} id='speed' variant='light' onSelect={onSelectingSpeed}>
                                <Dropdown.Item disabled>Speed Of Visualization</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey='Very Fast'>fast (25ms)</Dropdown.Item>
                                <Dropdown.Item eventKey='Normal'>Normal(250)</Dropdown.Item>
                                <Dropdown.Item eventKey='Slow'>Slow(500)</Dropdown.Item>

                            </SplitButton>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <SplitButton title={size} id='size' variant='light' onSelect={onSelectingSize}>
                                <Dropdown.Item disabled>Size Of Array</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey='10'>10</Dropdown.Item>
                                <Dropdown.Item eventKey='15'>15(Default)</Dropdown.Item>
                                <Dropdown.Item eventKey='20'>20</Dropdown.Item>
                                <Dropdown.Item eventKey='30'>30</Dropdown.Item>
                                <Dropdown.Item eventKey='35'>35</Dropdown.Item>
                            </SplitButton>
                        </Col>
                    </Row>
                    <br />
           
                    <Row>
                        <Col><Button ref={randomizeRef} size='lg' className='ok'  onClick={randomize}>Randomize</Button></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col><Button ref={sortRef} size='lg' variant='success' onClick={sort}>Sort</Button></Col>
                    </Row>
                </Container>
            </div>
        );
    }
export default VisualizerController;