import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// type Props = {}

export default function Test(ops: any) {
  const canvasRef = useRef<any>();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  useEffect(() => {
    const canvas = canvasRef.current;

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    // Create the Three.js renderer
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Set the renderer size to match the canvas size
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the camera to the scene
    scene.add(camera);

    // Set the camera position
    camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load("/shiba/scene.gltf", (model) => {
      scene.add(model.scene);
    });

    renderer.render(scene, camera);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}
