import { render, screen, cleanup } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe('Test: <FirstApp />', () => {

    afterEach(cleanup);// Limpiar recursos
    let title = 'Title - testing';
    let subtitle = 'Subtitle - testing';

    test('1) Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test(`2) Debe mostrar el mensaje "${title}"`, () => {
        render(<FirstApp title={title} />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('3) Debe mostrar title en h1', () => {
        // expect(getByText(title)).toBeTruthy();
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('4) Debe mostrar el subtitle enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle)).toBeTruthy();
    });


});