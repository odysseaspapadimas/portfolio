"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function StarsElement() {
    const ref = useRef() as any;
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.0003;
        ref.current.rotation.z += 0.0003;
    });
    return <Stars ref={ref} depth={100} />;
}

const Background = () => {
    return (
        <Canvas
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -100,
            }}
        >
            <StarsElement />
        </Canvas>
    )
}
export default Background