var self = require("sdk/self");
require("sdk/tabs").on("ready", runScript);
 
function runScript(tab) {
  tab.attach({
    contentScriptFile: [self.data.url("jquery-1.11.2.min.js"),self.data.url("my-script.js")]
  });
}

/*
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");


var self = require("sdk/self");



    require("sdk/tabs").activeTab.attach({
      contentScriptFile: self.data.url("my-script.js")
    });
*/