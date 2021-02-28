let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true});

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  
  // depth, height, width 
  const geometry = new THREE.BoxGeometry( .05, 2, 3);
  
  // Add any image to /textures and load here
  const texture = new THREE.TextureLoader().load('textures/water.jpg');

  const material = new THREE.MeshBasicMaterial({ map: texture });

  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 4;

}


function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.02;

  renderer.render(scene, camera);
}

// When window resizes, shape stays in center of screen
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();