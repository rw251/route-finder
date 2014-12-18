var _ = require('lodash');

exports = module.exports = {};

exports.getRoutes = function(graph, callback) {
    var routes = [];

    return callback(null, routes);
};

/*
 * Get all nodes that don't have edges inbound.  These
 * are our "initial" nodes - our starting points.
 */
exports.getInitialNodes = function(graph, lookup, callback) {
    var initialNodes = _.zipObject(graph.nodes(), graph.nodes());

    graph.edges().forEach(function(el, index, array){
        if(initialNodes[el.w]) {
            delete initialNodes[el.w];
        }
    });

    var initialNodeArray = _.keys(initialNodes);

    return callback(null, initialNodeArray);
};