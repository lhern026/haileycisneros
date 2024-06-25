import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Load background texture
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load(
      "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=800"
    );
    scene.background = backgroundTexture;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.position.set(5, 5, 5);
    scene.add(spotlight);

    // Environment Map
    const envTexture = textureLoader.load(
      "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=800"
    );

    // Function to create materials with textures
    const createMaterial = (url) => {
      const texture = textureLoader.load(url);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return new THREE.MeshStandardMaterial({
        map: texture,
        envMap: envTexture,
        roughness: 0.5,
        metalness: 0.5,
      });
    };

    const materials = [
      createMaterial("https://i.imgur.com/z5JbtcG.jpeg"),
      createMaterial("https://i.imgur.com/0ljGFMY.jpeg"),
      createMaterial("https://i.imgur.com/owV4jYU.jpeg"),
      createMaterial("https://i.imgur.com/Ctet7Iw.jpeg"),
      createMaterial("https://i.imgur.com/1lyTROf.jpeg"),
      createMaterial("https://i.imgur.com/WBBjK5l.jpeg"),
    ];

    // Determine cube size based on screen width
    const isMobile = window.innerWidth <= 768;
    const cubeSize = isMobile ? 7 : 11;

    // Geometry with responsive size
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Animation
    let cubeDirection = 1;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;

      // Make the cube move slightly back and forth
      cube.position.x += 0.01 * cubeDirection;
      if (cube.position.x > 2 || cube.position.x < -2) {
        cubeDirection *= -1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = currentMount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeScene;
