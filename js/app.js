Vue.config('debug', true)

Vue.component('home', {
	template: '<h1>Home Page</h1><div class="content"><content/></div>',
	created: function(){
		this.leftData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra et eros vitae malesuada. Vestibulum viverra eros vel est condimentum ornare. Vestibulum blandit est in arcu rhoncus, at mollis augue vehicula. Nam volutpat dui non porta pellentesque. Curabitur et dui vel risus adipiscing rhoncus ac sit amet dui. Nam placerat et tellus vitae lobortis. Vivamus non purus vel felis luctus vehicula sed eget ipsum. Praesent eleifend sed lectus ut sodales. Curabitur imperdiet turpis nulla, convallis molestie lacus pellentesque ut. Nullam pretium accumsan odio, non euismod quam lacinia quis. Nam venenatis faucibus urna, at congue massa lacinia ut!"
		this.msg = "Hoooooooo ..mme!"
		this.rightData = "You will never see me !"
	}
});

Vue.component('page1', {
	template: '<h1>Page 1</h1><div class="content"><content/></div>',
	created: function(){
		this.leftData = "Page 1 and 2 Left Data!"
		this.msg = "Nunc vulputate, sem eget bibendum iaculis, metus dui condimentum orci, at scelerisque leo enim ut massa. Morbi faucibus eu justo sit amet tempor. Sed viverra facilisis sollicitudin. Nunc interdum ultricies velit non fermentum. Pellentesque venenatis lorem non ante pharetra, et venenatis eros bibendum. Cras ultrices, nisi ac eleifend tempus, urna ante sollicitudin nisl, eget gravida metus sapien eget dui. Sed interdum at ipsum non tempor. Maecenas egestas orci non lorem auctor pretium. Morbi aliquet, lectus eu adipiscing tempus, arcu velit porta felis, convallis aliquet mauris arcu non augue. Integer ornare euismod dictum. Aenean eget tortor et diam hendrerit venenatis. Etiam posuere luctus nibh et scelerisque.!"
		this.rightData = "Beginning and Page 1 Right View!"
	}
});

Vue.component('page2', {
	template: '<h1>Page 2</h1><div class="content"><content/></div>',
	created: function(){
		this.leftData = "You will never see this!"
		this.msg = "Look at page 2!"
		this.rightData = "Vivamus in dolor eu nibh tempor volutpat quis vel ligula. Nulla in consectetur purus. Etiam dignissim sapien vel lorem interdum, nec vulputate sapien tincidunt. Nam molestie malesuada tellus. Vivamus consequat tellus nunc, et pharetra tellus suscipit vitae. In at massa non lacus gravida viverra. Nulla ornare cursus rhoncus. Sed semper, nibh in adipiscing eleifend, lorem dui volutpat dui, vitae malesuada ipsum leo id urna. Nulla sed nibh adipiscing, tincidunt mauris vitae, eleifend eros. Nunc eleifend blandit sollicitudin. Maecenas dapibus porttitor justo, in posuere nibh ultricies nec. Sed ac odio commodo, lobortis orci eu, aliquam magna. Morbi eu convallis urna, eu aliquam dui. Mauris ut neque non purus aliquet imperdiet. Nunc sit amet dolor mauris. Morbi sit amet eleifend lorem.!"
	}
});

var app = new Vue({
    el: '#app',
    data: {
        leftView: 'home',
        mainView: 'home',
        rightView: 'page1'
    }
})

function index(){
	app.leftView = "home";
	app.mainView = "home";
	app.rightView = "page1";
};

function page1(){
	app.leftView = "page1";
	app.mainView = "page1";
	app.rightView = "page1";
};

function page2(){
	app.mainView = "page2";
	app.rightView = "page2";
};

page('/', index);
page('/page1', page1);
page('/page2', page2);
page();