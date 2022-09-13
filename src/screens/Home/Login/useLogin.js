import { useForm, useWatch } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "redux/modules/auth"
import { setLoading } from "redux/modules/common"
import { useMutation } from "react-query"
import { handleLogin } from "clients/httpLogin"

const useLogin = () => {
  const { mutate, data, error, isLoading } = useMutation(handleLogin)
  const { isAuth } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) navigate("/")
  }, [isAuth])

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
      email: "",
      password: "",
    },
    mode: "onChange",
  })
  const [email, password] = useWatch({
    control,
    name: ["email", "password"],
  })

  const handleSubmit = () => {
    // dispatch(setLoading(true))
    const values = getValues()
    mutate(values)
    /* setTimeout(() => {
      dispatch(setLoading(false))
      dispatch(login())
    }, 5000) */
  }

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
