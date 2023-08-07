<div align="right">

[![GitHub License](https://img.shields.io/github/license/block-foundation/blocktxt?style=flat-square&logo=readthedocs&logoColor=FFFFFF&label=&labelColor=%23041B26&color=%23041B26&link=LICENSE)](https://github.com/block-foundation/decentraland-assets/blob/main/LICENSE)
[![devContainer](https://img.shields.io/badge/Container-Remote?style=flat-square&logo=visualstudiocode&logoColor=%23FFFFFF&label=Remote&labelColor=%23041B26&color=%23041B26)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/block-foundation/decentraland-assets)

</div>

---

<div>
    <img align="right" src="https://raw.githubusercontent.com/block-foundation/brand/master/src/logo/logo_gray.png" width="96" alt="Block Foundation Logo">
    <h1 align="left">Decentraland Assets</h1>
    <h3 align="left">Block Foundation Metaverse Resources</h3>
</div>

---

<img align="right" width="75%" src="https://raw.githubusercontent.com/block-foundation/brand/master/src/image/repository_cover/block_foundation-structure-03-accent.jpg"  alt="Block Foundation Brand">

### Contents

- [Introduction](#introduction)
- [Colophon](#colophon)

<br clear="both"/>

---

<div align="right">

[![Report a Bug](https://img.shields.io/badge/Report%20a%20Bug-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/block-foundation/decentraland-assets/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=bug_report.yml)
[![Request a Feature](https://img.shields.io/badge/Request%20a%20Feature-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/block-foundation/decentraland-assets/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=feature_request.yml)
[![Ask a Question](https://img.shields.io/badge/Ask%20a%20Question-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/block-foundation/decentraland-assets/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=question.yml)
[![Make a Suggestion](https://img.shields.io/badge/Make%20a%20Suggestion-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/block-foundation/decentraland-assets/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=suggestion.yml)
[![Start a Discussion](https://img.shields.io/badge/Start%20a%20Discussion-GitHub?style=flat-square&&logoColor=%23FFFFFF&color=%23E1E4E5)](https://github.com/block-foundation/decentraland-assets/issues/new?assignees=&labels=Needs%3A+Triage+%3Amag%3A%2Ctype%3Abug-suspected&projects=&template=discussion.yml)

</div>

## Introduction

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

    ``` sh
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

## Resources

- https://playtoearndiary.com/a-noobs-guide-to-decentraland/
- https://playtoearndiary.com/how-to-create-assets-for-decentraland/

---

## Colophon

### Authors

This is an open-source project by the **[Block Foundation](https://www.blockfoundation.io "Block Foundation website")**.

The Block Foundation mission is enabling architects to take back initiative and contribute in solving the mismatch in housing through blockchain technology. Therefore the Block Foundation seeks to unschackle the traditional constraints and construct middle ground between rent and the rigidity of traditional mortgages.

website: [www.blockfoundation.io](https://www.blockfoundation.io "Block Foundation website")

### Development Resources

#### Contributing

We'd love for you to contribute and to make this project even better than it is today!
Please refer to the [contribution guidelines](.github/CONTRIBUTING.md) for information.

### Legal Information

#### Copyright

Copyright &copy; 2023 [Stichting Block Foundation](https://www.blockfoundation.io/ "Block Foundation website"). All Rights Reserved.

#### License

Except as otherwise noted, the content in this repository is licensed under the
[Creative Commons Attribution 4.0 International (CC BY 4.0) License](https://creativecommons.org/licenses/by/4.0/), and
code samples are licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

Also see [LICENSE](https://github.com/block-foundation/community/blob/master/src/LICENSE) and [LICENSE-CODE](https://github.com/block-foundation/community/blob/master/src/LICENSE-CODE).

#### Disclaimer

**THIS SOFTWARE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
