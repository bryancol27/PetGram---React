import { gql, useMutation } from "@apollo/client";

const LOG_IN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`

export const mutationLogIn = ()=> {
    const [mutationLogInFunction, { data, error, loading }] = useMutation(LOG_IN)

    return { mutationLogInFunction, data, error, loading }
}
