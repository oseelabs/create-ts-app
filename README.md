# @lueur/create-ts-app

A lightweight and efficient Command Line Interface (CLI) tool to quickly scaffold new TypeScript projects from a predefined template.  
Get your TypeScript development environment up and running in seconds!

---

## ✨ Features

- **Rapid Project Generation**: Create a new TypeScript project with a single command.
- **Standard Template**: Comes with a basic, ready-to-use TypeScript project structure.
- **npx Support**: Run the CLI without global installation, ensuring you always use the latest version.
- **Clear Instructions**: Provides immediate next steps after project creation.
- **Error Handling**: Prevents overwriting existing directories.
- **ASCII Art Banner**: A stylish "TS CLI" banner greets you upon execution.

---

## 🚀 Installation

This CLI is designed to be used with `npx`, meaning you don't need to install it globally.  
`npx` will download and execute the latest version of the package on demand.

---

## 📦 Usage

To create a new TypeScript project, open your terminal and run the following command, replacing `my-new-ts-project` with your desired project name:

```bash
npx @lueur/create-ts-app@latest my-new-ts-project
```

### Example:

```bash
npx @lueur/create-ts-app@latest awesome-typescript-app
```

Upon successful execution, you will see a stylish ASCII art banner and confirmation messages, along with instructions on how to navigate into your new project and install dependencies.

### Output Example

```
TS CLI
Creating a new project in /path/to/your/directory/awesome-typescript-app

Project created successfully!

Next steps:
  cd awesome-typescript-app
  npm install
  npm start
```

---

## 📂 Template Structure

The CLI generates a project with the following basic structure:

```
my-new-ts-project/
├── src
    └── index.ts
├── README.md
└── package.json
```

- `src/index.ts`: A simple TypeScript file.
- `README.md`: A basic README file for the new project.
- `package.json`: Configured with `"type": "module"` and `typescript` as a `devDependency` set to `latest`.

---

## 🛠️ Development (For Contributors)

If you wish to contribute to this CLI tool or test it locally before publishing:

1. Clone the repository:

   ```bash
   git clone https://github.com/oseelabs/create-ts-app.git
   cd create-ts-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the CLI:

   ```bash
   npm run build
   ```

   This compiles the TypeScript code from `src/` to `dist/`.

4. Test locally via `npm link`:

   ```bash
   npm link
   create-ts my-local-test-project
   ```

   To unlink:

   ```bash
   npm unlink
   ```

5. Test locally via `npm pack` (simulates `npx`):

   ```bash
   npm pack
   npx ./@lueur/create-ts-app-1.0.0.tgz my-packed-test-project
   ```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

### Steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes.
4. Commit:

   ```bash
   git commit -m "feat: Add new feature"
   ```

5. Push:

   ```bash
   git push origin feature/your-feature
   ```

6. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
