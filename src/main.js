import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Background from "three/src/renderers/common/Background.js";
import { pass } from "three/tsl";
// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setX(-20);
camera.position.setZ(150);
camera.position.setY(20);

renderer.render(scene, camera);

//BACKGROUND
const bgGeo = new THREE.PlaneGeometry(300, 600, 30, 60); // wider, lower-res
const bgPositions = bgGeo.attributes.position;

for (let i = 0; i < bgPositions.count; i++) {
  const x = bgPositions.getX(i);
  const y = bgPositions.getY(i);

  const nx = x / 10;
  const ny = y / 10;

  const wave = Math.sin(x * 0.01) * Math.cos(y * 0.01);
  const rand = (Math.random() - 0.5) * 0.3;

  const height = Math.pow(Math.abs(wave + rand), 1.5) * 25; // much taller!

  bgPositions.setZ(i, height);
}

bgGeo.computeVertexNormals();

const bgMat = new THREE.MeshStandardMaterial({
  color: "#050424", // slightly darker shade
  flatShading: true,
});

const bgMountains = new THREE.Mesh(bgGeo, bgMat);
bgMountains.rotation.x = -Math.PI / 2;
bgMountains.position.set(0, 0, 0); // push back
bgMountains.position.y = 0; // raise up so it sits "on the horizon"

scene.add(bgMountains);
//STARS

function addStar() {
  const geometry = new THREE.SphereGeometry(0.5, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(800));

  star.position.set(x + 100, y, z + 100);
  if (x > 25) {
    scene.add(star);
  }
}
Array(200).fill().forEach(addStar);

// Lights

const pointLight = new THREE.PointLight("#95d2f5");
pointLight.position.set(70, 20, 150);
pointLight.intensity = 6000;

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 1.7;
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);
camera.lookAt(50, 20, 150);
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  camera.lookAt(50, 25, 150);
}

document.addEventListener("click", (e) => {
  const star = document.getElementById("shooting-star");

  // Randomize the X position along the top
  const randomStartX = Math.random() * window.innerWidth; // Random X between 0 and screen width
  const startY = 30; // Fixed Y position at the top
  const targetX = e.clientX;
  const targetY = e.clientY;

  const deltaX = targetX - randomStartX;
  const deltaY = targetY - startY;
  const duration = 700;

  star.style.left = `${randomStartX}px`;
  star.style.top = `${startY}px`;
  star.style.opacity = 1;

  const animation = star.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${deltaX}px, ${deltaY}px)` },
    ],
    {
      duration: duration,
      easing: "ease-out",
    }
  );

  const trailInterval = setInterval(() => {
    const progress = animation.currentTime / duration;
    if (progress >= 1) return;
    const currentX = randomStartX + deltaX * progress;
    const currentY = startY + deltaY * progress;
    spawnTrail(currentX, currentY);
  }, 20);

  animation.onfinish = () => {
    star.style.opacity = 0;
    clearInterval(trailInterval);
  };
});

function spawnTrail(x, y) {
  const trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
}

animate();

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
