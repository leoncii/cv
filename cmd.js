const childProcess = require('child_process')
// const objShell = new ActiveXObject('Shell.Application')
// objShell.ShellExecute('cmd.exe', 'cd C: C:\\cd c:\\ext_file main.exe test.txt', 'C:\\WINDOWS\\system32', 'open', 1)

childProcess.exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.log(`Error: [] ${err}`)
  }
  if (stderr) {
    console.log(`Error: [] ${stderr}`)
  }
  console.log(`stdout: ${stdout}`)
})
