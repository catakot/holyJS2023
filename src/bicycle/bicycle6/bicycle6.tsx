import {BicycleSpareParts} from '../../icons';
import './bicycle6.scss';

export const Bicycle6 = () => {
  return (
    <div className="example">
      <div className="bicycle6">
        <BicycleSpareParts.frame.frame4 className="frame" />
        <BicycleSpareParts.pedals.pedals3 className="pedals" />
        <BicycleSpareParts.wheel.wheel2 className="wheel1" />
        <BicycleSpareParts.wheel.wheel2 className="wheel2" />
        <BicycleSpareParts.seat.seat1 className="seat" />
        <BicycleSpareParts.steeringWheel.steeringWheel1 className="steeringWheel" />
      </div>
    </div>
  );
};
