import { BALANCE_SERVICE } from '@/services/balance';
import { balanceResponse } from '@/tests/mocks/balance.mocks';

jest.mock('@/utils/httpClient', () => ({
	httpClient: () => Promise.resolve(),
}));

describe('Test balance service', () => {
	it('Should fetch balance', async () => {
		const fetchBalance = jest.spyOn(BALANCE_SERVICE, 'fetchBalance').mockResolvedValue(balanceResponse);

		const balance = await BALANCE_SERVICE.fetchBalance();
		expect(fetchBalance).toHaveBeenCalledWith();
		expect(balance).toMatchObject(balanceResponse);
	});
});
