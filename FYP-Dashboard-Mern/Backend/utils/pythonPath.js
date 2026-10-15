const fs = require("fs");

function getPythonPath() {
  if (process.env.PYTHON_PATH) {
    // If it's a file path and exists, or a general command like 'python3' / 'python'
    if (fs.existsSync(process.env.PYTHON_PATH) || !process.env.PYTHON_PATH.includes("/") && !process.env.PYTHON_PATH.includes("\\")) {
      return process.env.PYTHON_PATH;
    }
    return process.env.PYTHON_PATH;
  }

  const preferredCandidates = [
    "C:\\Users\\HP\\AppData\\Local\\Programs\\Python\\Python314\\python.exe",
    "D:\\anaconda3\\python.exe"
  ];

  for (const candidate of preferredCandidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  // Cross-platform fallback: on Windows 'python', on Linux/macOS 'python3'
  return process.platform === "win32" ? "python" : "python3";
}

module.exports = getPythonPath;
