import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { BackSide } from 'three';
import { Model } from './assets/models/tokyo/model';

function App() {

  const enlarge = () => {
    setSize(prev => prev + 1);
  };

  const shrink = () => {
    setSize(prev => prev - 1 || 1);
  };

  const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

  return (
    <div className="App">
      <button onClick={enlarge}>Enalrge</button>
      <button onClick={shrink}>Shrink</button>
      <Canvas style={{ height: 500, width: 500 }} shadows>
      <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />
        <ambientLight intensity={0.25} color="#ffffff" />
        <OrbitControls />
        <PerspectiveCamera position={[0, 6, 20]} makeDefault />
        <Model />
        <mesh position={[0, 0.5, 0]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#d1a652" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#ebebeb" />
        </mesh>
        <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial color="#f8dda3" side={BackSide} />
          </mesh>
        </Environment>
      </Canvas>
    </div>
  )
}

export default App
