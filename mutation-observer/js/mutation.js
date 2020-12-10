/*
Mutation Observer used to track changes of dom tree.
Mutation events->
    DOMAttrModified
    DOMAttributeNameChanged
    DOMCharacterDataModified
    DOMElementNameChanged
    DOMNodeInserted
    DOMNodeInsertedIntoDocument
    DOMNodeRemoved
    DOMNodeRemovedFromDocument
    DOMSubtreeModified
 */
// Methods in Mutation Observer
/*
        1. Disconnect()
        2. observe()
        3. takeRecords()
        4. takeRecords()

        Observered have few properties->
        1.type.
        2.target.
        3. addedNodes/removedNodes.
        4. previousSibling/nextSibling.
        5. attributeName/attributeNameSpace.
        6. oldValue.
*/

const config = {
	attributes: true,
	characterData: true,
	childList: true,
	// attributeFilter: [],
	subtree: true,
	attributeOldValue: true,
	characterDataOldValue: true,
};
const target_node = document.querySelectorAll('p')[0];
const observer = new MutationObserver(cb);

function cb(mutation_list) {
	for (const list of mutation_list) {
		switch (list.type) {
			case 'attributes':
				console.log(list);
				console.log('changes into attributes');
				break;
			case 'characterData':
				console.log('changes into characterData');
				break;
			case 'childList':
				console.log(list);
				console.log('changes into childList');
				break;
			case 'attributeFilter':
				console.log('changes into attributeFilter');
				break;
			case 'subtree':
				console.log('changes into subtree');
				break;
			case 'attributeOldValue':
				console.log('changes into attribute old value');
				break;
			case 'characterDataOldValue':
				console.log('changes into characterData old value');
				break;
		}
	}
}

observer.observe(target_node, config);

// observer.disconnect();
