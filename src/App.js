import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import routes from "navigation/routes"
import Login from "screens/Login"
import AuthGuard from "components/AuthGuard"
import { IntlProvider } from "react-intl"
import Message from 'lang/es'
import { store } from 'redux/store'
import { Provider } from 'react-redux'
function App() {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider
          locale={window.navigator.language || 'es'}
          messages={Message}
        >
          <BrowserRouter>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<AuthGuard component={route.element} />} />
              ))}
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </IntlProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default App
