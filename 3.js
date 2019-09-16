var num = 10;
var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype.add = function () {
        return 5 + 6;
    };
    return demo;
}());
var obj = new demo();
console.log(obj.add());
console.log(num);
