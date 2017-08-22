
//
require("../../app.require");

//
angular
    .module("app.require")
    .component("schemaForm", {
        bindings: {},
        template: require("./schema-form.html"),
        controller: function($scope) {}
    });
