let id = document.getElementById("drawflow");
let editor = new Drawflow(id);
editor.start();


var html = `<div><input type="text" df-name></div>`;
var data = { "name": '' };
editor.addNode('github', 0, 1, 150, 300, 'github', data, html);


