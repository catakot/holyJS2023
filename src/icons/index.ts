import {Frame1} from './bicycle1/frame1';
import {Frame2} from './bicycle2/frame2';
import {Frame3} from './bicycle3/frame3';
import {Frame4} from './bicycle4/frame4';
import {Frame5} from './bicycle5/frame5';
import {Pedals1} from './bicycle1/pedals1';
import {Pedals2} from './bicycle2/pedals2';
import {Pedals3} from './bicycle3/pedals3';
import {Pedals4} from './bicycle4/pedals4';
import {Pedals5} from './bicycle5/pedals5';
import {Seat1} from './bicycle1/seat1';
import {Seat2} from './bicycle2/seat2';
import {Seat3} from './bicycle3/seat3';
import {Seat4} from './bicycle4/seat4';
import {Seat5} from './bicycle5/seat5';
import {SteeringWheel1} from './bicycle1/steeringWheel';
import {SteeringWheel2} from './bicycle2/steeringWheel2';
import {SteeringWheel3} from './bicycle3/steeringWheel3';
import {SteeringWheel4} from './bicycle4/steeringWheel4';
import {SteeringWheel5} from './bicycle5/steeringWheel5';
import {Wheel1} from './bicycle1/wheel1';
import {Wheel2} from './bicycle2/wheel2';
import {Wheel3} from './bicycle3/wheel3';
import {Wheel4} from './bicycle4/wheel4';
import {Wheel5} from './bicycle5/wheel5';
import {Frame6} from './bicycle6/frame6';
import {Seat6} from './bicycle6/seat6';
import {SteeringWheel6} from './bicycle6/steeringWheel6';
import {Wheel6} from './bicycle6/wheel6';

export {Colors} from './iconTypes';

export const BicycleSpareParts = {
  wheel: {
    wheel1: Wheel1,
    wheel2: Wheel2,
    wheel3: Wheel3,
    wheel4: Wheel4,
    wheel5: Wheel5,
    wheel6: Wheel6,
  },
  frame: {
    frame1: Frame1,
    frame2: Frame2,
    frame3: Frame3,
    frame4: Frame4,
    frame5: Frame5,
    frame6: Frame6,
  },
  seat: {
    seat1: Seat1,
    seat2: Seat2,
    seat3: Seat3,
    seat4: Seat4,
    seat5: Seat5,
    seat6: Seat6,
  },
  pedals: {
    pedals1: Pedals1,
    pedals2: Pedals2,
    pedals3: Pedals3,
    pedals4: Pedals4,
    pedals5: Pedals5,
  },
  steeringWheel: {
    steeringWheel1: SteeringWheel1,
    steeringWheel2: SteeringWheel2,
    steeringWheel3: SteeringWheel3,
    steeringWheel4: SteeringWheel4,
    steeringWheel5: SteeringWheel5,
    steeringWheel6: SteeringWheel6,
  },
} as const;

export const AllBicycleSpareParts = {
  ...BicycleSpareParts.wheel,
  ...BicycleSpareParts.frame,
  ...BicycleSpareParts.pedals,
  ...BicycleSpareParts.steeringWheel,
  ...BicycleSpareParts.seat,
} as const;
