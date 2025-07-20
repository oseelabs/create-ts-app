#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
program
    .name('create-ts')
    .description('A CLI to create a new typescript project from a template.')
    .version('1.0.0');
program
    .argument('<project-name>', 'Name of the new project directory')
    .action((projectName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk_1.default.yellow(figlet_1.default.textSync('TS CLI', {
        font: '3D-ASCII', // You can choose different fonts
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 280,
        whitespaceBreak: true
    })));
    const currentDir = process.cwd();
    const projectPath = path.join(currentDir, projectName);
    const templatePath = path.join(__dirname, '../template'); // Adjust path based on compiled output
    console.log(chalk_1.default.blue(`\nCreating a new project in ${chalk_1.default.bold(projectPath)}\n`));
    // Check if the project directory already exists
    if (fs.existsSync(projectPath)) {
        console.error(chalk_1.default.red(`Error: Directory '${projectName}' already exists. Please choose a different name or remove the existing directory.`));
        process.exit(1);
    }
    try {
        // Copy the template files
        yield fs.copy(templatePath, projectPath);
        console.log(chalk_1.default.green('Project created successfully!'));
        console.log(chalk_1.default.yellow(`\nNext steps:`));
        console.log(chalk_1.default.cyan(`  cd ${projectName}`));
        console.log(chalk_1.default.cyan(`  npm install`));
        console.log(chalk_1.default.cyan(`  npm start\n`));
    }
    catch (error) {
        console.error(chalk_1.default.red(`Failed to create project: ${error.message}`));
        process.exit(1);
    }
}));
program.parse(process.argv);
