import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const UserForm = ({ onSubmit, initialData, buttonText }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [role, setRole] = useState(initialData?.role || "");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setRole(initialData.role);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) return;
    onSubmit({ name, email, role });
    setName("");
    setEmail("");
    setRole("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Role</FormLabel>
        <Input value={role} onChange={(e) => setRole(e.target.value)} />
      </FormControl>
      <Button type="submit" colorScheme="blue">
        {buttonText}
      </Button>
    </Box>
  );
};

export default UserForm;
