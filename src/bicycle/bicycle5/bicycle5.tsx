import {BicycleSpareParts} from '../../icons';
import './bicycle5.scss';

export const Bicycle5 = () => {
  return (
    <div className="example">
      <div className="bicycle">
        <BicycleSpareParts.frame.frame1 className="frame" />
        <BicycleSpareParts.pedals.pedals2 className="pedals" />
        <BicycleSpareParts.wheel.wheel3 className="wheel1" />
        <BicycleSpareParts.wheel.wheel3 className="wheel2" />
        <BicycleSpareParts.seat.seat4 className="seat" />
        <BicycleSpareParts.steeringWheel.steeringWheel3 className="steeringWheel" />
      </div>
    </div>
  );
};
