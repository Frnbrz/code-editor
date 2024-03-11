import { Box } from "@chakra-ui/react"
import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"


interface IEditor {
  focus: () => void
}

function CodeEditor() {
  const editorRef = useRef<IEditor | null>(null)
  const [value, setValue] = useState('')
  const handleValueChange = (newValue: string | undefined) => {
    setValue(newValue || '')
    console.log(newValue)
  }

  const handleEditorDidMount = (editor: IEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue=""
        onMount={handleEditorDidMount}
        value={value}
        onChange={handleValueChange}
      />
    </Box>
  )
}
export default CodeEditor