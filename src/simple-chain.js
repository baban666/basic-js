const chainMaker = {
  chain: [],
  result: '',
  getLength() {
    return this.chain.length
  },
  addLink(value = '') {
    this.chain.push('( '+ value +' )');
    return this;
  },
  removeLink(position) {
    if(this.positionDetect(position)){
      this.chain.splice(position - 1, 1);
      return this;
    }else {
      this.chain = [];
      throw Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  },

  positionDetect(value){

    if(!Number.isInteger(value)){
      return false;
    }
    if(value < 1 ){
      return false;
    }
    if(value > this.getLength()){
      return false;
    }
    return true;
  }

};

module.exports = chainMaker;
