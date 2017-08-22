
require("./bootstrap");
require("./app.require");
require("./components/layout/layout");
require("./components/page-home/page-home");
require("./components/schema-form/schema-form");

angular
    .module("app", ["app.require", "ui.router", "schemaForm"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", { url: "/", template: "<page-home/>" })
    });
