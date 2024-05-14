import axios from 'axios'
import { LANGUAGES } from '../data/languages.data'

const API = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston',
})

export async function executeCode(sourceCode: string, language: string) {
  const response = await API.post('/execute', {
    language,
    version: LANGUAGES[language as keyof typeof LANGUAGES],
    files: [
      {
        content: sourceCode,
      },
    ],
  })
  return response.data
}
