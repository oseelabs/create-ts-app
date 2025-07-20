#!/usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';

const program = new Command();

program
  .name('create-ts')
  .description('A CLI to create a new typescript project from a template.')
  .version('1.0.0');

program
  .argument('<project-name>', 'Name of the new project directory')
  .action(async (projectName: string) => {
    console.log(
        chalk.yellow(
            figlet.textSync(
                'TS CLI', 
                {
                    font: '3D-ASCII', // You can choose different fonts
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 280,
                    whitespaceBreak: true
                }
            )
        )
    );

    const currentDir = process.cwd();
    const projectPath = path.join(currentDir, projectName);
    const templatePath = path.join(__dirname, '../template'); // Adjust path based on compiled output

    console.log(chalk.blue(`\nCreating a new project in ${chalk.bold(projectPath)}\n`));

    // Check if the project directory already exists
    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`Error: Directory '${projectName}' already exists. Please choose a different name or remove the existing directory.`));
      process.exit(1);
    }

    try {
      // Copy the template files
      await fs.copy(templatePath, projectPath);
      console.log(chalk.green('Project created successfully!'));
      console.log(chalk.yellow(`\nNext steps:`));
      console.log(chalk.cyan(`  cd ${projectName}`));
      console.log(chalk.cyan(`  npm install`));
      console.log(chalk.cyan(`  npm start\n`));
    } catch (error: any) {
      console.error(chalk.red(`Failed to create project: ${error.message}`));
      process.exit(1);
    }
  });

program.parse(process.argv);
