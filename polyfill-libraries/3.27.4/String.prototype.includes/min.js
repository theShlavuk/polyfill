CreateMethodProperty(String.prototype,"includes",function(e){"use strict";var t=arguments.length>1?arguments[1]:undefined,r=RequireObjectCoercible(this),n=ToString(r);if(IsRegExp(e))throw new TypeError("First argument to String.prototype.includes must not be a regular expression");var i=ToString(e),o=ToInteger(t),g=n.length,a=Math.min(Math.max(o,0),g);return-1!==String.prototype.indexOf.call(n,i,a)});