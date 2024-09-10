import {
    Box,
    Button,
    Heading,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import UserForm from "../components/UserForm";
  
  export default function Home() {
    // Başlangıç verisi
    const initialUsers = [
      { name: "Alice", email: "alice@example.com", role: "Admin" },
      { name: "Bob", email: "bob@example.com", role: "User" },
      { name: "Charlie", email: "charlie@example.com", role: "Moderator" },
    ];
  
    const [users, setUsers] = useState(initialUsers);
    const [editingUserIndex, setEditingUserIndex] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure(); // Modal kontrolü
  
    const addUser = (user) => {
      setUsers([...users, user]);
      onClose();  // Modal kapatılır
    };
  
    const updateUser = (user) => {
      const updatedUsers = users.map((u, index) =>
        index === editingUserIndex ? user : u
      );
      setUsers(updatedUsers);
      setEditingUserIndex(null);
      onClose();  // Modal kapatılır
    };
  
    const deleteUser = (index) => {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    };
  
    const editUser = (index) => {
      setEditingUserIndex(index);
      onOpen();  // Düzenleme için modal açılır
    };
  
    return (
      <Box p={6}>
        <Heading mb={6}>Destek Talepleri</Heading>
  
        <Button colorScheme="blue" onClick={onOpen} mb={6}>
          Yeni Talep Ekle
        </Button>
  
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{editingUserIndex !== null ? "Talep Güncelle" : "Yeni Talep Ekle"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UserForm
                onSubmit={editingUserIndex !== null ? updateUser : addUser}
                initialData={editingUserIndex !== null ? users[editingUserIndex] : null}
                buttonText={editingUserIndex !== null ? "Update User" : "Add User"}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        {/* Kullanıcı Listesi */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={index}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <Button
                    size="sm"
                    mr={2}
                    colorScheme="yellow"
                    onClick={() => editUser(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
  