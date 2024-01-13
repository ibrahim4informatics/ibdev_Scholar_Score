import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Input, Text } from "@chakra-ui/react"
import colors from '../colors.conf'
import { useState, useEffect } from "react"

const Module = ({ name, coef, isEss }) => {

    const [marks, setMarks] = useState({ exam: 0, cc: null });

    useEffect(() => {
        if (marks.cc !== null) {
            let moy = ((marks.exam * 0.6) + (marks.cc * 0.4)) * coef;
            localStorage.setItem(name, moy)
        }
        else {
            localStorage.setItem(name, marks.exam * coef)
        }
    }, [marks])
    return (
        <Accordion my={5} allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: colors.pirmary, color: colors.bg }}>
                        <Box display={'flex'} me={5} justifyContent={'space-between'} w={'100%'} h={'100%'} flex='1' textAlign='left'>
                            <Text>{name}</Text>
                            <Text>coeficent:{coef}</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {isEss && (
                        <Box>
                            <Heading fontSize={12} mb={1}>CC:</Heading>
                            <Input onChange={(e) => { setMarks({ ...marks, cc: e.target.value }); localStorage.setItem(name, JSON.stringify(marks)) }} name="cc" type="number" min={0} max={20} inputMode="numeric" />
                        </Box>
                    )}
                    <Box mt={3}>
                        <Heading fontSize={12} mb={1}>EXAMIN:</Heading>
                        <Input onChange={(e) => { setMarks({ ...marks, exam: e.target.value }); localStorage.setItem(name, JSON.stringify(marks)) }} name="exam" type="number" min={0} max={20} inputMode="numeric" />
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Module