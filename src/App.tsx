import {Fragment} from 'react';
import './App.scss';
import {BikeEditor} from './bike-editor/bike-editor';
import {BicycleSpareParts} from './icons';

function App() {
  return (
    <div className="root">
      <div className="flexColum">
        <div className="tools">
          {Object.values(BicycleSpareParts.frame).map((Icon, index) => (
            <Fragment key={index}>
              <span>{'frame' + (index + 1)}</span>
              <Icon />
            </Fragment>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.pedals).map((Icon, index) => (
            <Fragment key={index}>
              <span>{'pedals' + (index + 1)}</span>
              <Icon />
            </Fragment>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.seat).map((Icon, index) => (
            <Fragment key={index}>
              <span>{'seat' + (index + 1)}</span>
              <Icon />
            </Fragment>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.steeringWheel).map((Icon, index) => (
            <Fragment key={index}>
              <span>{'steeringWheel' + (index + 1)}</span>
              <Icon />
            </Fragment>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.wheel).map((Icon, index) => (
            <Fragment key={index}>
              <span>{'wheel' + (index + 1)}</span>
              <Icon />
            </Fragment>
          ))}
        </div>
        <div className="tools">
          <span className="red">red</span>
          <span className="orange">orange</span>
          <span className="yellow">yellow</span>
          <span className="green">green</span>
          <span className="aqua">aqua</span>
          <span className="blue">blue</span>
          <span className="pink">pink</span>
          <span className="purple">purple</span>
          <span className="grey">grey</span>
        </div>
      </div>

      <div className="drawPanel">
        <BikeEditor />
      </div>
    </div>
  );
}

export default App;
