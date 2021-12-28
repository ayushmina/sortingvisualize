import React,{ useEffect, useState } from 'react';
import './SortingVisualizer.css';



function SortingVisualizer(props) {



    const [arr, setArr] = useState([]);
    const [sortingAlgorithm, setSortingAlgorithum] = useState('');
    const [size, setSize] = useState("");
    const [speed, setSpeed] = useState("");
    const [sort, setSort] = useState("");
    const [randomize, setRandomize] = useState("");
    let sorted = false;
    let height = 0;
    let width = 0;
    function setusestate(e) {
        setSortingAlgorithum(e.sortingAlgorithm);
        setSize(e.size);
        setSpeed(e.speed);
        setBarColor(e.barColor)
        setPointerColor(e.pointerColor);
        setSortedColor(e.sortedColor);
        setSort(e.sort);
        setRandomize(e.randomize);
    }

    useEffect(() => {
        width = window.screen.width;
        height = window.screen.height;
        let controllerData = props.controllerData;
        let temp = new Set()
        while (temp.size !== parseInt(controllerData['size'])) {
            temp.add(getRandomElement());
        }
        temp = Array.from(temp);
        setArr(temp);
        setSortingAlgorithum(controllerData['sortingAlgorithm']);
        setSize(controllerData['size']);
        setSpeed(controllerData['speed']);
        setBarColor(getColor(controllerData['barColor']));
        setPointerColor(getColor(controllerData['pointerColor']));
        const sortedColor = getColor(controllerData['sortedColor']);
        setSort(controllerData['sort']);
        setRandomize(controllerData['randomize']);

    });

    useEffect(() => {
        if (true) {
            let controllerData = props.controllerData;
            let cd = {};
            if (controllerData['sort'] === true) {
                cd = {
                    sortingAlgorithm: controllerData['sortingAlgorithm'],
                    size: controllerData['size'],
                    speed: controllerData['speed'],
                    barColor: getColor(controllerData['barColor']),
                    pointerColor: getColor(controllerData['pointerColor']),
                    sortedColor: getColor(controllerData['sortedColor']),
                    sort: controllerData['sort'],
                    randomize: controllerData['randomize']
                }
                switch (controllerData.sortingAlgorithm) {
                    case "Cocktail Sort":
                        setusestate(cd);
                        cocktailSort()

                        break;

                    case "Insertion Sort":
                        setusestate(cd);
                        insertionSort();

                        break;

                    default:
                        setusestate(cd);
                        bubbleSort();
                        break;
                }
            }
            else {
                let newState = {};
                let temp = new Set();
                if (parseInt(size) !== parseInt(controllerData['size'])) {
                    newState['sortingAlgorithm'] = controllerData['sortingAlgorithm'];
                    newState['size'] = parseInt(controllerData['size']);
                    newState['speed'] = controllerData['speed'];
                    newState['barColor'] = getColor(controllerData['barColor']);
                    newState['pointerColor'] = getColor(controllerData['pointerColor']);
                    newState['sortedColor'] = getColor(controllerData['sortedColor']);
                    newState['randomize'] = controllerData['randomize'];
                    newState['sort'] = controllerData['sort'];
                    while (temp.size !== newState['size']) {
                        temp.add(getRandomElement());
                    }
                    temp = Array.from(temp);
                    newState['arr'] = temp;
                }
                else {
                    if (controllerData['randomize'] === true) {
                        newState['sortingAlgorithm'] = controllerData['sortingAlgorithm'];
                        newState['size'] = parseInt(controllerData['size']);
                        newState['speed'] = controllerData['speed'];
                        newState['barColor'] = getColor(controllerData['barColor']);
                        newState['pointerColor'] = getColor(controllerData['pointerColor']);
                        newState['sortedColor'] = getColor(controllerData['sortedColor']);
                        newState['randomize'] = controllerData['randomize'];
                        newState['sort'] = controllerData['sort'];
                        while (temp.size !== newState['size']) {
                            temp.add(getRandomElement());
                        }
                        temp = Array.from(temp);
                        newState['arr'] = temp;
                        let bars = document.getElementsByClassName('array-bar');
                        for (let e = 0; e < bars.length; e++) bars[e].style.backgroundColor = newState['barColor'];
                    }
                    else {
                        newState['sortingAlgorithm'] = controllerData['sortingAlgorithm'];
                        newState['size'] = parseInt(controllerData['size']);
                        newState['barColor'] = getColor(controllerData['barColor']);
                        newState['pointerColor'] = getColor(controllerData['pointerColor']);
                        newState['sortedColor'] = getColor(controllerData['sortedColor']);
                        newState['speed'] = controllerData['speed'];
                        newState['arr'] = arr;
                    }
                }
                setusestate(newState);
            }
        }
    },[]);



    async function bubbleSort() {
        sorted = false;
        props.visualizerDataHandler(sorted);
        let bars = document.getElementsByClassName('array-bar')
        let n = bars.length;
        let e, f, eIndex, fIndex;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                bars[j].style.backgroundColor = pointerColor;
                bars[j + 1].style.backgroundColor = pointerColor;
                e = parseInt(bars[j].innerHTML);
                eIndex = j;
                f = parseInt(bars[j + 1].innerHTML);
                fIndex = j + 1;
                if (e > f) {
                    let gValue = bars[eIndex].innerHTML
                    let gWidth = bars[eIndex].style.width
                    bars[eIndex].innerHTML = bars[fIndex].innerHTML
                    bars[eIndex].style.width = bars[fIndex].style.width
                    bars[fIndex].innerHTML = gValue;
                    bars[fIndex].style.width = gWidth;
                    if (randomize === true) return;
                    await sleep(getSpeed(speed));
                    if (randomize === true) return;
                }
                bars[j].style.backgroundColor = barColor;
                bars[j + 1].style.backgroundColor = barColor;
            }
            bars[n - i - 1].style.backgroundColor = pointerColor;
        }
        bars[0].style.backgroundColor = sortedColor;
        this.sorted = true;
        this.props.visualizerDataHandler(sorted);
    };

    async function cocktailSort() {
        sorted = false;
        props.visualizerDataHandler(sorted);
        let bars = document.getElementsByClassName('array-bar');
        let n = bars.length;
        let swapped = true;
        let start = 0;
        let end = n - 1;
        let gValue, gWidth;
        while (swapped) {
            swapped = false;
            for (let i = start; i < end; ++i) {
                if (parseInt(bars[i].innerHTML) > parseInt(bars[i + 1].innerHTML)) {
                    bars[i].style.backgroundColor = pointerColor;
                    bars[i + 1].style.backgroundColor = pointerColor;
                    if (randomize === true) return;
                    await sleep(getSpeed(speed));
                    if (randomize === true) return;
                    bars[i].style.backgroundColor = barColor;
                    bars[i + 1].style.backgroundColor = barColor;
                    gValue = parseInt(bars[i].innerHTML);
                    gWidth = bars[i].style.width;
                    bars[i].innerHTML = parseInt(bars[i + 1].innerHTML);
                    bars[i].style.width = bars[i + 1].style.width;
                    bars[i + 1].innerHTML = gValue;
                    bars[i + 1].style.width = gWidth;
                    swapped = true;
                }
            }
            if (!swapped) break;
            swapped = false;
            bars[end].style.backgroundColor = sortedColor;
            --end;
            for (let i = end - 1; i >= start; --i) {
                if (parseInt(bars[i].innerHTML) > parseInt(bars[i + 1].innerHTML)) {
                    bars[i].style.backgroundColor = pointerColor;
                    bars[i + 1].style.backgroundColor = pointerColor;
                    if (randomize === true) return;
                    await sleep(getSpeed(speed));
                    if (randomize === true) return;
                    bars[i].style.backgroundColor = barColor;
                    bars[i + 1].style.backgroundColor = barColor;
                    gValue = parseInt(bars[i].innerHTML);
                    gWidth = bars[i].style.width;
                    bars[i].innerHTML = parseInt(bars[i + 1].innerHTML);
                    bars[i].style.width = bars[i + 1].style.width;
                    bars[i + 1].innerHTML = gValue;
                    bars[i + 1].style.width = gWidth;
                    swapped = true;
                }
            }
            bars[start].style.backgroundColor = sortedColor;
            ++start;
        }
        let i = start;
        let j = end;
        while (i <= j) {
            bars[j].style.backgroundColor = sortedColor;
            bars[i].style.backgroundColor = sortedColor;
            i++;
            j--;
        }
        sorted = true;
        props.visualizerDataHandler(sorted);
    }



    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const getSpeed = (speed) => {
        switch (speed) {
            case 'Very Fast':
                return 25;
            case 'Slow':
                return 500;
            default:
                return 300;
        }
    };

    const getColor = (barColor) => {
        switch (barColor) {
            case 'Black':
                return '#000000'
            case 'Cyan':
                return '#00e6e6'
            case 'Green':
                return '#009933'
            case 'Pink':
                return '#e600e6'
            case 'Red':
                return '#cc0000'
            case 'Yellow':
                return '#cccc00'
            default:
                return '#000050'
        }
    };

    const getBarHeight = () => {
        let height1 = ((height - 150) - (parseInt(size) * 5)) / parseInt(size);
        return height1;
    };

    const getfontHeight = () => {
        let fontHeight = ((height - 150) - (parseInt(size) * 5)) / parseInt(size);
        return fontHeight - 3;
    };

    const getRandomElement = () => {
        var max = 0;
        var min = 50;
        if (width < 768) max = (width * 8) / 10;
        else max = (width * 6) / 10
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <div id='barView'>
            {
                arr.map((value, idx) => (
                    <div className="array-bar" key={idx} style={
                        {
                            width: `${value + 10}px`,
                            backgroundColor: `${barColor}`,
                            height: `${getBarHeight()}px`,
                            fontSize: `${getfontHeight()}px`
                        }
                    }>
                        {value}
                    </div>
                )
                )
            }
        </div>
    );

}

export default SortingVisualizer;