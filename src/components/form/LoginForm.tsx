import React from 'react';
import { LoginFormProps } from '../../interfaces/LoginFormProps';
import { Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";

const LoginForm : React.FC<LoginFormProps> = ({ username, setUsername, password, setPassword, error, setError, login }) => {
    return (
        <form onSubmit={login}>
            <VStack spacing={4} width="300px">
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </FormControl>
                {error && <Text color="red.500">{error}</Text>}
                <Button colorScheme="teal" type="submit">Login</Button>
            </VStack>
        </form>
    );
};

export default LoginForm;