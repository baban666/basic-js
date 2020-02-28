module.exports = function countCats(matrix) {
  let cat = '^^',
      result = 0;
  matrix.forEach(item => {

    item.forEach((current) => {
        if (current == cat) {
          result++;
        }
      });
  });

  return result;
};



