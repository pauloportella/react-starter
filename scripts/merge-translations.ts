// @ts-ignore
const glob = require("glob")
const path = require("path")
const fs = require("fs")
const _ = require("lodash")

const TENANT_CODES = ["demo", "hsbc"]
const EN_LOCALE_PATH = "src/config/intl/locales/en/"
const SRC_PATH = path.dirname(__filename).replace("scripts", "")
const LOCALES_PATH = path.dirname(__filename).replace("scripts", EN_LOCALE_PATH)
const CONCATENATED_MESSAGES_FILE_PATH = LOCALES_PATH.concat("en.json")

glob("src/**/messages.json", function(error, filePaths) {
  if (error) return console.log("error:", error)
  if (filePaths.length === 0) return console.log("No message files found")
  const mergedPayload = getMergedPayload(filePaths)
  writeMessagesFile(CONCATENATED_MESSAGES_FILE_PATH, mergedPayload)
  updateAllTenantLocaleFiles(TENANT_CODES, mergedPayload)
})

function getMergedPayload(filePaths) {
  return filePaths.reduce((acc, filePath) => {
    const pathName = SRC_PATH.concat(filePath)
    const filePayload = require(pathName)
    return {
      ...acc,
      ...filePayload
    }
  }, {})
}

function writeMessagesFile(filePath, payload) {
  let stringified
  try {
    stringified = JSON.stringify(payload, null, 2)
  } catch (e) {
    return console.log("File messages must contain a JSON object!", e)
  }
  fs.writeFile(
    filePath,
    stringified,
    {
      encoding: "utf8"
    },
    function(error) {
      if (error) console.log("Error:", error)
      console.log("File is created successfully.")
    }
  )
}

function updateAllTenantLocaleFiles(tenantCodes, payload) {
  const allTenantLocaleFilePaths = getAllTenantLocaleFilePaths(tenantCodes)

  allTenantLocaleFilePaths.map(tenantLocaleFilePath => {
    updateTenantLocalFile(tenantLocaleFilePath, payload)
  })
}

function updateTenantLocalFile(tenantLocaleFilePath, payload) {
  const tenantFilePayload = fs.existsSync(tenantLocaleFilePath)
    ? require(tenantLocaleFilePath)
    : {}

  const updatedPayload = _.merge({}, payload, tenantFilePayload)
  writeMessagesFile(tenantLocaleFilePath, updatedPayload)
}

function getAllTenantLocaleFilePaths(tenantCodes) {
  return tenantCodes.map(tenantCode => `${LOCALES_PATH}en.${tenantCode}.json`)
}
