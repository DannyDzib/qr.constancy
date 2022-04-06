import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "components/Layout"
import routes from "navigation/routes"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
