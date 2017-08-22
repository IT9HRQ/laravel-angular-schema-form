
//
require("../../app.require");

//
angular
    .module("app.require")
    .component("layout", {
        bindings: {},
        template: require("./layout.html"),
        controller: function($scope) {}
    });
