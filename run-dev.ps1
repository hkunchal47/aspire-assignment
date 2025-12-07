# Refresh PATH to include Node.js
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Run the dev server
& "C:\Program Files\nodejs\npm.cmd" run dev

