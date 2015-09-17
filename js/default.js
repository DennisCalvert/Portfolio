(function(){
	'user strict';
	
	function clickHandler(el){
		document.getElementById(el).classList.add('is-visible');
	}
	
	Array.prototype.slice.call(document.getElementsByClassName('tile__anchor')).forEach(function(el){
		el.addEventListener('click', function(e){
			e.preventDefault();
			clickHandler(el.dataset.target);
		});
	});	
	
	Array.prototype.slice.call(document.getElementsByClassName('toggle-is-visible')).forEach(function(el){
		el.addEventListener('click', function(e){
			e.preventDefault();
			Array.prototype.slice.call(document.getElementsByTagName('article')).forEach(function(el){
				el.classList.remove('is-visible');
			});
		});
	});	
}());