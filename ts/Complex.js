"use strict";
class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    add(complex) {
        return new Complex(this.real + complex.real, this.imag + complex.imag);
    }
    subtract(complex) {
        return new Complex(this.real - complex.real, this.imag - complex.imag);
    }
    getModulus() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    }
    toString() {
        console.log('real: ', this.real, 'imag: ', this.imag);
    }
}
let c1 = new Complex(1, 2);
let c2 = new Complex(3, 8);
let c3 = c1.add(c2);
c3.toString();
let c4 = c3.subtract(c1);
c4.toString();
console.log(c4.getModulus());
