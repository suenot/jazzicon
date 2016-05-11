var Raphael = require('raphael')

function newPaper() {
  var container = document.createElement('div')
  container.style.borderRadius = '50px'
  container.style.overflow = 'hidden'
  container.style.padding = '0px'
  container.style.margin = '0px'
  container.style.width = '100px'
  container.style.height = '100px'
  container.style.display = 'inline-block'
  var canvas = document.createElement('canvas')
  container.appendChild(canvas)
  var paper = Raphael(container, 100, 100);
  return {
    paper: paper,
    container: container,
  }
}

module.exports = newPaper