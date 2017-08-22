
//
require("../../app.require");

//
angular
    .module("app.require")
    .component("pageHome", {
        bindings: {},
        template: require("./page-home.html"),
        controller: function($scope) {}
    });
