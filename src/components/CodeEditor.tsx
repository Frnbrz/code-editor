import { Box } from "@chakra-ui/react"
import Editor from "@monaco-editor/react"
import { useRef, useState } from "react"
import { CODE_SNIPPETS } from "../data/languages.data"
import LanguageSelector from "./LanguageSelector"



interface IEditor {
  focus: () => void
}

function CodeEditor() {
  const editorRef = useRef<IEditor | null>(null)
  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('javascript')
  const handleValueChange = (newValue: string | undefined) => {
    setValue(newValue || '')
    console.log(newValue)
  }

  const handleEditorDidMount = (editor: IEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  const handleSelect = (language: string) => {
    setLanguage(language)
    setValue(
      CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]
    )
  }

  return (
    <Box>
      <LanguageSelector onSelect={handleSelect} language={language} />
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage={language}
        defaultValue={CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]}
        onMount={handleEditorDidMount}
        value={value}
        onChange={handleValueChange}
      />
    </Box>
  )
}
export default CodeEditor