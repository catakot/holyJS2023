import {BicycleSpareParts} from '../../icons';
import './bicycle3.scss';

export const Bicycle3 = () => {
  return (
    <div className="example">
      <div className="bicycle3">
        <BicycleSpareParts.frame.frame3 className="frame" />
        <BicycleSpareParts.pedals.pedals3 className="pedals" />
        <BicycleSpareParts.wheel.wheel3 className="wheel1" />
        <BicycleSpareParts.wheel.wheel3 className="wheel2" />
        <BicycleSpareParts.seat.seat3 className="seat" />
        <BicycleSpareParts.steeringWheel.steeringWheel3 className="steeringWheel" />
      </div>
    </div>
  );
};
