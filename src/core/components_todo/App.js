import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
const queryClient = new QueryClient();

function CoreApp({ children, title }) {

	return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
	)
}

export default CoreApp;