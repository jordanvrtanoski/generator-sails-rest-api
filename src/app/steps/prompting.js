/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

export default {
  askAdapters: function () {
    let done = this.async();

    // this.log(chalk.yellow('\nAdapters questions:'));
    this.prompt(questions.adapters, answers => {
      this.answers = Object.assign(this.answers || {}, answers);
      done();
    });
  },

  askApplication: function () {
    let done = this.async();

    this.log(chalk.yellow('\nApplication questions:'));
    this.prompt(questions.application, answers => {
      this.answers = Object.assign(this.answers || {}, answers);
      done();
    });
  },

  askDatabase: function () {
    let done = this.async();

    this.log(chalk.yellow('\nDatabase questions:'));
    this.prompt(questions.database, answers => {
      this.answers = Object.assign(this.answers || {}, answers);
      done();
    });
  },

  askBlueprints: function () {
    let done = this.async();

    this.log(chalk.yellow('\nBlueprints questions:'));
    this.prompt(questions.blueprints, answers => {
      this.answers = Object.assign(this.answers || {}, answers);
      done();
    });
  },

  askServices: function () {
    let done = this.async();

    this.log(chalk.yellow('\nService questions:'));
    this.prompt(questions.services, answers => {
      this.answers = Object.assign(this.answers || {}, answers);
      done();
    });
  }
};