"use strict";

angular.module("pjFramework").directive("pjFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'

        },
        controller: "pjFrameworkController",
        templateUrl: "ext-modules/pjFramework/pjFrameworkTemplate.html"
    };
});