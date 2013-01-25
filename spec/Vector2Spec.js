
var describe = describe || {};
var it = it || {};
var expect = expect || {};
var Vector2 = Vector2 || {};

describe("Vector2", function () {
    "use strict";
    it("Should create from another vector", function () {
        var v = new Vector2(10, 12),
            ov = new Vector2(v);
        expect(ov.x).toBe(v.x);
        expect(ov.y).toBe(v.y);
    });

    it("Should contains x and y members", function () {
        var v = new Vector2(10, 12);
        expect(v.x).toBe(10);
        expect(v.y).toBe(12);
    });

    it("Should give the right angle", function () {
        var v = new Vector2(0, 0);
        expect(v.angle()).toBe(0);
        v.x = 1;
        expect(v.angle()).toBe(0);
        v.y = 1;
        expect(v.angle()).toBe(45);
        v.x = 0;
        expect(v.angle()).toBe(90);
        v.x = -1; expect(v.angle()).toBe(135);
        v.y = 0; expect(v.angle()).toBe(180);
        v.y = -1; expect(v.angle()).toBe(-135);
        v.x = 0; expect(v.angle()).toBe(-90);
        v.x = 1; expect(v.angle()).toBe(-45);
    });
    it("Should give the right magnitude", function () {
        var v = new Vector2(0, 0),
            rad45 = 45 * (Math.PI / 180),
            mag = Math.cos(rad45) * 10 + Math.sin(rad45) * 10;
        expect(v.magnitude()).toBe(0);
        v.x = 10; expect(v.magnitude()).toBe(10);
        v.y = 10;
        expect(v.magnitude()).toBe(mag);
    });
    it("Should add 2 vectors", function () {
        var v = new Vector2(10, 10),
            ov = new Vector2(25, 20),
            vadd = v.add(ov);
        expect(vadd.x).toBe(35);
        expect(vadd.y).toBe(30);
        expect(vadd).not.toBe(v);
        expect(vadd).not.toBe(ov);
    });
});
