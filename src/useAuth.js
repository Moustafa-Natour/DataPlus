import { graphql } from "./appwrite";

const useAuth = () => {
    // sign up functionality
    const signup = async (email, password, firstName, lastName) => {
        const response = await graphql.mutation({
            query: `mutation (
                $email: String!,
                $password: String!,
                $firstName: String!,
                $lastName: String!,
            ) {
                accountCreate(
                    userId: "unique()",
                    email: $email,
                    password: $password,
                    firstName: $firstName,
                    lastName: $lastName,
                ) {
                  _id
                }
            }`,
            variables: {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            },
        });

        if (response.errors) {
            throw response.errors[0].message;
        }
    };

    return {
        signup,
    };
};

export default useAuth;