
// You should implement your task here.

module.exports = towelSort = matrix =>
    matrix && matrix.length ? matrix.reduce((result, el, index) => result.concat((index + 1) % 2 !== 0 ? el : el.reverse()), []) : [];
