import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Link } from "react-router-dom";
import ThreeScene from "./ThreeScene"; // Adjust the import path as needed
import Header from "./Header";

const Home = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <ThreeScene />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center md:hidden">
        <h2 className="text-4xl font-bold mb-4 text-primary">Welcome</h2>
        <p className="text-2xl mb-8 text-accent">
          Feel free to check my work out
        </p>
        <Link to="/projects">
          <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300 glow-on-click">
            View Gallery
          </button>
        </Link>
      </div>
      <FloatingText className="hidden md:block" />
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block">
        <Link to="/projects">
          <button className="bg-primary text-white py-3 px-8 rounded-full shadow-lg hover:bg-secondary transition duration-300 glow-on-click">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

const FloatingText = ({ className }) => {
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
    camera.position.z = 20; // Adjusted for larger text size

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight1.position.set(10, 10, 10);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight2.position.set(-10, 10, -10);
    scene.add(directionalLight2);

    const pointLight1 = new THREE.PointLight(0xffffff, 2, 100);
    pointLight1.position.set(0, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 2, 100);
    pointLight2.position.set(-5, -5, 10);
    scene.add(pointLight2);

    // Font Loader
    const fontLoader = new FontLoader();
    const textGroup = new THREE.Group();
    scene.add(textGroup);

    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const createTextMesh = (text, size, color) => {
          const geometry = new TextGeometry(text, {
            font: font,
            size: size,
            height: 0.5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.05,
            bevelOffset: 0,
            bevelSegments: 10,
          });
          const material = new THREE.MeshStandardMaterial({
            color: color,
            metalness: 1,
            roughness: 0,
            emissive: color,
            emissiveIntensity: 0.5,
          });
          return new THREE.Mesh(geometry, material);
        };

        const heading = createTextMesh("Welcome", 2, 0xff6363);
        heading.position.set(-15, 3, 0); // Moved more to the left
        textGroup.add(heading);

        const paragraph = createTextMesh(
          "Feel free to check my work out",
          1,
          0xffa600
        );
        paragraph.position.set(-15, 0, 0); // Moved more to the left
        textGroup.add(paragraph);
      }
    );

    // Render the scene continuously with floating animation
    const animate = () => {
      requestAnimationFrame(animate);
      textGroup.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = currentMount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);

      // Adjust text position based on screen size
      if (clientWidth < 768) {
        textGroup.position.set(-clientWidth / 100, 3, 0);
      } else {
        textGroup.position.set(0, 3, 0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default Home;
