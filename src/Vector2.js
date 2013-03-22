// var Vector2 = (function () {
//     "use strict";

    function Vector2() {
        if(arguments.length > 1){
            this.x = arguments[0];
            this.y = arguments[1];
        }else{
            this.x = arguments[0].x;
            this.y = arguments[0].y;
        }
    }

    Vector2.prototype = {
        angle: function () {
            var rads = Math.atan2(this.y, this.x);
            return r2d(rads);
        },

        magnitude: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },

        add: function (other) {
            return new Vector2(this.x + other.x, this.y + other.y);
        }
    };

    var RAD2DEGREE = (180 / Math.PI);

    function r2d(rads) {
        return rads * RAD2DEGREE;
    }

    function d2r(degrees) {
        return degrees / RAD2DEGREE;
    }

    // return Vector2;
// }());
