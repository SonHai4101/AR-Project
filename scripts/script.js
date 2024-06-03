/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

// How to load in modules
const Scene = require('Scene');
// const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');
const Animation = require('Animation');

const timeDriver = Animation.timeDriver({durationMilliseconds: 8000, loopCount: Infinity, mirror: false});
const sampler = Animation.samplers.linear(0, 2 * Math.PI);

// Enter look-at-target and object that needs to look at the target here
// const targetName = 'target';

(async function () {  // Enables async/await in JS [part 1]

  Diagnostics.log("Animation start");
  // To access class properties
  const [myCar, myTomato, myCat, myTable, myCarrot,
    myBicycle, myBanana, myTelevision, myOrange, myUmbrella] = await Promise.all([
    Scene.root.findFirst('low_poly_car'),
    Scene.root.findFirst('tomatoObj'),
    Scene.root.findFirst('CatObj'),
    Scene.root.findFirst('tableObj'),
    Scene.root.findFirst('carrotObj'),
    Scene.root.findFirst('bycicleObj'),
    Scene.root.findFirst('bananaObj'),
    Scene.root.findFirst('tvObj'),
    Scene.root.findFirst('orangeObj'),
    Scene.root.findFirst('umbrellaObj'),
  ]).catch((error) => Diagnostics.log(error.message));

  myCar.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myTomato.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myCat.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myTable.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myCarrot.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myBicycle.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myBanana.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myTelevision.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myOrange.transform.rotationZ = Animation.animate(timeDriver, sampler);
  myUmbrella.transform.rotationZ = Animation.animate(timeDriver, sampler);
  // myObject2.transform.rotationZ = Animation.animate(timeDriver, sampler);
  mynuber.transform.ratiton
  timeDriver.start();á

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
