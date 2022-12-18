import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState } from 'react';
import porcelainWhite from './assets/matcap-porcelain-white.jpg';
import { TextureLoader } from 'three';

function App() {
  const [size, setSize] = useState(2);

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
      <Canvas style={{ height: 500, width: 500 }}>
      <directionalLight position={[1, 2, 2]} />
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <PerspectiveCamera position={[0, 6, 20]} makeDefault />
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[size, 32, 32]} />
          <ambientLight intensity={0.5} />
        </mesh>
        <mesh rotation={[-angleToRadians(90), 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#fefefd" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
