import { Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Ref, useRef } from "react";
import * as THREE from "three";

function StarsElement() {
    const ref = useRef() as any;
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.0003;
        ref.current.rotation.z += 0.0003;
    });
    return <Stars ref={ref} />;
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
            <ambientLight />
        </Canvas>
    )
}
export default Background