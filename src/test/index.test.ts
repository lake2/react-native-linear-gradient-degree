import { deg } from "..";

describe("test deg", () => {
    it("check parameters", () => {
        const fn = deg as any;
        expect(() => fn()).toThrowError("wrong degree value");
        expect(() => fn("")).toThrowError("wrong degree value");
        expect(() => fn(null)).toThrowError("wrong degree value");
        expect(() => fn(undefined)).toThrowError("wrong degree value");
        expect(() => fn(Infinity)).toThrowError("wrong degree value");
        expect(() => fn(-Infinity)).toThrowError("wrong degree value");
        expect(() => fn(new Date())).toThrowError("wrong degree value");
    });

    it("check result", () => {
        expect(deg(30)).toMatchObject({ start: { x: 0.21132486540518713, y: 1 }, end: { x: 0.7886751345948129, y: 0 } });
        expect(deg(60)).toMatchObject({ start: { x: 0, y: 0.7886751345948129 }, end: { x: 1, y: 0.21132486540518713 } });
        expect(deg(120)).toMatchObject({ start: { x: 0, y: 0.21132486540518713 }, end: { x: 1, y: 0.7886751345948129 } });
        expect(deg(150)).toMatchObject({ start: { x: 0.21132486540518713, y: 0 }, end: { x: 0.7886751345948129, y: 1 } });
        expect(deg(190)).toMatchObject({ start: { x: 0.5881634903542325, y: 0 }, end: { x: 0.4118365096457675, y: 1 } });
        expect(deg(240)).toMatchObject({ start: { x: 1, y: 0.21132486540518713 }, end: { x: 0, y: 0.7886751345948129, } });
        expect(deg(280)).toMatchObject({ start: { x: 1, y: 0.5881634903542325, }, end: { x: 0, y: 0.4118365096457675, } });
        expect(deg(320)).toMatchObject({ start: { x: 0.9195498155886399, y: 1, }, end: { x: 0.08045018441136004, y: 0, } });
        expect(deg(320 + 360)).toMatchObject({ start: { x: 0.9195498155886399, y: 1, }, end: { x: 0.08045018441136004, y: 0, } });
        expect(deg(320 - 360)).toMatchObject({ start: { x: 0.9195498155886399, y: 1, }, end: { x: 0.08045018441136004, y: 0, } });
    });
});
