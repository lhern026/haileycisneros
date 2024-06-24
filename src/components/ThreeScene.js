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
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Load background texture
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load(
      "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=800"
    );

    // Set the background texture
    scene.background = backgroundTexture;

    // Geometry and Material with Textures for Each Face
    const geometry = new THREE.BoxGeometry(5, 5, 5);

    const createMaterial = (url) => {
      const texture = textureLoader.load(url);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return new THREE.MeshBasicMaterial({ map: texture });
    };

    const materials = [
      createMaterial("https://i.imgur.com/z5JbtcG.jpeg"),
      createMaterial("https://i.imgur.com/0ljGFMY.jpeg"),
      createMaterial("https://i.imgur.com/owV4jYU.jpeg"),
      createMaterial("https://i.imgur.com/Ctet7Iw.jpeg"),
      createMaterial("https://i.imgur.com/1lyTROf.jpeg"),
      createMaterial("https://i.imgur.com/WBBjK5l.jpeg"),
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.001; // Slow down the rotation speed
      cube.rotation.y += 0.001; // Slow down the rotation speed
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
