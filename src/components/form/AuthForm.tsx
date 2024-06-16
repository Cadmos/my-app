import React, { useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { LoginFormProps } from '../../interfaces/LoginFormProps';
import { RegisterFormProps } from '../../interfaces/RegisterFormProps';

const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login: LoginFormProps['login'] = async (event) => {
        event.preventDefault();
        // Implement your login logic here
    };

    const register: RegisterFormProps['register'] = async (event) => {
        event.preventDefault();
        // Implement your register logic here
    };

    return (
        <VStack spacing={4} width="300px">
            {isLogin ?
                <LoginForm
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    setError={setError}
                    login={login}
                />
                :
                <RegisterForm
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    setError={setError}
                    register={register}
                />
            }
            <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Switch to Register" : "Switch to Login"}
            </Button>
        </VStack>
    );
};

export default AuthForm;