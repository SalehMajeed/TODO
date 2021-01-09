const h1_elem = document.querySelector('h1');
const p_elem = document.querySelector('p');
const div_elem = document.querySelector('body > div');
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

div_elem.style.width = '600px';

slider.addEventListener('input', () => {
	div_elem.style.width = slider.value + 'px';
});

const resize_observer = new ResizeObserver((entries) => {
	for (let entry of entries) {
		if (entry.contentBoxSize) {
			if (entry.contentBoxSize[0]) {
				h1_elem.style.fontSize = Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + 'rem';
				p_elem.style.fontSize = Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + 'rem';
			} else {
				h1_elem.style.fontSize = Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + 'rem';
				p_elem.style.fontSize = Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + 'rem';
			}
		} else {
			h1_elem.style.fontSize = Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + 'rem';
			p_elem.style.fontSize = Math.max(1.5, entry.contentBoxSize[0].inlineSize / 600) + 'rem';
		}
	}
	console.log('size change');
});

checkbox.addEventListener('change', () => {
	if (checkbox.checked) {
		resize_observer.observe(div_elem);
	} else {
		resize_observer.unobserve(div_elem);
	}
});
