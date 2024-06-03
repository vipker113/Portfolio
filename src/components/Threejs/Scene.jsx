import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
function Box() {
    const meshRef = useRef();

    // Sử dụng useFrame để tạo animation
    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

function Scene() {
    return (
        <Canvas style={{ height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
            <OrbitControls />
        </Canvas>
    );
}

export default Scene;
