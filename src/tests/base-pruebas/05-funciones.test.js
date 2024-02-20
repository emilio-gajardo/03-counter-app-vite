import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Test en 05-funciones', () => {

    test('getUser() debe retornar un objeto', () => {
        const testUser = { uid: 'ABC123', username: 'El_Papi1502' };
        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo() debe retornar un objeto', () => {
        const nombre = 'Joham';
        const testUser = {uid: 'ABC567', username: nombre};
        const user = getUsuarioActivo(nombre);
        expect(testUser).toEqual(user);
    });

});