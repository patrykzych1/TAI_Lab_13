var Complex = /** @class */ (function () {
    function Complex(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    Complex.prototype.add = function (complex) {
        return new Complex(this.real + complex.real, this.imag + complex.imag);
    };
    Complex.prototype.substract = function (complex) {
        return new Complex(this.real - complex.real, this.imag - complex.imag);
    };
    Complex.prototype.getModulus = function () {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    };
    Complex.prototype.toString = function () {
        console.log('real: ', this.real, 'imag: ', this.imag);
    };
    return Complex;
}());
var c1 = new Complex(1, 2);
var c2 = new Complex(3, 8);
var c3 = c1.add(c2);
c3.toString();
var c4 = c3.substract(c1);
c4.toString();
console.log(c4.getModulus());
