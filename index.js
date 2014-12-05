"use strict";

var fs = require('fs')
var dot = require('graphlib-dot')

var digraph = dot.read(fs.readFileSync('examples/stroke.dot', 'UTF-8'));

console.log(digraph.nodes());
console.log(digraph.edges());
