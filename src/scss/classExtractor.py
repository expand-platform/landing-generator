from os.path import normpath, abspath, join, dirname
from os import walk, getcwd
from re import findall, MULTILINE


class scssParser:
    """extracts classes in .scss files and puts them into .json"""

    def __init__(self):
        # files
        self.scss_folder = normpath("docs/.vitepress/theme/scss")
        self.ignored_files = [
            "all.scss",
            "classParser.py",
            "vitepress.scss",
            "custom-reset.scss",
            "media.scss",
        ]

        # regex
        self.file_content = ""
        self.find_class_regex = r"^\.[\w\\:-]+"
        self.css_classes = []

        # json
        self.start_string = "export const booleanProps = "
        self.write_file = normpath(
            join(getcwd(), "docs/.vitepress/theme/js/custom-props/booleanProps.ts")
        )
        self.final_string = ""

        self.extract_css_classes()


    def parse_scss(self):
        """extract classes from scss files"""
        for root, dirs, files in walk(self.scss_folder):

            # Loop through scss files.
            # Ignore unwanted files when needed
            for file in files:
                for ignored_file in self.ignored_files:
                    if file == ignored_file:
                        pass
                    else:
                        path_to_file = abspath(join(root, file))

                        with open(path_to_file, "r") as scss_file:
                            self.file_content = scss_file.read()

                            # find classes
                            self.get_css_classes()


    def get_css_classes(self):
        found_css_classes = findall(
            pattern=self.find_class_regex, string=self.file_content, flags=MULTILINE
        )

        for new_class in found_css_classes:
            if new_class not in self.css_classes:
                self.css_classes.append(new_class)


    def remove_dots(self):
        self.css_classes = [
            scss_class.replace(".", "").replace("\\", "") for scss_class in self.css_classes
        ]


    def write_classes(self):
        """write classes to file"""
        self.final_string = self.start_string + str(self.css_classes)
        self.final_string = self.final_string.replace("'{", "{").replace("}'", "}")

        with open(self.write_file, "w") as js_file:
            js_file.write(self.final_string)


    def make_objects(self):
        """ add extra data to props """
        values = [
            "{type: Boolean, default: false}" for item in range(len(self.css_classes))
        ]
        self.css_classes = dict(zip(self.css_classes, values))


    def extract_css_classes(self):
        self.parse_scss()
        self.remove_dots()
        self.make_objects()
        self.write_classes()
        
        print("classes extracted successfully")


scssParser()
