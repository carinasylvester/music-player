import { buildCreateApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae7a7c36ccmshadcf44965dd89d4p1f45e3jsnd5717a0b26ee',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
	}
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

export const shazamCoreApi = createApi ({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', 'ae7a7c36ccmshadcf44965dd89d4p1f45e3jsnd5717a0b26ee');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => '/charts/world'}),
	}),
})

export const {
	useGetTopChartsQuery,
} = shazamCoreApi;