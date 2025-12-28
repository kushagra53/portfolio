"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const CyberSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const innerMeshRef = useRef<THREE.Mesh>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [shattered, setShattered] = useState(false);
    const [hovered, setHovered] = useState(false);
    const scaleRef = useRef(1);
    const opacityRef = useRef(1);

    // Mouse move handler for parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animation loop
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            // Shatter animation
            if (shattered) {
                scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 3, delta * 4);
                opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, 0, delta * 3);
            } else {
                scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 1, delta * 4);
                opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, 1, delta * 3);

                // Subtle glitch flicker when hovered or randomly
                const glitch = hovered ? Math.sin(time * 20) * 0.2 : 0;
                const baseOpacity = 0.8 + glitch;
                opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, baseOpacity, delta * 5);

                // Auto rotation
                meshRef.current.rotation.x += delta * (hovered ? 0.3 : 0.1);
                meshRef.current.rotation.y += delta * (hovered ? 0.4 : 0.15);

                // Mouse parallax
                meshRef.current.rotation.x += (mousePos.y * 0.5 - meshRef.current.rotation.x) * 0.05;
                meshRef.current.rotation.y += (mousePos.x * 0.5 - meshRef.current.rotation.y) * 0.05;
            }

            meshRef.current.scale.setScalar(scaleRef.current);
            (meshRef.current.material as THREE.MeshPhongMaterial).opacity = opacityRef.current;
        }

        if (innerMeshRef.current) {
            // Counter-rotation for inner sphere
            innerMeshRef.current.rotation.x -= delta * 0.05;
            innerMeshRef.current.rotation.y -= delta * 0.07;
            innerMeshRef.current.scale.setScalar(scaleRef.current * 0.9);
            (innerMeshRef.current.material as THREE.MeshBasicMaterial).opacity = opacityRef.current * 0.5;
        }
    });

    const handleClick = () => {
        setShattered(true);
        // Reset after duration
        setTimeout(() => setShattered(false), 2000);
    };

    return (
        <group>
            {/* Inner solid sphere (blocks background) */}
            <mesh ref={innerMeshRef} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1.8, 2]} />
                <meshBasicMaterial color="#0a192f" transparent={true} />
            </mesh>

            {/* Outer wireframe sphere */}
            <mesh
                ref={meshRef}
                onClick={handleClick}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            >
                <icosahedronGeometry args={[2, 2]} />
                <meshPhongMaterial
                    color="#64ffda"
                    wireframe={true}
                    transparent={true}
                    emissive="#64ffda"
                    emissiveIntensity={1}
                    shininess={100}
                />
            </mesh>

            {/* Pulsing glow sphere */}
            <mesh scale={[1.05, 1.05, 1.05]}>
                <icosahedronGeometry args={[2, 1]} />
                <meshBasicMaterial
                    color="#64ffda"
                    wireframe={true}
                    opacity={0.05}
                    transparent={true}
                />
            </mesh>
        </group>
    );
};

const CyberCore = () => {
    return (
        <div className="absolute inset-0 w-full h-full cursor-pointer">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#64ffda" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />
                <spotLight position={[0, 10, 0]} intensity={1.5} color="#64ffda" />

                {/* Stars background */}
                <Stars
                    radius={100}
                    depth={50}
                    count={7000}
                    factor={4}
                    saturation={0.5}
                    fade
                    speed={1.5}
                />

                {/* The 3D Cyber Sphere */}
                <CyberSphere />
            </Canvas>
        </div>
    );
};

export default CyberCore;
