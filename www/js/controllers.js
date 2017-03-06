var items = [
    { id: 1, name:"Tent", pics:[{url:"tent.jpg"},{url:"tente2.jpg"}], punchline:"Good way to stay alive at night.", price:50, desc:{title:"Survive",text:"With this tiny building, you'll be able to survive until there is sand storm. If there is one, you'll die. It's sure at 99%."}, owned:false },
    { id: 2, name:"Base", pics:[{url:"base.jpg"},{url:"base2.jpg"},{url:"base3.jpg"},{url:"base4.jpg"}], punchline:"A professional building with solid wall.", price:1500, desc:{title:"Survival enhancer",text:"Buying a base is a great decision. Since it's a large amount of coins you'll need to think before. But once you've bought it, you may appreciate life a little more. Even if you're alone, you're well accomodated."}, owned:false },
    { id: 3, name:"R152", pics:[{url:"vehicle.jpg"},{url:"vehicle2.jpg"},{url:"vehicle3.jpg"}], punchline:"Electric vehicle, 1 place, 300km range.", price:300, desc:{title:"Exploration",text:"If you found you habitacle way too small the R512 is a nice vehicle for one personn. It's able to travel around 300km under the sun and 10km at night. Be carefull, the vehicle can stock for 1 day of oxygen."}, owned:false },
	{ id: 4, name:"Electric generator", pics:[{url:"electric.jpg"}], punchline:"Make your own electricity.", price:3, desc:{title:"Exploration",text:"This is a good electric generator. But you'll need oil to make it running. If you haven't, it will be useless."}, owned:false },
	{ id: 5, name:"Clara", pics:[{url:"clara.jpg"},{url:"clara2.jpg"},{url:"clara3.jpg"}], punchline:"At least, you won't be alone anymore...", price:5, desc:{title:"XXX",text:"Clara is a good friend and a good girlfriend : she never spoke, never cries and cost only $5. But she can't cook nor clean the house. She got a lot of hole for your only pleasure."}, owned:false },
	{ id: 6, name:"Solar panel", pics:[{url:"solar.jpg"},{url:"solar2.jpg"},{url:"solar3.jpg"}], punchline:"Make electricity thanks to the sun", price:100, desc:{title:"A green energy",text:"Number of panel : x5. Each panel produce 1KW/h. Delivered with instructions."}, owned:false },
	{ id: 7, name:"Internet", pics:[{url:"internet.jpg"},{url:"internet2.jpg"},{url:"internet3.jpg"},{url:"internet4.jpg"},{url:"internet5.jpg"}], punchline:"A 56k connection to the WWW.", price:98, desc:{title:"An opening to manking",text:"Get your own connection with a fabulous connection (56k)! You'll be able to send and receive message, consult website and even go on facebook (if you take your week)!"}, owned:false },
	{ id: 8, name:"Combinaison", pics:[{url:"combi.jpg"},{url:"combi2.jpg"}], punchline:"Your first suit.", price:0, desc:{title:"Human federation has offered you your actual survival suit. You can breath for 5 hours until reloading."}, owned:true }
  ];

var user = {
	name:"Kévin Tan",
	credits:5000
}
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
	
	$scope.user = user;

  // Form data for the login modal
  $scope.loginData = {};

  // Create the tuto modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modalLogin.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
	
	
	
	
	// Form data for the login modal
  $scope.registerData = {};

  // Create the tuto modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalRegister = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

  // Open the login modal
  $scope.register = function() {
    $scope.modalRegister.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doRegister = function() {
    console.log('Doing register', $scope.registerData);

	  // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };
	
	
	
	// Form data for the login modal
  $scope.tutoData = {};

  // Create the tuto modal that we will use later
  $ionicModal.fromTemplateUrl('templates/tuto.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeTuto = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.tuto = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doTuto = function() {
    console.log('Doing tuto', $scope.tutoData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeTuto();
    }, 1000);
  };
})

.controller('ItemsCtrl', function($scope) {
	$scope.items = items;
	$scope.user = user;
})

.controller('ProfilCtrl', function($scope) {
	$scope.user = user;
	$scope.statistic = "active";
	$scope.activity = "";
	$scope.activate = function(num){
		if(num == 1){
			$scope.statistic = "active";
			$scope.activity = "";
		} else {
			$scope.statistic = "";
			$scope.activity = "active";
		}
	}
})

.controller('ItemCtrl', function($scope, $stateParams, $timeout) {
	$scope.item = items[$stateParams.ItemId-1];
	$scope.user = user;
	
	$scope.add = false;
	$scope.adding = 0;
	
	$scope.throw = false;
	$scope.throwing = 0;
	
	$scope.buy = function(id, amount){
		if(!$scope.item.owned && $scope.user.credits>=amount){
			$scope.user.credits -= amount;
			items[id-1].owned = true;
			$scope.item.owned = true;
			$scope.adding = amount;
			$scope.add = true;
			$timeout(function(){
				$scope.add = false;
			}, 700);
		}
	}
	$scope.sell = function(id, amount){
		if($scope.item.owned) {
			$scope.user.credits += amount/2;
			items[id-1].owned = false;
			$scope.item.owned = false;
			
			$scope.throwing = amount/2;
			$scope.throw = true;
			$timeout(function(){
				$scope.throw = false;
			}, 700);
		}
	}
})

.controller('ChatCtrl', function($scope) {
	$scope.user = user;
	$scope.input = "";
	$scope.keyboard = "";
	$scope.messages = [];
	$scope.who = true;
	$scope.whoIs = function(pers){
		if(pers == $scope.user.name) return "light";
		else return "green";
	}
	$scope.sendMessage = function(msg){
		if(msg != ""){
			if($scope.who){
				var message = {
					dest : $scope.user.name,
					text : msg
				}
				$scope.who = false;
			} else{
				var message = {
					dest : "someone",
					text : msg
				}
				$scope.who = true;
			}
			$scope.messages.push(message);
			$scope.input = "";
		}
		var toScroll = document.getElementById("toScroll");
		console.log(toScroll.scrollHeight);
		console.log(toScroll.scrollTop);
		toScroll.scrollTop = toScroll.scrollHeight + 242;
	}
	$scope.valid = function(e, msg){
		if(e.keyCode == 13) $scope.sendMessage(msg);
	}
});
