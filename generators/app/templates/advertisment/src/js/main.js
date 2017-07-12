var app = {
	BANNERW: 300,
	BANNERH: 600,
	animations: {
		fade: {
			in: {autoAlpha:1, display: 'block'},
			set: {autoAlpha:0, display: 'block'},

		},
		scale: {
			up: {scale:1, opacity:1, ease:Back.easeOut},
			down: {scale:0, opacity:0, ease:Back.easeOut}
		},
		hide: {display: 'none'},
		show: {display: 'block'},
		center: {top: '25%', 'position': 'absolute'}
	},
	init: function(){
		this.timeline();
	},
	timeline: function(){
		var $this = this;
		var ani = $this.animations;
		var fade = $this.animations.fade;
		var scale = $this.animations.scale;

		var frame1 = $('#frame_1');

		var tl = new TimelineMax({delay:0.5, repeat:0});
		// tl.from(frame1, 0.5, ani.fadeset)
		// .to(frame1, 2, ani.fadein);
		tl
		.set(frame1, ani.show)
		.fromTo(frame1, 0.5, scale.down, $.extend(scale.up, ani.center))
		.to(frame1, 1, ani.center);
	}
}


$(document).ready(function(){
	app.init();	
});
