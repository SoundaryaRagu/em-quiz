import Ember from 'ember';

export default Ember.Namespace.extend({

 setCookie:function(name) {
  var value = document.cookie= "value="+name;
  return value ? value[2] : null;
},
getCookie:function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('=');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return c;
}
}).create();
