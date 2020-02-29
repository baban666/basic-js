 module.exports = class DepthCalculator {

     calculateDepth(arr) {
         if(!arr.some(elem => Array.isArray(elem))) {
             return 1;
         } else{
             return 1 + this.calculateDepth(arr.flat());
         }
     }
};

