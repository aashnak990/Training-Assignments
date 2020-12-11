var appModule = angular.module("Myapp",['ui.grid']);



appModule.controller("performanceController", function($scope, $http) {

    /* Performers Section starts */
    $http.get('https://aashnak990.github.io/json/Performers.json')    
    .then(function(response){
        $scope.performerCandidates = response.data;
    });
    /* Performers Section ends */ 

    /* ui-grid Section starts */
    $scope.eligibleCandidates = {
      enableGridMenus: false,
      enableSorting: false,
      enableFiltering: false,
      enableCellEdit: false,
      enableColumnMenus: false,
      enableHorizontalScrollbar: 0,
      enableVerticalScrollbar: 1,
      paginationPageSizes: [5, 10, 20, 30],
      paginationPageSize: 10,
      useExternalPagination: true,

    columnDefs:[
      {
            name:'Name',
            displayName:'Candidate-Name',
      },
      {
            name:'department',
            displayName:'Department',
      },
      {
            name:'Action',
            cellTemplate:'<button class="btn primary m-2 bg-success text-white" ng-click="grid.appScope.showMe(row)" >Add</button>'
      },
    ]

    };

    $http.get('https://aashnak990.github.io/json/Eligible.json')
    .then(function(response){
        $scope.eligibleCandidates.data = response.data;
    });

    $scope.showMe = function(row){
        $scope.performerCandidates.push({ 
            imageUrl: row.entity.imageUrl,
            Name : row.entity.Name
          });
          var index = $scope.eligibleCandidates.data.indexOf(row.entity);
          $scope.eligibleCandidates.data.splice(index, 1);
    };

    /* ui-grid Section ends */
});
