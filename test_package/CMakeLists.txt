# Test for QuickJS Conan package
# Dmitriy Vetutnev, ODANT, 2021


project(PackageTest CXX)
cmake_minimum_required(VERSION 3.18)


enable_testing()


function(library_test name)
    add_executable(${name} "${name}.cpp")
    target_link_libraries(${name} CONAN_PKG::quickjs)
    set_target_properties(${name}
        PROPERTIES
        INSTALL_RPATH "$ORIGIN"
        BUILD_WITH_INSTALL_RPATH True
    )
    add_test(
        NAME ${name}
        WORKING_DIRECTORY ${CMAKE_BINARY_DIR}/bin
        COMMAND ${name}
    )
endfunction()

find_program(QUICKJS_INTERPRETER
    NAMES qjs
    PATHS ${CMAKE_BINARY_DIR}/bin
    REQUIRED
    NO_DEFAULT_PATH
)

function(interpreter_test name)
    add_test(
        NAME ${name}
        WORKING_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}/bin
        COMMAND ${QUICKJS_INTERPRETER} ${ARGN}
    )
    if(UNIX)
        set_property(TEST ${name} PROPERTY ENVIRONMENT LD_LIBRARY_PATH=${CMAKE_BINARY_DIR}/bin)
    endif()
endfunction()


interpreter_test(test_interpreter --eval "console.log('I`m QuickJS');")

