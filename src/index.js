import keyInput from "./KeyInput";

const ratio = window.innerWidth / window.innerHeight ; 
const scene = new THREE.Scene();
//scene is basically the scene that we will be seeing , it is kind of a stage
const camera = new THREE.PerspectiveCamera( 75,ratio , 0.1, 1000 );
// this is the camera that lets the user see our metaverse
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0xffffff);
const dLight = new THREE.DirectionalLight(0xffffff , 0.5);
light.add(dLight);
scene.add(light);


const platform  = createObjects( 50, 0.1, 50 , 0x6699ff );

scene.add( platform );


const box = createObjects( 2,2,2 , 0xFF0000);
box.position.set(-2 , 0 ,5);
scene.add(box);

camera.position.set(5, 15, 15);

animate( );

renderer.render(scene , camera );

function animate() {

	requestAnimationFrame( animate );
    camera.lookAt(platform.position);
    
	renderer.render( scene, camera );
}

function createObjects(length , width ,  height   ,color ){

const geometry = new THREE.BoxGeometry( length , width , height );
const material = new THREE.MeshBasicMaterial( { color: color } );
const ground = new THREE.Mesh( geometry, material );

return ground;
}