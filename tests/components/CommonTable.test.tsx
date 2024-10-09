import React from 'react';
import { render, screen } from '@testing-library/react';
import { transitionsList } from '@/tests/mocks/transition.mocks';
import { SUMMARY_PAGE_TABLE_CONFIG } from '@/app/summary/config';
import { CommonTable } from '@/components/common';

jest.mock('@/components/common/CommonTable/components/Pagination/Pagination.tsx');
jest.mock('@/components/common/CommonTable/components/SortButton/SortButton.tsx');
jest.mock('@/components/common/Tooltip/Tooltip.tsx');

describe('Test CommonTable component', () => {
	it('Should be rendered', async () => {
		render(
			<CommonTable
				data={transitionsList.data}
				elementsCount={transitionsList.count}
				columnConfig={SUMMARY_PAGE_TABLE_CONFIG}
			/>
		);

		screen.getAllByTestId('valueId').forEach((i) => {
			const value = i.innerHTML;
			const values = [
				transitionsList.data[0].amount.toString(),
				transitionsList.data[0].remainingBalance.toString(),
				new Date(transitionsList.data[0].date).toLocaleString(undefined, {
					dateStyle: 'medium',
					timeStyle: 'short',
				}),
			];

			expect(values).toContain(value);
		});
	});
});
