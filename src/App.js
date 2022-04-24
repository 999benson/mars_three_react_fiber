import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { Environment, Stars, Plane } from "@react-three/drei";
import Mars from "./components/mars";
import "./styles/canvas.css"
import {Suspense} from "react"

function App() {
  return (
    <div id="canvas-container">

      <Canvas >
      <Stars />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>

      </Plane>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={null}>
        <Mars/>
        
        {/* <Environment
        frames={Infinity} 
        resolution={256}
        
  
            // path={'/'}
            // preset={'sunset'}
            // scene ={<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
          >
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Environment> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
