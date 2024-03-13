import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.example.com'
})

export async function runCode(sourceCode: string, language: string) {
  try {
    const response = await API.post('/run', { sourceCode, language })
    return response.data
  } catch (error) {
    console.error(error)
  }
}