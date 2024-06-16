import React from 'react';
import { RegisterFormProps } from '../../interfaces/RegisterFormProps';
import { Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";

const RegisterForm: React.FC<RegisterFormProps> = ({ username, setUsername, password, setPassword, error, setError, register }) => {
    return (
        <form onSubmit={register}>
            <VStack spacing={4} width="300px">
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="new-password" />
                </FormControl>
                {error && <Text color="red.500">{error}</Text>}
                <Button colorScheme="teal" type="submit">Register</Button>
            </VStack>
        </form>
    );
};

export default RegisterForm;