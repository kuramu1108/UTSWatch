function onDocumentTouchStart( event ) {
				
	event.preventDefault();
							
	event.clientX = event.touches[0].clientX;
	event.clientY = event.touches[0].clientY;
	onDocumentMouseDown( event );
			
}	
						
function onDocumentMouseDown( event ) {
			
	event.preventDefault();
							
	mouse.x = ( event.clientX / $("#WebGLcanvas").width() ) * 2 - 1;							
	mouse.y = - ( event.clientY / $("#WebGLcanvas").height() ) * 2 + 1;
								console.log(event.clientX);
								var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
								//projector.unproject( vector, camera );
								vector.unproject(camera);
								//raycaster.setFromCamera( mouse, camera );
								raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
								var intersects = raycaster.intersectObjects( meshCollection, true);
								if ( intersects.length > 0 ) {
									if (SELECTED){
										SELECTED.object.material.color.setHex( 0x96b0be );
										SELECTED.object.controler.isSelected = false;
									}
									intersects[ 0 ].object.material.color.setHex( 0xec5252 );
									SELECTED = intersects[0];
									SELECTED.object.controler.isSelected = true;
								}
							
						}
