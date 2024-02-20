describe('Pruebas en <DemoComponent />', () => {
    test('Debe ser exitosa', () => {
        //1. inicialización
        const msg1 = 'Hola mundo';

        //2. acción
        const msg2 = msg1.trim();

        //3. obsevar respuesta
        expect(msg1).toBe(msg2);
    });
});