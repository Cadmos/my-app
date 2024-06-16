import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import AuthForm from "../form/AuthForm";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <VStack spacing={8}>
                        <AuthForm />
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
