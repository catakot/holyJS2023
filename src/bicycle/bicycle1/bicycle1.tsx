import {BicycleSpareParts} from '../../icons';
import './bicycle1.scss';

export const Bicycle1 = () => {
  return (
    <div className="example">
      <div className="bicycle1">
        <BicycleSpareParts.frame.frame1 className="frame1" />
        <BicycleSpareParts.pedals.pedals1 className="pedals1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel1" />
        <BicycleSpareParts.wheel.wheel1 className="wheel12" />
        <BicycleSpareParts.seat.seat1 className="seat1" />
        <BicycleSpareParts.steeringWheel.steeringWheel1 className="steeringWheel1" />
      </div>
    </div>
  );
};
