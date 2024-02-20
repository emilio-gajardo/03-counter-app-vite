import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import dataHeroes from "../../data/heroes";


describe('Test <08-imp-exp />', () => {

    test('getHeroeById() debe retornar un heroe', () => {
        const id = 1;
        const testHeroe = dataHeroes.find((heroe) => heroe.id === id);
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(testHeroe);
    });

    test('getHeroeById() debe retornar undefined si no existe id', () => {
        const id = -1;
        const testHeroe = undefined;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(testHeroe);
        // const res = expect(heroe).toBeFalsy(); // pueden ser = [false, null, undefined]
    });

    test('getHeroesByOwner() debe retornar un arreglo de heroes "DC"', () => {
        const owner = 'DC';
        const testHeroes = dataHeroes.filter((heroe) => heroe.owner === owner);
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(testHeroes.length);
    });

    test('getHeroesByOwner() debe retornar un arreglo de heroes "Marvel"', () => {
        const owner = 'Marvel';
        const testHeroes = dataHeroes.filter((heroe) => heroe.owner === owner);
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toEqual(testHeroes.length);
    });


});