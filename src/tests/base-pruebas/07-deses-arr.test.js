import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Test: <07-deses-arr />', () => {
    test('retornaArreglo() debe retornar un arreglo', () => {
        const letters = 'ABC';
        const numbers = 123;
        const arr = retornaArreglo();
        expect(typeof arr[0]).toBe(typeof letters);
        expect(typeof arr[1]).toBe(typeof numbers);
        // expect(typeof arr[0]).toEqual(expect.any(String)); // otra forma
    });
});