const mutation = new MutationObserver(callback);
const ul_id = document.getElementById('ul-id');
const configure = {
	childList: true,
	attributes: true,
	characterData: true,
	subTree: true,
	attributeOldValue: true,
	characterOldValue: true,
};

function callback(mutation_state) {
	console.log(mutation_state[0].type);
}

mutation.observe(ul_id, configure);
