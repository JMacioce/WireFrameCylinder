//create scene
const scene = new THREE.Scene();

//create camera - PerspectiveCamera(distance, aspect ratio, min distance, max distance)
const camera = new THREE.PerspectiveCamera(50, 2/1, .1, 1000);
camera.position.z = 10;

//render scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 300); //(width, height)
document.body.appendChild(renderer.domElement);

//create 3D object(s)
const geometry = new THREE.CylinderBufferGeometry(2, 2, 7, 50); //(top diameter, bottom diameter, length, how many lines make up the cylinder)
const material = new THREE.MeshBasicMaterial({
    color: '#8bc34a',
    wireframe: true
});
const cylinder = new THREE.Mesh(geometry, material);
// The way objects work to my understanding in Three.js 
// is that they are called meshes, and a mesh is a combination 
// of a piece of geometry AND a material that covers that geometry.

//add object(s) to scene
scene.add(cylinder);

//animate object(s)
const animate = () => {
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    renderer.render(scene, camera);
};

//call animate to display
animate();