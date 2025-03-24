
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import Pagination from './pagination';
import { usePathname } from 'next/navigation';

vi.mock(import("next/navigation"), async (importOriginal) => {
    const actual = await importOriginal();
    return {
      ...actual,
      usePathname: vi.fn(),
      useSearchParams: vi.fn(),
    }
  });

describe('Pagination', () => {

    it('creates correct URLs for pagination links', () => {
        (usePathname as Mock).mockReturnValue('/test-path'); 
        render(<Pagination total={103}  currentPage={1} />);
        const page3Link = screen.getByText('3').closest('a');
        const href = page3Link?.getAttribute("href");
        expect(href).toBe('/test-path?page=3&total=103');
    });

    it('renders pagination component correctly when on first page block', () => {
        render(<Pagination total={254}  currentPage={1} />);
        expect(screen.getByText('1')).toBeTruthy();
        expect(screen.getByText('2')).toBeTruthy();
        expect(screen.getByText('3')).toBeTruthy();
        expect(screen.getByText('4')).toBeTruthy();
        expect(screen.getByText('5')).toBeTruthy();
        expect(screen.getByText('6')).toBeTruthy();
        expect(screen.getByText('7')).toBeTruthy();
        expect(screen.getByText('8')).toBeTruthy();
        expect(screen.getByText('9')).toBeTruthy();
        expect(screen.getByText('10')).toBeTruthy();
    });

    it('renders pagination component correctly when on second page block', () => {
        render(<Pagination total={254}  currentPage={12} />);
        expect(screen.getByText('11')).toBeTruthy();
        expect(screen.getByText('12')).toBeTruthy();
        expect(screen.getByText('13')).toBeTruthy();
        expect(screen.getByText('14')).toBeTruthy();
        expect(screen.getByText('15')).toBeTruthy();
        expect(screen.getByText('16')).toBeTruthy();
        expect(screen.getByText('17')).toBeTruthy();
        expect(screen.getByText('18')).toBeTruthy();
        expect(screen.getByText('19')).toBeTruthy();
        expect(screen.getByText('20')).toBeTruthy();
    });

    it('disables previous block button on first block', () => {
        render(<Pagination total={350}  currentPage={1} />);
        expect(screen.queryByText('<<')).not.toBeTruthy();
    });

    it('enables previous block button on second block', () => {
        render(<Pagination total={350}  currentPage={11} />);
        expect(screen.queryByText('<<')).toBeTruthy();
    });

    it('disables next block button on last block', () => {
        render(<Pagination total={100}  currentPage={10} />);
        expect(screen.queryByText('>>')).not.toBeTruthy();
    });

    it('enables next block button on second last block', () => {
        render(<Pagination total={200}  currentPage={9} />);
        expect(screen.queryByText('>>')).toBeTruthy();
    });

    it('renders both previous and next block buttons correctly', () => {
        render(<Pagination total={300}  currentPage={11} />);
        expect(screen.getByText('<<')).toBeTruthy();
        expect(screen.getByText('>>')).toBeTruthy();
    });


    it('disables both previous and next block buttons correctly', () => {
        render(<Pagination total={60}  currentPage={1} />);
        expect(screen.queryByText('>>')).not.toBeTruthy();
        expect(screen.queryByText('<<')).not.toBeTruthy();
    });

});
