module.exports = function createDreamTeam(members) {
  let firstLetters = [];

  if (!Array.isArray(members)){
    return false;
  }
  firstLetters =  members.map(item => {
    if (typeof item === "string"){
      return item.trim().toUpperCase()[0]
    }
  });
  return firstLetters.sort().join('')

};
