import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import reportWebVitals from './reportWebVitals';
import { queryClient } from './react-query/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

reportWebVitals();
