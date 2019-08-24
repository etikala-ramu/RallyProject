(function(){
    var app = angular.module("rally-app",[]);
      app.controller("rallyController",['$scope','$http',function($scope,$http){
          $scope.questions=[{"id":1,"question":"Lower arms bushes and bending ","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":2,"question":"Stabiliser bar link and bush","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":3,"question":"Tire rod","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":4,"question":"Ball joint","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":5,"question":"Underchassis bolts (Front & Rear) ","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":6,"question":"All engine bedding & bolts","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":7,"question":"Exhaust general checkup","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":8,"question":"Clutch & clutch pad checkup","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":9,"question":"Air filter cleaning","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":10,"question":"Throttle check","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":11,"question":"Driveshaft & belts","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":12,"question":"Steering centering","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":13,"question":"Fuel line/tank","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":14,"question":"Sump guard (front/rear)","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":15,"question":"Suspension check","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":16,"question":"Electrical check","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":17,"question":"Battery & wires","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":18,"question":"All hose pipes checkup","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":19,"question":"Windshield spray water & cleaning","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":20,"question":"Mudflap and fender lining ","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":21,"question":"Bonnet pin lock ","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":22,"question":"Boot pink lock","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":23,"question":"Water bottles","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":24,"question":"Radiator and Radiotor fan checkup","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":25,"question":"Seats/Harnesses checkup","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":26,"question":"Intercom fixing","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":27,"question":"In car camer fixing If any","type":{"id":1,"name":"GENERAL CHECKUP"}},{"id":28,"question":"Engine Oil Leakagae/Level Checkup ","type":{"id":2,"name":"OIL"}},{"id":29,"question":"Gearbox Oil leakage/level checkup ","type":{"id":2,"name":"OIL"}},{"id":30,"question":"Brake oil leakage/level checkup ","type":{"id":2,"name":"OIL"}},{"id":31,"question":"Coolant oil leakage/level checkup ","type":{"id":2,"name":"OIL"}},{"id":33,"question":"Brake pad cleaning ","type":{"id":3,"name":"BRAKES"}},{"id":34,"question":"Brake caliper pink checkup ","type":{"id":3,"name":"BRAKES"}},{"id":35,"question":"Rear brake cleaning ","type":{"id":3,"name":"BRAKES"}},{"id":36,"question":"Handbrake","type":{"id":3,"name":"BRAKES"}},{"id":38,"question":"Wheel stud ","type":{"id":4,"name":"WHEELS"}},{"id":39,"question":"Wheel nuts ","type":{"id":4,"name":"WHEELS"}},{"id":40,"question":"Spare wheel aircheck/jack/jack rod ","type":{"id":4,"name":"WHEELS"}},{"id":41,"question":"wheel spanner ","type":{"id":4,"name":"WHEELS"}},{"id":42,"question":"Wheel alignment ","type":{"id":4,"name":"WHEELS"}},{"id":43,"question":"Wheel changing/rotation ","type":{"id":4,"name":"WHEELS"}},{"id":44,"question":"Air pressure ","type":{"id":4,"name":"WHEELS"}},{"id":45,"question":"New Tyre fixing","type":{"id":4,"name":"WHEELS"}},{"id":47,"question":"Fire Extinguisher check ","type":{"id":5,"name":"SAFTEY EQUIPMENTS"}},{"id":48,"question":"first aid kit ","type":{"id":5,"name":"SAFTEY EQUIPMENTS"}},{"id":49,"question":"Red Triangle ","type":{"id":5,"name":"SAFTEY EQUIPMENTS"}},{"id":50,"question":"Seat belt cutteer ","type":{"id":5,"name":"SAFTEY EQUIPMENTS"}},{"id":51,"question":"collect driver and co driver Saftey gear","type":{"id":5,"name":"SAFTEY EQUIPMENTS"}}]
          $scope.types=[{"id":1,"name":"GENERAL CHECKUP"},
          {"id":2,"name":"OIL"},
          {"id":3,"name":"BRAKES"},
          {"id":4,"name":"WHEELS"},
          {"id":5,"name":"SPECIFIC EQUIPMENTS"}];
          $scope.driver= {};
          
          angular.forEach($scope.questions,function(value,index){
            value.comments='';
            value.name='';
            value.checked='';
            
          })
         // $scope.questions.forEach($scope.addtoFromData);
          
         
        // console.log($scope.questions);
         
           //$scope.rallyInfo={};
           $scope.saveData=function(){
                   console.log($scope.driver);
                   console.log($scope.questions);
             }
             
           }]);
  
      
    //  $scope.types=[{"id":1,"name":"GENERAL CHECKUP"},
    //     {"id":2,"name":"OIL"},
    //     {"id":3,"name":"BRAKES"},
    //     {"id":4,"name":"WHEELS"},
    //     {"id":5,"name":"SPECIFIC EQUIPMENTS"}];
     
})();


