export const LANGUAGES = {

  javascript: "18.15.0",
  typescript: "5.3.0",
  python: "3.9.7",
  java: "16.0.2",
  go: "1.17",
  rust: "1.55.0"
}

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("¡" + "Hola, " + name + "!");\n}\n\ngreet("Fran");\n`,
  typescript: `\nfunction greet(name: string): void {\n\tconsole.log("¡" + "Hola, " + name + "!");\n}\n\ngreet("Fran");\n`,
  python: `\ndef greet(name):\n\tprint("¡Hola, " + name + "!")\n\ngreet("Fran")\n`,
  java: `\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("¡Hola, Mundo!");\n\t}\n}\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("¡Hola, Mundo!")\n}\n`,
  rust: `\nfn main() {\n\tprintln!("¡Hola, Mundo!");\n}\n`
}