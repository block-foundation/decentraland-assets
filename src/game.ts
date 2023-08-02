import { Entity, engine, Transform, GLTFShape } from 'decentraland-ecs'

// Create entity
const entity = new Entity()

// Create transform component to define position and rotation
const transform = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: Quaternion.Euler(0, 180, 0)
})

// Create shape component and attach 3D model
const shape = new GLTFShape("models/Your3DModel.glb")

// Assign components to entity
entity.addComponent(transform)
entity.addComponent(shape)

// Add entity to engine
engine.addEntity(entity)
