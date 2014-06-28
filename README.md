# page-vue-example

A basic example to show how vue.js and page.js can be used together to create multi-view routing with powerful MVVM logic.

Each component has data for all three views. When things are more complex you might find it better suited to have separate components for each view container.

## How it works

Here is our navbar and our three column app. We define our v-view on each, this value will change on route changes. Inside we have our template language with the name of the data we will use.

``` index.html
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/page1">Page 1</a></li>
		<li><a href="/page2">Page 2</a></li>
	</ul>
	<div id="app">
		<div id="leftpane" v-view="leftView">{{leftData}}</div>
		<div id="centerpane" v-view="mainView">{{msg}}</div>
		<div id="rightpane" v-view="rightView">{{rightData}}</div>
	</div>
```

A Vue app is defined on the element with ```id="app"``` with our starting v-view value.

``` app.js
var app = new Vue({
	el: '#app',
	data: {
		leftView: 'home',
		mainView: 'home',
		rightView: 'page1'
	}
})
```

Each vue component is defined like so:

``` app.js
Vue.component('home', {
	template: '<h1>Home Page</h1><div class="content"><content/></div>',
	created: function(){
		this.leftData = "Beginning Left View!"
		this.msg = "Hoooooooo ..mme!"
		this.rightData = "You will never see me !"
	}
});
...
var app = NewV...
```

Then we define a function for each route:

``` app.js
...
function index(){
	app.leftView = "home";
	app.mainView = "home";
	app.rightView = "page1";
};

function page1(){
...
```

And then finally we get page.js to handle the routes:

``` app.js
...
page('/', index);
page('/page1', page1);
page('/page2', page2);
page();
```

Hope this helped someone! Let me know if there is anything to fix!

Feel free to contact me at collinglass@gmx.com




