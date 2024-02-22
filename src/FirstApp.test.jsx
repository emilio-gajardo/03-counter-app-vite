import { render, cleanup } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe('Test: <FirstApp />', () => {

    // Limpiar recursos después de cada test
    afterEach(cleanup);
    const title = 'Title - testing';
    const subtitle = 'Subtitle - testing';
    let getByTestId;

    // Renderizar el componente ante de cada prueba
    beforeEach(() => {
        ({ getByText, getByTestId, getAllByText } = render(
            <FirstApp title={title} subtitle={subtitle} />
        ));
    });

    test('1) Debe mostrar title en h1', () => {
        expect(getByText(title)).toBeTruthy();
    });

    // Test: evalúa que exista el elemento con el id
    test('2) Debe existir el elemento con id test-title', () => {
        expect(getByTestId('test-title')).toBeTruthy();
    });

    // Test: evalúa que exista el elemento con el id y el contenido se exacto
    test('3) Debe contener exactamente test-title', () => {
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    // Test: evalúa que exista el elemento con el id y contenga el contenido
    test('4) Debe contener test-title', () => {
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('5) Debe mostrar el subtitle', () => {
        expect(getAllByText(subtitle)).toBeTruthy();
    });

    test('6) Deben existir 2 subtitle', () => {
        expect(getAllByText(subtitle).length).toBe(2);
    });

});