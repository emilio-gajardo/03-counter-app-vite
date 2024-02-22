import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from './CounterApp';

describe('Test: <CounterApp />', () => {

    let initialValue = 1;
    test('1) Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test(`2) Debe mostrar el valor inicial de <CounterApp value=${initialValue}>`, () => {
        render(<CounterApp value={initialValue} />);
        // expect(screen.getByText(value).innerHTML).toContain(`${initialValue}`);
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

    test('3) Debe de incrementar con el botón [+1]', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('2')).toBeTruthy();
    });

    test('4) Debe de restar con el botón [-1]', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('5) Debe funcionar botón Reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText(1)).toBeTruthy();
    });
});