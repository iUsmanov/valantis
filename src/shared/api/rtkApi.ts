import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import md5 from 'md5';
import { getToday } from '../lib/helpers/getToday/getToday';

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = md5('Valantis_' + getToday());
			if (token) {
				headers.set('X-Auth', token);
			}
			// headers.set('Access-Control-Allow-Origin', __API__);
			// headers.set('Access-Control-Allow-Methods', 'GET,POST');

			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});
