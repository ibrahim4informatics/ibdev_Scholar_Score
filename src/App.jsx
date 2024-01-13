import { Heading, Box, Button, Text } from "@chakra-ui/react"
import Module from "./components/Module.jsx"
import colors from './colors.conf.js'
import { useState } from "react"
function App() {
  const [moy, setMoy] = useState(null);
  const modules = [
    { name: "ASD", cof: 4, isEss: true },
    { name: "Analyse", cof: 4, isEss: true },
    { name: "Algebre", cof: 3, isEss: true },
    { name: "SM", cof: 3, isEss: true },
    { name: "Compo", cof: 2, isEss: false },
    { name: "FRA", cof: 1, isEss: false },
    { name: "ANG", cof: 1, isEss: false },
  ]
  const names = ['ASD', "Analyse", "Algebre", "SM", "Compo", "FRA", "ANG"];
  return (
    <>
      <Box px={5} py={10} w={'100%'} h={'100vh'} bg={colors.bg} display={'flex'} flexDirection={'column'} alignItems={'center'} overflow={'hidden'}>

        <Heading textAlign={'center'} color={colors.pirmary}>IBDev | Scholar-Score</Heading>
        <Box p={3} flexDir={'column'} display={'flex'} w={{ base: "100%", sm: "100%", md: "90%", lg: "920px" }} mt={10} h={"calc(100vh - 150px)"} bg={'white'} overflowY={'auto'} borderRadius={'md'} boxShadow={'sm'}>
          <Heading size={'sm'}>Modules</Heading>
          {
            modules.map(module => <Module key={module.name} name={module.name} coef={module.cof} isEss={module.isEss} />)
          }
          {moy === null ? null : (
            <Box my={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={3} borderRadius={'md'} width={'100%'} py={2} bg={moy < 10 ? colors.accent : colors.secondary}>
              <Heading fontSize={16} color={'white'}>Moyenne: </Heading>
              <Text fontSize={16 } color={'white'}> {moy.toFixed(2)} </Text>

            </Box>
          )}
          <Button minH={12} colorScheme="blue" onClick={() => {
            let some = 0;
            names.forEach(name => {
              some = some + Number.parseFloat(localStorage.getItem(name));
            })
            setMoy(some / 18);
          }}>Calculer</Button>
        </Box>
        <Text pos={'absolute'} bottom={0} fontStyle={'bold'} style={{color:"rgba(0,0,0,0.4)"}}>made-by-ibrahim</Text>
      </Box>
    </>
  )
}

export default App
