import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <Box p={6}>
      <Heading mb={6}>Anasayfa</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        <DashboardCard 
          title="Toplam Satış" 
          value="₺25,430" 
          description="Son 30 günde yapılan satış" 
        />
        <DashboardCard 
          title="Yeni Kullanıcılar" 
          value="438" 
          description="30 günde giriş yapan kullanıcılar" 
        />
        <DashboardCard 
          title="Aktif Aboneler" 
          value="1,200" 
          description="Ödemesini yapan aktif aboneler" 
        />
        <DashboardCard 
          title="Bekleyen Siparişler" 
          value="17" 
          description="Onay bekleyen siparişler" 
        />
      </SimpleGrid>
    </Box>
  );
}
