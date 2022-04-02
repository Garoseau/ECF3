import React from 'react'
import { Outlet } from 'react-router-dom'
import BIRDS from 'vanta/dist/vanta.birds.min'
import FOG from 'vanta/dist/vanta.fog.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class Venta extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = FOG({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x911f1f,
      midtoneColor: 0xfc2a00,
      lowlightColor: 0x7676ff,
      baseColor: 0x5dc3ff,
      blurFactor: 0.27,
      speed: 1.70,
      zoom: 1.30
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return  <div className='venta'  ref={this.vantaRef}>
      <Outlet/>
    </div>
  }
}
export default Venta;