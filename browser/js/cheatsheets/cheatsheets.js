app.config(function ($stateProvider) {

    $stateProvider.state('cheats', {
        url: '/cheats',
        templateUrl: 'js/cheatsheets/cheatsheets.html',
        controller: 'CheatCtrl'
    });

});

app.controller('CheatCtrl', function ($scope) {

    $scope.sheets = {

        Express: "app.use(Drugs)",
        Sequelize: "INSERT * INTO *"

    };

});