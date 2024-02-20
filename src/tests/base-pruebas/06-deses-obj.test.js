import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Test 06-deses-obj', () => {

    test('usContext() debe retornar un objeto', () => {
        const clave = '123';
        const edad = 36;
        const testUs = {
            nombreClave: clave,
            anios: edad,
        };
        const us = usContext({ clave, edad });
        expect(testUs).toEqual(us);
    });
});