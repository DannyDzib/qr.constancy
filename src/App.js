import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import routes from "navigation/routes"
import Login from "screens/Home/Login"
import Loading from "components/Loading"
import AuthGuard from "components/AuthGuard"
import { IntlProvider } from "react-intl"
import useMessages from "hooks/useMessages"
import { store } from "redux/store"
import { Provider } from "react-redux"
import { Modal, ModalProvider } from "components/Modal"
import { Toast, ToastProvider } from "components/Toast"
function App() {
  const queryClient = new QueryClient()
  const { messages } = useMessages()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <IntlProvider
          locale={"es"}
          messages={messages}
        >
          <Loading />
          <ToastProvider>
            <ModalProvider>
              <Toast />
              <Modal />
              <BrowserRouter>
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={<AuthGuard component={route.element} />}
                    />
                  ))}
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
              </BrowserRouter>
            </ModalProvider>
          </ToastProvider>
        </IntlProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Provider>
  )
}

export default App
