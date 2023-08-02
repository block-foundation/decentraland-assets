# decentraland-assets


Decentraland is a virtual reality platform powered by the Ethereum blockchain, allowing users to create, experience, and monetize content and applications. You can create "assets" for Decentraland in the form of wearables, virtual real estate, and scenes or experiences. Here's a general process to create a 3D asset or scene for Decentraland using the Decentraland's SDK:

Before you begin:
1. You need to have basic knowledge of 3D modeling software like Blender, 3D Studio Max, etc.
2. You need to have a basic understanding of coding, specifically in Typescript or Javascript.
3. Install Node.js on your computer if you haven't already.
4. Install the Decentraland CLI (Command Line Interface) using the following command in your terminal or command prompt: `npm install -g decentraland`.

Steps to create a 3D asset:

1. **Design your 3D Model**
   Create your 3D model using a 3D modeling software such as Blender or 3D Studio Max. Remember that Decentraland has specific performance constraints for 3D models, so keep your model simple and the polygon count low. Export your model as a `.glb` or `.gltf` file.

2. **Setting Up Your Environment**
   Create a new directory in your terminal for your project, navigate into it, and initialize a new Decentraland scene with the following commands:
    ```
    mkdir my-scene
    cd my-scene
    dcl init
    ```

3. **Modify the Scene**
   Your project directory should now contain a `src` directory, which contains a `game.ts` file and a `scene.json` file. The `game.ts` file is where you'll code the logic of your scene, and the `scene.json` file describes the scene's properties.

   - Add your 3D model to your project's directory. You might create an `assets` folder to keep things organized.

   - In the `game.ts` file, you'll import your 3D model and add it to your scene. Here's a simple example:
        ```typescript
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
        ```
4. **Preview Your Scene**
   In your terminal, while in your project's directory, run `dcl start` to preview your scene. This command opens up a new tab in your default web browser where you can see your asset in action.

5. **Deploy Your Scene**
   Once you're satisfied with your scene, you can deploy it to Decentraland. You'll need to own or rent some LAND in Decentraland to do this.

Remember that this is a very basic introduction to creating an asset for Decentraland. Depending on what you want to create, you might need to learn more about Decentraland's scripting language, including how to animate your models, respond to user inputs, or interact with Ethereum smart contracts.





- https://playtoearndiary.com/a-noobs-guide-to-decentraland/
- https://playtoearndiary.com/how-to-create-assets-for-decentraland/