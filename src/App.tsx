import './App.scss';
import {BicycleSpareParts} from './icons';

function App() {
  return (
    <div className="root">
      <div className="flexColum">
        <div className="tools">
          {Object.values(BicycleSpareParts.frame).map((Icon) => (
            <Icon />
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.pedals).map((Icon) => (
            <Icon />
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.seat).map((Icon) => (
            <Icon />
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.steeringWheel).map((Icon) => (
            <Icon />
          ))}
        </div>
        <div className="tools">
          {Object.values(BicycleSpareParts.wheel).map((Icon) => (
            <Icon />
          ))}
        </div>
      </div>

      <div className="drawPanel">
        <BicycleSpareParts.frame.frame1 className="frame1" />
        <BicycleSpareParts.pedals.pedals1 className="pedals1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel12" />
        <BicycleSpareParts.seat.seat1 className="seat1" />
        <BicycleSpareParts.steeringWheel.steeringWheel1 className="steeringWheel1" />
      </div>
    </div>
  );
}

export default App;
