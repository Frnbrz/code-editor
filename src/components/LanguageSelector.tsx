import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { LANGUAGES } from "../data/languages.data"


const languages = Object.entries(LANGUAGES)
interface LanguageSelectorProps {
  onSelect: (language: string) => void
  language: string
}

const ACTIVE_COLOR = "blue.400"

function LanguageSelector({ onSelect, language }: LanguageSelectorProps) {
  return (
    <Box mb={4} ml={2}>
      <Text mb={2} fontSize="lg">
        Selecciona un lenguaje
      </Text>
      <Menu>
        <MenuButton as={Button}>
          {language}
        </MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem key={lang}
              color={language === lang ? ACTIVE_COLOR : ""}
              bg={language === lang ? "gray.700" : "transparent"}
              _hover={{ color: ACTIVE_COLOR, bg: "gray.900" }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}
export default LanguageSelector