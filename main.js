if(!Citrus)
var Citrus = {};

Citrus.nodeHelp = {
    /**
     * Create new dom element
     * @param {string} element - name tag
     * @param {string} className - class Name
     * @param {Object} [attr] - attributes
     * @return {Object}
     */
  create: function (element, className, attr) {
      var elem = document.createElement(element);
      elem.classList.add(className);
      if(attr && typeof attr === "object")
        for(var key in attr){
            elem.setAttribute(key, attr[key]);
        }
      return elem;
  }


};

Citrus.multiselect = {
  counterId: 1,
  baseContainer: ".filters",
  init: function () {
      var selects = document.querySelectorAll("select[multiple]");
      for(var i = 0, len = selects.length; i < len; i++)
      {
          var select = selects[i];
          var name = select.name;
          if(!name) continue;
          var cont = Citrus.nodeHelp.create("div","multiselect-cotainer");
          var button = Citrus.nodeHelp.create("button","multiselect-open");
          var cont_otions = Citrus.nodeHelp.create("ul", "multiselect-list");
          cont.appendChild(button);
          cont.appendChild(cont_otions);
          var parent = select.parentNode;
           parent.insertBefore(cont, select);
           parent.removeChild(select);
            for(var q = 0; q < select.childNodes.length; q++){
               var node = select.childNodes[q];
                var val = node.value;
                if(!val)
                continue;
                var text = node.textContent;
                var li = document.createElement("li");
                var input = Citrus.nodeHelp.create("input","custom-checkbox",{type: "checkbox"});
                input.value = val;
                input.id = "checkbox-"+this.counterId;
                var label = Citrus.nodeHelp.create("label", "custom-checkbox-label",{'for': "checkbox-"+this.counterId});
                var cont_check = Citrus.nodeHelp.create("span", "cont");
                var check = Citrus.nodeHelp.create("span", "check");
                var textNode = Citrus.nodeHelp.create("span", "text");
                textNode.textContent = text;
                label.appendChild(cont_check).appendChild(check);
                label.appendChild(textNode);
                li.appendChild(input);
                li.appendChild(label);
                cont_otions.appendChild(li);
                this.counterId++;
            }
      }
      if(this.baseContainer){
          document.querySelector(this.baseContainer).classList.add("active");
      }
  },
    multiselectOpen : function(e){

    }
};

Citrus.multiselect.init();