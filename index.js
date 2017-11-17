function produceDrivingRange(blockRange) {
   return function(startBlock, endBlock) {
      let start = parseInt(startBlock);
      let end = parseInt(endBlock);
      let travelDistance = Math.abs(end - start);
      let difference = blockRange - travelDistance;

      if (difference > 0) {
         return `within range by ${difference}`;
      } else {
         return `${Math.abs(difference)} blocks out of range`
      }
   }
}

function produceTipCalculator(tipPercentage) {
   return function(fare) {
      return fare * tipPercentage;
   }
}

function createDriver() {
   let driverId = 0;

   return class {
      constructor(name) {
         this.name = name;
         this.id = ++driverId;
      }
   }
}