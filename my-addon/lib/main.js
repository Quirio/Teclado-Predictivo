var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
	id: "teclado-predictivo",
	label: "Activar teclado predictivo",
	icon: {
		"16": "./icon-inactive/icon-16.png",
		"32": "./icon-inactive/icon-32.png",
		"64": "./icon-inactive/icon-64.png"
	},
	activado: false,
	onClick: botonEvent
});

function botonEvent(state) {
	if(button.activado) { // Si el teclado está activado
		button.label = "Activar teclado predictivo";
		button.icon = {
		"16": "./icon-inactive/icon-16.png",
		"32": "./icon-inactive/icon-32.png",
		"64": "./icon-inactive/icon-64.png"
		};
		button.activado = false;
		// console.log("Desactivado");
	}
	else {	// Si el teclado está desactivado
		button.label = "Desactivar teclado predictivo";
		button.icon = {
		"16": "./icon-active/icon-16.png",
		"32": "./icon-active/icon-32.png",
		"64": "./icon-active/icon-64.png"
		};
		button.activado = true;
		// console.log("Activado");
	}
}

require("sdk/tabs").on("ready", runScript);
 
function runScript(tab) {
  tab.attach({
    contentScriptFile: [self.data.url("jquery-1.11.2.min.js"),self.data.url("my-script.js")]
  });
}