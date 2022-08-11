import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`

export const mutationRegister = ()=> {
    const [mutationRegisterFunction, { data, error, loading }] = useMutation(REGISTER)

    return { mutationRegisterFunction, data, error, loading }
}
