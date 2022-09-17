import { useForm, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { setLoading } from "redux/modules/common"
import { useMutation } from "react-query"
import { handleLogin } from "clients/httpLogin"
import localstorage from "services/localstorage"
import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux"
import { useToast } from "components/Toast"

const useLogin = () => {
  const { mutate, data, isLoading } = useMutation(handleLogin)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { isAuth } = useAuth()
  const toast = useToast()

  const { control, formState, getValues } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string()
          .email("Ingresa un correo Valido")
          .required("El correo es requerido")
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Ingresa un correo valido"
          ),
        password: Yup.string().required("La contraseña es requerida"),
      })
    ),
    defaultValues: {
      email: "l16530486@cancun.tecnm.mx",
      password: "pruebas2022",
    },
    mode: "onChange",
  })
  const [email, password] = useWatch({
    control,
    name: ["email", "password"],
  })

  const handleSubmit = () => {
    const values = getValues()
    mutate(values)
  }

  useEffect(() => {
    if (isAuth) navigate(location?.state?.path || "/")
  }, [isAuth])

  useEffect(() => {
    dispatch(setLoading(isLoading))
  }, [isLoading])

  useEffect(() => {
    if (data) {
      toast.show({
        type: data.status,
        text: data.message || `Bienvenido \n ${data.userName}`,
      })
    }
    if (data?.token && data?.userName && data?.status && !isLoading) {
      localstorage.set("data", data)
    }
  }, [data])

  return {
    control,
    formState,
    getValues,
    email,
    password,
    handleSubmit,
  }
}

export default useLogin
