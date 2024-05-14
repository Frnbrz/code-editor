export const LANGUAGES = {
  javascript: '18.15.0',
  typescript: '5.0.3',
  python: '3.10.0',
  java: '15.0.2',
  go: '1.16.2',
  rust: '1.68.2',
}

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("¡" + "Hola, " + name + "!");\n}\n\ngreet("Fran");\n`,
  typescript: `\nfunction greet(name: string): void {\n\tconsole.log("¡" + "Hola, " + name + "!");\n}\n\ngreet("Fran");\n`,
  python: `\ndef greet(name):\n\tprint("¡Hola, " + name + "!")\n\ngreet("Fran")\n`,
  java: `\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("¡Hola, Mundo!");\n\t}\n}\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("¡Hola, Mundo!")\n}\n`,
  rust: `\nfn main() {\n\tprintln!("¡Hola, Mundo!");\n}\n`,
}
