import { Box } from "@chakra-ui/react"
import Editor from "@monaco-editor/react"
import { useState } from "react"
import { CODE_SNIPPETS } from "../data/languages.data"
import LanguageSelector from "./LanguageSelector"


interface EditorComponentProps {
  editorRef: React.MutableRefObject<IEditor | null>
  language: string
  setLanguage: (language: string) => void
}
interface IEditor {
  focus: () => void
}



function EditorComponent({ editorRef, language, setLanguage }: EditorComponentProps) {
  const [value, setValue] = useState('')
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
    <Box w="50%">

      <LanguageSelector onSelect={handleSelect} language={language} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]}
        onMount={handleEditorDidMount}
        value={value}
        onChange={handleValueChange}
      />
    </Box>
  )
}
export default EditorComponent
