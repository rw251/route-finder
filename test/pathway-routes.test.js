"use strict";

var expect = require("chai").expect;
var routes = require("../lib/pathway-routes.js");
var describe = require("mocha").describe;
var it = require("mocha").it;
var fs = require('fs');
var dot = require('graphlib-dot');

describe("Routes", function() {
    describe(".getRoutes()", function(){
        it("should return an empty array for an empty pathway", function(done){
            var pathway = {};
            routes.getRoutes(pathway, function(err, data){
                if(err) return done(err);

                expect(data).to.be.instanceof(Array);
                expect(data).to.be.empty();

                done();
            });
        });
    });
    describe(".getRouteStrings()", function(){
        it("should return an empty array for an empty pathway", function(done){
            var graph = { nodes: function(){return [];}, edges: function(){return [];} };
            routes.getRouteStrings(graph, null, function(err, data){
                if(err) return done(err);

                expect(data).to.be.instanceof(Array);
                expect(data).to.be.empty();

                done();
            });
        });
    });
});