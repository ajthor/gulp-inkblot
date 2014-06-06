# Gulp-Inkblot

## Roadmap

I would like this gulp plugin to stay abreast of the changes that happen in the 'inkblot' project. If any major functionality or interface changes happen in the inkblot project, this project should be (minimally, but continually) affected by those changes.

## TODO

- Fix 'buffer' in inkblot project so that inkblot will accept buffers as arguments (or be vinyl compatible) in 'compile' function. Run will be the CLI interface, and this plugin can bypass the file loading and call 'compile' directly.