"use strict";

angular.module('pjMenu').directive("pjMenuItem", function () {
    return {
        require: '^pjMenu',
        scope: {
            label: '@' 
        },
        templateUrl: 'ext-modules/pjMenu/pjMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

        }

    };
});
