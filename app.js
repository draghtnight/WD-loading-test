window.addEventListener('DOMContentLoaded', init);

function init() {
  // Create the scene
  const scene = new THREE.Scene();

  // Create the camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create an array to hold the cubes
  const cubes = [];

  // Create a function to generate random colors
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Create cubes with random colors
  const cubeCount = 10;
  for (let i = 0; i < cubeCount; i++) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5
    );
    cubes.push(cube);
    scene.add(cube);
  }

  // Create code snippets in the background
  const snippetCount = 50;
  for (let i = 0; i < snippetCount; i++) {
    const snippet = document.createElement('div');
    snippet.className = 'code-snippet';
    snippet.style.backgroundColor = getRandomColor();
    snippet.style.left = Math.random() * window.innerWidth + 'px';
    snippet.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(snippet);
  }

  // Animate the scene
  function animate() {
    requestAnimationFrame(animate);

    // Change the color of the cubes
    cubes.forEach(cube => {
      cube.material.color.set(getRandomColor());
    });

    renderer.render(scene, camera);
  }

  animate();

  // Hide the loading screen when the content is loaded
  window.addEventListener('load', () => {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.style.display = 'none';
  });
}
