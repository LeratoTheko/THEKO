import * as THREE from 'three';

            const length = 12, width = 8;

            const shape = new THREE.Shape();
            shape.moveTo( 0,0 );
            shape.lineTo( 0, width );
            shape.lineTo( length, width );
            shape.lineTo( length, 0 );
            shape.lineTo( 0, 0 );

            const extrudeSettings = {
	            steps: 2,
	            depth: 16,
	            bevelEnabled: true,
	            bevelThickness: 1,
	            bevelSize: 1,
	            bevelOffset: 0,
	            bevelSegments: 1
            };


			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 
                75, 
                window.innerWidth / window.innerHeight, 
                0.1, 1000 
                );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const geometry2 = new THREE.ConeGeometry(1, 1, 1);
			const material2 = new THREE.MeshBasicMaterial( { color: '#4CAF50' });
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff01 } );
			const cube = new THREE.Mesh( geometry, material );
            const cone = new THREE.Mesh( geometry2, material2 );
            const object = new THREE.Mesh( geometry, material );
			scene.add( cube, cone );
            scene.add( object)

			camera.position.z = 5;
            //cube.camera.position.z = 15;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

                cone.rotation.x += 0.01;
                cone.rotation.y += 0.01;

				renderer.render( scene, camera );
			}
            animate(); 

