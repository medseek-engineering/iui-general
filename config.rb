# Require any additional compass plugins here.
# require "susy"
# require "breakpoint"
require "sass-globbing"
require "susy"
require "breakpoint"
require "sassy-maps"
require "SassyLists"
require "sassy-buttons"
require "bootstrap-sass"



# Set this to the root of your project when deployed:
http_path = "/"
css_dir = File.join('lib','dist')
sass_dir = File.join('lib','src')
images_dir = File.join('lib','src','images')
javascripts_dir = "js"
fonts_dir = File.join('lib','src','fonts')

debug_info = true
environment = 'development'
output_style =  (environment == 'development') ? :expanded : :compressed


# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
line_comments = (environment == 'development')
color_output = false
sourcemap = (environment == :development)

additional_import_paths = [File.join('lib','src'), File.join('doc_assets','stylesheets')]



# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass