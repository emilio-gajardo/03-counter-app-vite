import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Test 09-promesas', () => {

    test('getHeroeByIdAsync() debe retornar un heroe', (done) => {
        const id = 1;
        const testHeroe = heroes.find((heroe) => heroe.id == id);
        getHeroeByIdAsync(id)
            .then((heroe) => {
                expect(heroe).toEqual(testHeroe);
                done();
            });
    });

    test('getHeroeByIdAsync() debe obtener error si heroe no se encuentra', (done) => {
        const id = -1;
        getHeroeByIdAsync(id)
            .catch((error) => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
});