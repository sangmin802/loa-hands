import React from 'react';

import Home from '@/pages/home/home';
import { render, screen, waitFor } from '@/utils/test';

describe('Home', () => {
	describe('Data 관리', () => {
		beforeEach(() => {
			render(<Home />);
		});
		it('첫 마운트 시, homeData가 없다면 homeDate 받아오기', async () => {
			expect(screen.getByRole('home').dataset.isdata).toBe('false');
			await waitFor(() => {
				expect(screen.getByRole('home').dataset.isdata).toBe('true');
			});
		});
	});
});
