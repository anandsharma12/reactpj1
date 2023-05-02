import { Button, Container, HStack, Input, VStack, calc } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai';
const Upload = () => {
  return (
    <Container h={'100vh'}  maxW={'container.xl'} p={'16'}>
        <VStack  justifyContent={'center'} h={'full'}>
           <AiOutlineCloudUpload size={'10vmax'}  color={'purple'}/>
           <form>
            <HStack>
                <Input required 
                type={'file'}
                css={{
                '&::file-selector-button':{
                    border: 'none',
                    height: '100%',
                    width: 'calc(100% + 36px)',
                    marginLeft: '-18px',
                    color: 'purple',
                    backgroundColor: 'white',
                    cursor: 'pointer'
                }}}/>
                <Button type={'submit'} bgColor={'purple'} color={'white'}> Upload</Button>
            </HStack>
           </form>
        </VStack>
    </Container>
  )
}

export default Upload;
