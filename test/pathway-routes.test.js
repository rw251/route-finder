var expect = require("chai").expect;
var routes = require("../lib-cov/pathway-routes.js");

describe("Routes", function() {
    describe("#getRoutes()", function(){
        it("should return an empty array for an empty pathway", function(){
            var pathway = {};
            var results = routes.getRoutes(pathway);
                                    
            expect(results).to.be.instanceof(Array);
            expect(results).to.be.empty();
        });
    });
});
