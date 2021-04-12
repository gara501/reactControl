import React, {useState} from 'react';
import RgbButton from './components/RgbButton';
import {ColorContext} from './context/colorsContext';

function App(): JSX.Element {

  const [bg, setBg] = useState('');
  const renderButtons = (color:string) => {
    let items = [];
    const colorsLetter = ['R', 'G', 'B'];
    const props = {
      color: '',
      id: 0,
      caption: ''
    }

    for (let i=1; i<=5; i++){
      props.id = i;
      props.color = color;

      if (i===1) {
        colorsLetter.filter((item:string) => {
          return (item === color ? props.caption = color: '')
        });
      } else {
        props.caption = '';
      }
      
      items.push(<RgbButton color={props.color} id={props.id} caption={props.caption} key={color+i} />)
    }
    return items;
  }

  return (
    <ColorContext.Provider value={{bg, setBg}}>
      <div className="container" style={{background: bg }}>
        <div className="control">
          <div className="main-block">
            <RgbButton color='S' id={Number(1)} caption=''/>
            <RgbButton color='S' id={Number(1)} caption=''/>
            <RgbButton color='S' id={Number(2)} caption='OFF'/>
            <RgbButton color='S' id={Number(4)} caption='ON'/>
          </div>
          <div className="content-block">
            <div className="r-block block">
              { renderButtons('R') }
            </div>
            <div className="g-block block">
              { renderButtons('G') }
            </div>
            <div className="b-block block">
              { renderButtons('B') }
            </div>
            <div className="s-block block">
              <RgbButton color='S' id={Number(1)} caption='W'/>
              <RgbButton color='S' id={Number(3)} caption='flash'/>
              <RgbButton color='S' id={Number(3)} caption='strobe'/>
              <RgbButton color='S' id={Number(3)} caption='fade'/>
              <RgbButton color='S' id={Number(3)} caption='smooth'/>
            </div>
          </div>
        </div>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
