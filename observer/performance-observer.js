var observer = new PerformanceObserver((list) => {
	console.log(list.getEntries()[0]);
});
observer.observe({ entryTypes: ['measure'] });

function clicked(elem) {
	performance.measure('button clicked');
}
