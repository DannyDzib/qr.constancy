import HttpClient from "../httpClient"
import AppSettings from "settings/api.settings"
import { safePromise } from "utils/utils"

export const handleLogin = async (data) => {
  const response = await safePromise(
    HttpClient.post(`${AppSettings.ENDPOINT_GET_ACCES_TOKEN}`, data)
    )
  return response?.result?.data
}
