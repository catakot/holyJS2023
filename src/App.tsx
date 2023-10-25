
import './App.scss'
import { Frame1 } from './assets/bicycle1/frame1'
import { Pedals1 } from './assets/bicycle1/pedals1'
import { Wheel1 } from './assets/bicycle1/wheel1'
import { Seat1 } from './assets/bicycle1/seat1'
import { SteeringWheel1 } from './assets/bicycle1/steeringWheel'

function App() {

  return (
    <div className='root'>
      <div className='tools'>
        <Frame1 />
        <Pedals1 />
        <Wheel1 />
        <Seat1 />
        <SteeringWheel1 />
      </div>

      <div className='drawPanel'>
        <Frame1 />
        <Pedals1 />
        <Wheel1 />
        <Wheel1 className='wheel12' />
        <Seat1 />
        <SteeringWheel1 />
      </div>
    </div>
  )
}

export default App
