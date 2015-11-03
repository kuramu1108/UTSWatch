/******

creating watch face decoration



********/
var decoMaterial = new THREE.MeshPhongMaterial( { color: 0x000000, specular:0x000000, shininess: 30, combine: THREE.MultiplyOperation} );
						            var decoMesh = createMesh(new THREE.ExtrudeGeometry(drawWatchFace(2), {
						                    amount: faceControls.amount + .5,
						                    bevelEnabled: false
						            }), this.isSelected, decoMaterial);
						            var decoMesh2 = decoMesh.clone();
						            var decoMesh4 = decoMesh.clone();
						            var decoMesh5 = decoMesh.clone();
						            var decoMesh7 = decoMesh.clone();
						            var decoMesh8 = decoMesh.clone();
						            var decoMesh10 = decoMesh.clone();
						            var decoMesh11 = decoMesh.clone();
						            var decoMesh3 = createMesh(new THREE.ExtrudeGeometry(drawStrap(4), {
						                    amount: faceControls.amount + .5,
						                    bevelEnabled: false
						            }), this.isSelected, decoMaterial);
						            var decoMesh6 = decoMesh3.clone();
						            var decoMesh9 = decoMesh3.clone();
						            var decoDisRadius = bezelInnerRadius - 5;
						            var ind = new THREE.Shape();
							        ind.moveTo(0, -4);
							        ind.lineTo(3, 4);
							        ind.lineTo(-3,4);
							        ind.lineTo(0, -4);
									var decoMesh12 = createMesh(new THREE.ExtrudeGeometry(ind, {
						                    amount: faceControls.amount + .5,
						                    bevelEnabled: false
						            }), this.isSelected, decoMaterial);
																								            
						            decoMesh.position.set(decoDisRadius/2, decoDisRadius*2/ Math.sqrt(5), faceControls.amount);
						            decoMesh2.position.set(decoDisRadius*2/Math.sqrt(5), decoDisRadius/2, faceControls.amount);
						            decoMesh3.position.set(decoDisRadius-2, 0, faceControls.amount);
						            decoMesh4.position.set(decoDisRadius*2/Math.sqrt(5), -decoDisRadius/2, faceControls.amount);
						            decoMesh5.position.set(decoDisRadius/2, -decoDisRadius*2/ Math.sqrt(5), faceControls.amount);
						            decoMesh6.rotation.z = Math.PI/2;
						            decoMesh6.position.set(0, -decoDisRadius+2, faceControls.amount);
						            decoMesh7.position.set(-decoDisRadius/2, -decoDisRadius*2/ Math.sqrt(5), faceControls.amount);
						            decoMesh8.position.set(-decoDisRadius*2/Math.sqrt(5), -decoDisRadius/2, faceControls.amount);
						            decoMesh9.position.set(-decoDisRadius+2, 0, faceControls.amount);
						            decoMesh10.position.set(-decoDisRadius*2/Math.sqrt(5), decoDisRadius/2, faceControls.amount);
						            decoMesh11.position.set(-decoDisRadius/2, decoDisRadius*2/ Math.sqrt(5), faceControls.amount);
						            decoMesh12.position.set(0, decoDisRadius-2, faceControls.amount);
						            
						            scene.add(decoMesh);
						            scene.add(decoMesh2);
						            scene.add(decoMesh3);
						            scene.add(decoMesh4);
						            scene.add(decoMesh5);
						            scene.add(decoMesh6);
						            scene.add(decoMesh7);
						            scene.add(decoMesh8);
						            scene.add(decoMesh9);
						            scene.add(decoMesh10);
						            scene.add(decoMesh11);
						            scene.add(decoMesh12);