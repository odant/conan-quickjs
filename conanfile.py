# QuickJS Conan package
# Dmitriy Vetutnev, ODANT 2021


from conans import ConanFile, tools


class ConanPackage(ConanFile):
    name = "quickjs"
    version = "2020-11-08"
    license = "MIT License https://opensource.org/licenses/MIT"
    description = "QuickJS is a small and embeddable Javascript engine. It supports the ES2020 specification 1 including modules, asynchronous generators, proxies and BigInt."
    url = "https://github.com/odant/conan-quickjs"

    settings = {
        "os": ["Linux"],
        "compiler": ["gcc"],
        "arch": ["x86_64"]
    }
    options = {
        "with_unit_tests": [True, False]
    }
    default_options = {
        "with_unit_tests": False
    }

    generators = "cmake"
    exports_sources = "src/*"
    no_copy_source = False
    build_policy = "missing"


    def configure(self):
        del self.settings.compiler.libcxx


    def build(self):
        with tools.chdir("src"):
            self.run("make -j %s" % tools.cpu_count())
            if self.options.with_unit_tests:
                self.run("make test")


    def package(self):
        self.copy("quickjs.h", dst="include", src="src")


    def package_id(self):
        self.info.options.with_unit_tests = "any"


    def package_info(self):
        self.cpp_info.libs = ["quickjs"]

