"use strict";

angular.module('pjMenu').directive("pjMenu", function () {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/pjMenu/pjMenuTemplate.html',
        controller: 'pjMenuController',
        link: function (scope, el, attr) {

        }

    };
});
