import { getImagen } from "../../base-pruebas/11-async-await";

describe('Test: 11-async-await', () => {

    test('getImagen() retorna mensaje de error si no hay apikey valida',
        async () => {
            const res = await getImagen();
            expect(res).toBe('Img not found');
        });
});