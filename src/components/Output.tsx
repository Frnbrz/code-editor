import { Box, Button, Text } from '@chakra-ui/react'

interface OutputProps {
  editorRef: React.MutableRefObject<IEditor | null>
  language: string
  setLanguage: (language: string) => void
}
interface IEditor {
  focus: () => void
  getValue: () => string | undefined
}

function Output({ editorRef, language, setLanguage }: OutputProps) {
  async function runCode() {
    const sourceCode = editorRef.current?.getValue()
    if (!sourceCode) return

    try {
      const response = await fetch('http://localhost:3001/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sourceCode, language })
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
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
        test
      </Box>
    </Box>
  )
}

export default Output