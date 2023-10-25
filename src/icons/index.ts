import {Frame1} from './bicycle1/frame1';
import {Frame2} from './bicycle2/frame2';
import {Frame3} from './bicycle3/frame3';
import {Frame4} from './bicycle4/frame4';
import {Pedals1} from './bicycle1/pedals1';
import {Pedals3} from './bicycle3/pedals3';
import {Pedals4} from './bicycle4/pedals4';
import {Seat1} from './bicycle1/seat1';
import {Seat2} from './bicycle2/seat2';
import {Seat3} from './bicycle3/seat3';
import {Seat4} from './bicycle4/seat4';
import {SteeringWheel1} from './bicycle1/steeringWheel';
import {SteeringWheel3} from './bicycle3/steeringWheel3';
import {Wheel1} from './bicycle1/wheel1';
import {Wheel2} from './bicycle2/wheel2';
import {Wheel3} from './bicycle3/wheel3';
import {Wheel4} from './bicycle4/wheel4';

export const BicycleSpareParts = {
  wheel: {
    wheel1: Wheel1,
    wheel2: Wheel2,
    wheel3: Wheel3,
    wheel4: Wheel4,
  },
  frame: {
    frame1: Frame1,
    frame2: Frame2,
    frame3: Frame3,
    frame4: Frame4,
  },
  seat: {
    seat1: Seat1,
    seat2: Seat2,
    seat3: Seat3,
    seat4: Seat4,
  },
  pedals: {
    pedals1: Pedals1,
    pedals2: Pedals1,
    pedals3: Pedals3,
    pedals4: Pedals4,
  },
  steeringWheel: {
    steeringWheel1: SteeringWheel1,
    steeringWheel3: SteeringWheel3,
  },
};
