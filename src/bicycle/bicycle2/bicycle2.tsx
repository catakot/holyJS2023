import {BicycleSpareParts} from '../../icons';
import './bicycle2.scss';

export const Bicycle2 = () => {
  return (
    <div className="example">
      <div className="bicycle2">
        <BicycleSpareParts.frame.frame2 className="frame" />
        <BicycleSpareParts.pedals.pedals4 className="pedals" />
        <BicycleSpareParts.wheel.wheel2 className="wheel1" />
        <BicycleSpareParts.wheel.wheel2 className="wheel2" />
        <BicycleSpareParts.seat.seat2 className="seat" />
        <BicycleSpareParts.steeringWheel.steeringWheel1 className="steeringWheel" />
      </div>
    </div>
  );
};
