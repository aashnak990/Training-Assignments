var appModule = angular.module("Blogs",[]);
var BlogSection;
var addNew;
appModule.controller("blog-section", function($scope) {
    $scope.BlogSection = [
        {
          date: "Jan.07.2018",
          type: "Engineers Today",
          content: "New Content1 Aenean orci erat, placerat id pulvinar nec, tincidunt vel eros",
          imageUrl: "./MediaFiles/Blogs-1.jpg",
        },
        {
          date: "Jan.08.2018",
          type: "Technology Today",
          content: "New Content2 Aenean orci erat, placerat id pulvinar nec, tincidunt vel eros",
          imageUrl: "./MediaFiles/Blogs-2.jpg",
        },
        {
          date: "Jan.09.2018",
          type: "Life After 20 years",
          content: "New Content3 Aenean orci erat, placerat id pulvinar nec, tincidunt vel eros",
          imageUrl: "./MediaFiles/Blogs-3.jpg",
        },
        {
          date: "Jan.10.2018",
          type: "Technology Advantages",
          content: "New Content4 Aenean orci erat, placerat id pulvinar nec, tincidunt vel eros",
          imageUrl: "./MediaFiles/Blogs-4.jpg",
        },
        
        ];
            $scope.buttonclick = function(index){
            $scope.BlogSection.splice(index, 1)
       

            $scope.BlogSection.push(
                {
                    date: "Jan.07.2018",
                    type: "Women in Technology",
                    content: "New Content1 Aenean orci erat, placerat id pulvinar nec, tincidunt vel eros",
                    imageUrl: "./MediaFiles/Blogs-1.jpg",
                  },
                 )                  
            };   
});
