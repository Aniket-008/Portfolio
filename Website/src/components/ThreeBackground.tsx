import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  reducedMotion?: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070a, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // Fallback gracefully if WebGL fails
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles Cloud
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Color palettes: vibrant purple (#9333ea -> 0.57, 0.2, 0.91), electric blue (#3b82f6 -> 0.23, 0.51, 0.96), cyan (#06b6d4 -> 0.02, 0.71, 0.83)
    const colorChoices = [
      new THREE.Color(0x9333ea), // purple
      new THREE.Color(0x3b82f6), // electric blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0xa855f7), // light purple
    ];

    for (let i = 0; i < particleCount; i++) {
      // Spread across wide 3D space
      positions[i * 3] = (Math.random() - 0.5) * 220;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture circle
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.3, 'rgba(255,255,255,0.7)');
        gradient.addColorStop(0.7, 'rgba(255,255,255,0.2)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      map: createParticleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating 3D wireframe geometric nodes representing low-level systems & structural nodes
    const wireGeom = new THREE.IcosahedronGeometry(12, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const wireMesh1 = new THREE.Mesh(wireGeom, wireMat);
    wireMesh1.position.set(-45, 15, -20);
    scene.add(wireMesh1);

    const wireGeom2 = new THREE.OctahedronGeometry(8, 0);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const wireMesh2 = new THREE.Mesh(wireGeom2, wireMat2);
    wireMesh2.position.set(48, -22, -15);
    scene.add(wireMesh2);

    // Subtle Torus Node in background
    const torusGeom = new THREE.TorusGeometry(10, 0.4, 8, 32);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const torusMesh = new THREE.Mesh(torusGeom, torusMat);
    torusMesh.position.set(30, 28, -35);
    torusMesh.rotation.x = Math.PI / 4;
    scene.add(torusMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speedMultiplier = reducedMotion ? 0.08 : 0.4;

      if (!reducedMotion) {
        targetX += (mouseX - targetX) * 0.03;
        targetY += (mouseY - targetY) * 0.03;

        camera.position.x = targetX * 0.12;
        camera.position.y = -targetY * 0.12;
        camera.lookAt(scene.position);
      }

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.03 * speedMultiplier;
      particles.rotation.x = Math.sin(elapsedTime * 0.02 * speedMultiplier) * 0.05;

      // Rotate geometric meshes
      wireMesh1.rotation.x += 0.003 * speedMultiplier;
      wireMesh1.rotation.y += 0.005 * speedMultiplier;

      wireMesh2.rotation.y -= 0.004 * speedMultiplier;
      wireMesh2.rotation.z += 0.003 * speedMultiplier;

      torusMesh.rotation.z += 0.002 * speedMultiplier;
      torusMesh.rotation.x += 0.001 * speedMultiplier;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      particleMaterial.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      wireGeom2.dispose();
      wireMat2.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
