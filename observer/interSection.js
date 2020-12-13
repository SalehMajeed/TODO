const ul_id2 = document.getElementById('ul-id2');

const callback = function (entries) {
	console.log(entries[0]);
};

const configure = {
	root: ul_id2,
	threshold: 0.5,
};

const inter_section = new IntersectionObserver(callback, configure);

inter_section.observe(ul_id2);
