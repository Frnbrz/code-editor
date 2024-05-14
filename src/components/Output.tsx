
import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { executeCode } from '../services/api'

interface OutputProps {
  editorRef: React.MutableRefObject<IEditor | null>
  language: string
  setLanguage: (language: string) => void
}
interface IEditor {
  focus: () => void
  getValue: () => string | undefined
}

function Output({ editorRef, language }: OutputProps) {

  const [output, setOutput] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  async function runCode() {
    const sourceCode = editorRef.current?.getValue()
    if (!sourceCode) return

    try {
      setIsLoading(true)
      const { run: result } = await executeCode(sourceCode, language)
      setOutput(result.output)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }

  }


  return (
    <Box
      w="50%"
    >
      <Text mb={2} fontSize='lg'>
        Output
      </Text>
      <Button variant='outline' colorScheme='green' mb='4'
        onClick={runCode}
        isLoading={isLoading}
      >
        Run Code
      </Button>

      <Box
        height='75vh'
        p='2'
        border='1px solid'
        borderRadius={4}
        borderColor='#333'
      >
        {output
          ? output
          : 'Output will be displayed here'
        }
      </Box>
    </Box>
  )
}

export default Output