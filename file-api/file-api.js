// using input

const file_selector = document.getElementById('file-selector');

file_selector.addEventListener('change', async () => {
	for (const file of file_selector.files) {
		console.log(file.name);
		console.log(await file.text());
	}
});

const open_directory = document.getElementById('open-directory');
open_directory.addEventListener('click', async () => {
	let files = await window.showDirectoryPicker();
	console.log(files);
});
