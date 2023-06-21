import { useRef, useEffect } from "react";
import * as THREE from "three";
// import {} from ''
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

// type Props = {};

export default function Room() {
  const canvasRef = useRef<any>();

  const scene = new THREE.Scene();
  const loader = new GLTFLoader();

  


  useEffect(() => {
    // Get the canvas element
    const canvas = canvasRef.current;
    // canvas.clientWidth = 100
    // canvas.client800 = 100

    // Create the Three.js scene

    // Create the Three.js camera
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

    loader.load("/shiba/scene.gltf", (model) => {

    // loader.load("../assets/shiba/scene.gltf", (model) => {
      scene.add(model.scene);
    });

    // Render the scene
    renderer.render(scene, camera);
  }, []);

  // Create the room geometry
  const roomGeometry = new THREE.BoxGeometry(5, 3, 4);

  // Create the room material
  const roomMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

  // Create the room mesh
  const roomMesh = new THREE.Mesh(roomGeometry, roomMaterial);

  // Add the room mesh to the scene
  scene.add(roomMesh);

  // Create a directional light
  const light = new THREE.DirectionalLight(0xffffff, 1);

  // Set the light position
  light.position.set(0, 1, 0);

  // Add the light to the scene
  scene.add(light);


  return <canvas ref={canvasRef} />;
}
