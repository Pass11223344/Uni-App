
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/Loading/loading","pages/My/My","pages/playerView/playerView","pages/albumPage/albumPage","pages/city/city","pages/songslist/songslist","pages/comments/comments"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"red","list":[{"pagePath":"pages/index/index","iconPath":"static/首页.svg","selectedIconPath":"./static/首页 - 副本.svg","text":"首页"},{"pagePath":"pages/My/My","iconPath":"static/my.svg","selectedIconPath":"static/my - 副本.svg","text":"我的"},{"pagePath":"pages/city/city","iconPath":"./static/社区.svg","selectedIconPath":"static/社区 - 副本.svg","text":"社区"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"firstUniApp","compilerVersion":"3.96","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTitleText":"首页"}},{"path":"/pages/Loading/loading","meta":{},"window":{"navigationBarTitleText":"","transparentTitle":"always"}},{"path":"/pages/My/My","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/playerView/playerView","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/albumPage/albumPage","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/city/city","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/songslist/songslist","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/comments/comments","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
