module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            'Scripts/Compiled/calc.js': ['Scripts/calc.js']
        },
        watch: {
            files: ["Scripts/*.js"],
            tasks: ['browserify']
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify']);
}