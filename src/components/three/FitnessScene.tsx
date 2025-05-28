
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';

const AnimatedDumbbell = () => {
  const groupRef = useRef<Group>(null);
  const leftSphereRef = useRef<Mesh>(null);
  const rightSphereRef = useRef<Mesh>(null);
  const barRef = useRef<Mesh>(null);

  useFrame((state) => {
    try {
      if (groupRef.current) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      }
      
      if (leftSphereRef.current && rightSphereRef.current && barRef.current) {
        leftSphereRef.current.rotation.x = state.clock.elapsedTime * 0.5;
        rightSphereRef.current.rotation.x = -state.clock.elapsedTime * 0.5;
        barRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      }
    } catch (error) {
      console.error('Error in AnimatedDumbbell useFrame:', error);
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={leftSphereRef} position={[-1.5, 0, 0]} args={[0.4, 16, 16]}>
        <meshStandardMaterial color="#14b8a6" metalness={0.7} roughness={0.3} />
      </Sphere>
      
      <Box ref={barRef} position={[0, 0, 0]} args={[2.5, 0.1, 0.1]}>
        <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
      </Box>
      
      <Sphere ref={rightSphereRef} position={[1.5, 0, 0]} args={[0.4, 16, 16]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.7} roughness={0.3} />
      </Sphere>
    </group>
  );
};

const FloatingRings = () => {
  const ring1Ref = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const ring3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    try {
      if (ring1Ref.current) {
        ring1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
        ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.x = -state.clock.elapsedTime * 0.4;
        ring2Ref.current.rotation.z = state.clock.elapsedTime * 0.1;
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.y = state.clock.elapsedTime * 0.6;
        ring3Ref.current.rotation.z = -state.clock.elapsedTime * 0.2;
      }
    } catch (error) {
      console.error('Error in FloatingRings useFrame:', error);
    }
  });

  return (
    <>
      <Torus ref={ring1Ref} position={[-3, 2, -2]} args={[0.8, 0.1, 16, 100]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
      </Torus>
      <Torus ref={ring2Ref} position={[3, -1, -1]} args={[0.6, 0.08, 16, 100]}>
        <meshStandardMaterial color="#f97316" transparent opacity={0.8} />
      </Torus>
      <Torus ref={ring3Ref} position={[0, 3, -3]} args={[1, 0.12, 16, 100]}>
        <meshStandardMaterial color="#ec4899" transparent opacity={0.6} />
      </Torus>
    </>
  );
};

const FitnessScene = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
        </div>
      }>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ 
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            try {
              gl.setClearColor('#000000', 0);
            } catch (error) {
              console.error('Error setting clear color:', error);
            }
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#14b8a6" />
          
          <AnimatedDumbbell />
          <FloatingRings />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true} 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default FitnessScene;
