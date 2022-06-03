import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
const useLogin = () => {
    const {
        control, formState, getValues
    } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                email: Yup
                    .string()
                    .email('Ingresa un correo Valido')
                    .required('El correo es requerido')
                    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Ingresa un correo valido'),
                password: Yup.string()
                    .required('La contraseña es requerida')
            })
        ),
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })
    const [email, password] = useWatch({
        control,
        name: ['email', 'password']
    })

    const handleSubmit = () => {
        const values = getValues()
        console.log(values)
    }

    return {
        control,
        formState,
        getValues,
        email,
        password,
        handleSubmit
    };
}

export default useLogin;