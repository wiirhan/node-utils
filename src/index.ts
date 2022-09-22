import fs from "fs"

const walk = (path: string, callback: (p: string, f: string) => void) => {
  const files = fs.readdirSync(path)

  files.forEach((file) => {
    const folder = path + "/" + file
    if (fs.statSync(folder).isFile()) {
      callback(path, file)
    } else {
      walk(folder, callback)
    }
  })
}

/**
 * deep change file extensions name
 * @param dir dirname
 * @param from old file extensions
 * @param to new file extensions
 */
export const deepChangeFileExtensionsName = (
  dir: string,
  from: string = "js",
  to: string = "ts",
) => {
  walk(dir, (path: string, fileName: string) => {
    const oldPath = path + "/" + fileName
    const newPath = path + "/" + fileName.replace(`.${from}`, `.${to}`)
    fs.rename(oldPath, newPath, (err) => {
      console.log(err)
    })
  })
}

export const foo = "foo"
export default {
  foo,
}
