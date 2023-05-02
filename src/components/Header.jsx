import React from 'react';
import{
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
}
from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiMenu} from 'react-icons/bi'
const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button
      pos={'fixed'}
      top={'4'}
      left={'4'}
      p={'0'}
      w={'10'}
      h={'10'}
      zIndex={'overlay'}
      borderRadius={'full'}
      colorScheme='purple'
      onClick={onOpen}>
        <BiMenu size={"20"}/>
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay/>
           <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                 <Link to={'/'}>Home</Link>
                </Button>
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                 <Link to={'/Videos'}>Video</Link>
                </Button>
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                 <Link to={'/Video?category=free'}>Free Videos</Link>
                </Button>
                <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                 <Link to={'/Upload'}>Upload Videos</Link>
                </Button>
              </VStack>

              <HStack pos={'absolute'} bottom={'10'} left={'3'}>
                <Button colorScheme={'purple'} onClick={onClose}>
                  <Link to={'/login'}>Log In</Link>
                </Button>
                <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerBody>
           </DrawerContent>
       
      </Drawer>
    </>
  )
}

export default Header;