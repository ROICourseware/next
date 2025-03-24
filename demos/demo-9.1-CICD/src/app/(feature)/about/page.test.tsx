import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './page';

describe('About', () => {
    it('renders the main heading', () => {
        render(<About />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.textContent).toBe('Next Level Book Reactions');
    });

    it('renders the subheading', () => {
        render(<About />);
        const subheading = screen.getByRole('heading', { level: 2 });
        expect(subheading.textContent).toBe('Where you react to books');
    });

    it('renders the sign-in message', () => {
        render(<About />);
        const paragraph = screen.getByText('Sign in with Github to add your own favorite books and write reviews.');
        expect(paragraph).toBeTruthy();
    });
});