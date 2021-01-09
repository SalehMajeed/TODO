const target = document.querySelector('.section:last-child');

const configure = {
	threshold: 0.7,
};

function callback(entry) {
	if (entry[0].isIntersecting) {
		console.log(entry[0]);
		inter_section.unobserve(target);
	}
}

const inter_section = new IntersectionObserver(callback, configure);

inter_section.observe(target);
