import { render, screen } from '@testing-library/react';
import ProfileSection from '../ProfileSection';

describe('ProfileSection', () => {
    it('renders profile snapshot and academic summary content', () => {
        render(<ProfileSection />);

        expect(screen.getByText(/profile snapshot/i)).toBeInTheDocument();
        expect(screen.getByText(/current status/i)).toBeInTheDocument();
        expect(screen.getByText(/university student/i)).toBeInTheDocument();
        expect(screen.getByText(/total achievements/i)).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText(/4.00 \/ 4.00/i)).toBeInTheDocument();
    });

    it('renders timeline items for education and achievements', () => {
        render(<ProfileSection />);

        expect(screen.getByText(/education & achievements/i)).toBeInTheDocument();
        expect(screen.getByText(/chronological journey/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /universitas mikroskil/i })).toBeInTheDocument();
        expect(screen.getByText(/national finalist - ilpc/i)).toBeInTheDocument();
        expect(screen.getByText(/sma kristen kalam kudus/i)).toBeInTheDocument();

        const timelineRows = screen.getAllByText(/education|achievement/i);
        expect(timelineRows.length).toBeGreaterThanOrEqual(5);
    });
});
