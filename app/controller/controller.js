(function(exports) {

  function Controller() {
    this.bot = new Bot();
    this.parser = new Parser();
  };


  Controller.prototype.inputListener = function(jQuery, document) {
    var self = this
    jQuery(document).ready(function(){
      jQuery('#textbox').on("keydown", function(e) {
        if (e.which == '13') {
          userInput = jQuery('#textbox').val();
          if (userInput != '') {
            self._createElements(document);
            self._setElements(document);
            self._appendElements(document);
          } else {
            console.log("empty field")
          };
        };
      });
    });
  };

  Controller.prototype._createElements = function(document) {
    log = document.getElementById('log');
    userPara = document.createElement('p');
    botPara = document.createElement('p');
  };

  Controller.prototype._setElements = function(document) {
    userPara.innerHTML = userInput;
    botPara.innerHTML = "Have you tried drinking more?"
  };

  Controller.prototype._appendElements = function(document) {
    log.appendChild(userPara);
    log.appendChild(botPara);
  };


  exports.Controller = Controller
})(this);
