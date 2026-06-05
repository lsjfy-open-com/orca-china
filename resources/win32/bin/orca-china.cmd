@echo off
setlocal
set "SCRIPT_DIR=%~dp0"
for %%I in ("%SCRIPT_DIR%..") do set "RESOURCES_DIR=%%~fI"
REM Why: once %%~fI canonicalizes RESOURCES_DIR it no longer ends with a slash,
REM so Windows batch needs an explicit "\.." segment here.
for %%I in ("%RESOURCES_DIR%\..") do set "APP_DIR=%%~fI"
set "ELECTRON=%APP_DIR%\Orca China.exe"

if not exist "%ELECTRON%" (
  echo Unable to locate Orca China.exe next to "%RESOURCES_DIR%" 1>&2
  exit /b 1
)

REM Why: the localized build uses a separate launcher name so it does not
REM replace or call into an already installed upstream Orca command.
set "CLI=%RESOURCES_DIR%\app.asar.unpacked\out\cli\index.js"

set "ORCA_NODE_OPTIONS=%NODE_OPTIONS%"
set "ORCA_NODE_REPL_EXTERNAL_MODULE=%NODE_REPL_EXTERNAL_MODULE%"
set NODE_OPTIONS=
set NODE_REPL_EXTERNAL_MODULE=
set ELECTRON_RUN_AS_NODE=1

"%ELECTRON%" "%CLI%" %*
