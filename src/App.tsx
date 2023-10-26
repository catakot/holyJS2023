import './App.scss';
import {Create} from './create/Create';
import {BicycleSpareParts} from './icons';

function App() {
  return (
    <div className="root">
      <div className="flexColum">
        <div className="tools">
          {Object.values(BicycleSpareParts.frame).map((Icon, index) => (
            <>
              <span>{'frame' + (index + 1)}</span>
              <Icon />
            </>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.pedals).map((Icon, index) => (
            <>
              <span>{'pedals' + (index + 1)}</span>
              <Icon />
            </>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.seat).map((Icon, index) => (
            <>
              <span>{'seat' + (index + 1)}</span>
              <Icon />
            </>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.steeringWheel).map((Icon, index) => (
            <>
              <span>{'steeringWheel' + (index * 2 + 1)}</span>
              <Icon />
            </>
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.wheel).map((Icon, index) => (
            <>
              <span>{'wheel' + (index + 1)}</span>
              <Icon />
            </>
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
        <Create />
        {/* <BicycleSpareParts.frame.frame1 className="frame1" />
        <BicycleSpareParts.pedals.pedals1 className="pedals1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel12" />
        <BicycleSpareParts.seat.seat1 className="seat1" />
        <BicycleSpareParts.steeringWheel.steeringWheel1 className="steeringWheel1" /> */}
      </div>
    </div>
  );
}

export default App;
