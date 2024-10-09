const NEXT_PUBLIC_BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
if (!NEXT_PUBLIC_BASE_API_URL) {
	throw new Error('NEXT_PUBLIC_BASE_URL is not set');
}

const addBaseUrlToInput = (input: RequestInfo) => {
	if (typeof input === 'string') return NEXT_PUBLIC_BASE_API_URL + input;

	return { ...input, url: NEXT_PUBLIC_BASE_API_URL + input.url };
};

export const httpClient = async <ReurnType>(input: RequestInfo, init?: RequestInit): Promise<ReurnType> => {
	const inputWithBaseUrl = addBaseUrlToInput(input);

	const res = await fetch(inputWithBaseUrl, init);
	const data = await res.json();

	if (res.status >= 400) {
		throw new Error(data.message || 'Something went wrong');
	}

	return data;
};
