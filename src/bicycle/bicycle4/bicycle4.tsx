import {BicycleSpareParts} from '../../icons';
import './bicycle4.scss';

export const Bicycle4 = () => {
  return (
    <div className="example">
      <div className="bicycle">
        <BicycleSpareParts.frame.frame4 className="frame" />
        <BicycleSpareParts.pedals.pedals4 className="pedals" />
        <BicycleSpareParts.wheel.wheel4 className="wheel1" />
        <BicycleSpareParts.wheel.wheel4 className="wheel2" />
        <BicycleSpareParts.seat.seat4 className="seat" />
        <BicycleSpareParts.steeringWheel.steeringWheel3 className="steeringWheel" />
      </div>
    </div>
  );
};
