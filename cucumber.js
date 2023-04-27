module.exports = {
    default: {
      parallel: 2,
      format: ['html:cucumber-report.html'],
      require:['../test/steps/*']
    }
  }