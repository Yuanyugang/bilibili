/**
 * Created by hxsd on 2016/11/23.
 */
// 创建一个主模块
var myapp = angular.module("myapp",["ionic"]);

// 配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tour",{
            url:"/tour",
            templateUrl:"templates/tour/tour.html"
        })

        .state("home",{
            url:"/home",
            templateUrl:"templates/home/home.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs/tabs.html"
        })
        .state("tabs.clothe",{
            url:"/clothe",
            views:{"tab-clothe":{templateUrl:"templates/clothe/clothe.html"}}
        })
        .state("tabs.clothe_detail",{
            url:"/clothe_detail",
            views:{"tab-clothe":{templateUrl:"templates/clothe_detail/clothe_detail.html"}}
        })
        .state("tabs.book",{
            url:"/book",
            views:{"tab-book":{templateUrl:"templates/book/book.html"}}
        })
        .state("tabs.cart",{
            url:"/cart",
            views:{"tab-cart":{templateUrl:"templates/cart/cart.html"}}
        })
        .state("tabs.search",{
            url:"/search",
            views:{"tab-search":{templateUrl:"templates/search/search.html"}}
        })
        .state("tabs.setting",{
            url:"/setting",
            views:{"tab-cart":{templateUrl:"templates/setting/setting.html"}}
        });

    // 如果以上路由都不匹配，使用这个备选方案
    $urlRouterProvider.otherwise("/tour");

});
myapp.controller("myCtrl",function($scope,$ionicListDelegate){
    // 准备要显示的商品数据
    $scope.data = [
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m01.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m02.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m03.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m04.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m05.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m06.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m06.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m08.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m09.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m01.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m02.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m03.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m04.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m05.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m06.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m06.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m08.jpg"},
        {title:"热门视频",desc:"2016最热视频",imgsrc:"./images/m09.jpg"},

    ];

    $scope.edit = function(product){
        alert("您已经分享");

        // 关闭选项按钮
        $ionicListDelegate.closeOptionButtons();
    };

    $scope.share = function(product){
        alert("您已经收藏");
        // 关闭选项按钮
        $ionicListDelegate.closeOptionButtons();
    };
});
myapp.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: '您有什么好的建议',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                {text: '返回'},
                {
                    text: '<b>发送</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                },
            ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
    };
})
 myapp.controller('listCtl',function($scope, $ionicActionSheet) {

        // 点击按钮触发，或一些其他的触发条件
        $scope.show = function() {

            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share</b> This' },
                    { text: 'Move' },
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };
    });