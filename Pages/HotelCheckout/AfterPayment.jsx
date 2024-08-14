import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Spinner,
    Heading,
    Image,
    Flex
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from "react"
  import { AiFillLock }  from "react-icons/ai";
  import { BsFillCheckCircleFill } from "react-icons/bs";
  import { useSelector } from "react-redux";
  import { useNavigate } from 'react-router-dom';

function BasicUsage({username,hotelData}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    const [payment,setpayment] = useState(false)
    const [showBox, setShowBox] = useState(false)

    const handlePayment = () => {
        setpayment(true)
        onOpen();
    }

    const handlleClose = () => {
        onClose();
        navigate("/")
    }

    useEffect(() => {
        let id;
        if(payment){
            id = setTimeout(() => {
                setpayment(false)
                setShowBox(true)
            },3000)
        }
        return () => {
            clearTimeout(id)
        }
    },[setpayment,handlePayment])

    return (
      <>
      {
      showBox && !payment ? 
        <div>
            <Button onClick={handlePayment} color="white">{payment ? <Spinner color='white.500' /> : <div style={{display:"flex",gap:"10px",alignItems:"center"}}><span><AiFillLock/></span>Complete booking</div>}</Button>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent w={"550px"} height="400px">
      <ModalHeader color={"green.600"}>{`Congratulations ! ${username} `}</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
        <Box>
          <Box width={"max-content"} m={"auto"}><BsFillCheckCircleFill color='green' size={"40px"}/></Box>
          <Heading as={"h1"} textAlign="Center">Your Booking is Confirmed</Heading>
          <Flex marginTop="4" gap={"15px"} alignItems="center">
              <Image borderRadius={"7px"} height={"80px"} width="80px" src={hotelData.roomimage} alt="" />
              <Box>
                 <Text fontWeight={"bold"}>{hotelData.Name}</Text>
                 <Text>{hotelData.Loaction}</Text>
              </Box>
          </Flex>
        </Box>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={handlleClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
        </div>
        : <Button onClick={handlePayment} color="white">{payment ? <Spinner color='white.500' /> : <div style={{display:"flex",gap:"10px",alignItems:"center"}}><span><AiFillLock/></span>Complete booking</div>}</Button>
      } 
      </>
    )
  }

  export default BasicUsage