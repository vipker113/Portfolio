import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';

const CameraController = () => {
    const ref = useRef();
    useFrame(({ camera }) => {
        const scrollY = window.scrollY;
        camera.position.z = 50 + scrollY / 20;
    });
    return <perspectiveCamera ref={ref} />;
};

const SpaceBackground = () => {
    return (
        <Canvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
            }}
        >
            <CameraController />
            <ambientLight intensity={0.5} />
            <Stars />
        </Canvas>
    );
};

export default SpaceBackground;
