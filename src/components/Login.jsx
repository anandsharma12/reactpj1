import { Button, Container, Heading, Input, VStack, Link, Text} from '@chakra-ui/react';
import React from 'react'

const Login = () => {
    return (
        <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
            <form>
                <VStack  alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
                    <Heading m={'auto'}>welcome back</Heading>
                    <Input
                        required
                        type={'email'}
                        placeholder={'email'}
                        focusBorderColor={'purple.500'} />

                    <Input
                        required
                        type={'password'}
                        placeholder={'password'}
                        focusBorderColor={'purple.500'} />
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'} >Forget Password?</Link>
                    </Button>
                    <Button type={'submit'} colorScheme={'purple'}>
                        Log in
                    </Button>
                    <Text textAlign={'right'}>
                        New User? {' '}
                    <Button variant={'link'} alignSelf={'flex-end'} colorScheme={'purple'}>
                      <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login;
