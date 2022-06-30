import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AllRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const localGraphQL = "https://flashcards-task.herokuapp.com";
export const client = new ApolloClient({
  uri: localGraphQL,
  cache: new InMemoryCache()
});
root.render(
  <Provider store={store}>
  <ApolloProvider client={client}>
  <React.StrictMode>
     <AllRoutes />
    </React.StrictMode>
    </ApolloProvider>
    </ Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
