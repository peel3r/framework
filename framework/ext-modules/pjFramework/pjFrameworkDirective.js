"use strict";

angular.module("pjFramework").directive("pjFramework", function () {
    return {
        transclude: false,
        scope: {

        },
        controller: "pjFrameworkController",
        templateUrl: "ext-modules/pjFramework/pjFrameworkTemplate.html"
    };
});