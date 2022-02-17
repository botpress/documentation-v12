const fs = require("fs")
const path = require("path")
const overview = require("./overview")
const buildingChatbots = require("./buildingChatbots")
const goingToProduction = require("./goingToProduction")
const messaging = require("./messaging")
const chatbotManagement = require("./chatbotManagement")
const enterprise = require("./enterprise")
const fm = require("front-matter")

function readDirRecursive(dirPath) {
  const dirEnts = fs.readdirSync(dirPath, { withFileTypes: true })
  return dirEnts.flatMap((entry) => {
    const filePath = path.join(dirPath, entry.name)
    if (entry.isFile()) {
      return [filePath]
    } else {
      return readDirRecursive(filePath)
    }
  })
}

const docsPath = path.join(__dirname, "../docs")
const files = readDirRecursive(docsPath)

const draftPages = files
  .map((f) => {
    const data = fs.readFileSync(f)
    const content = fm(data.toString())
    if (!content.body.match(/[a-z0-9]+/gi)) {
      const localId = content.attributes.id
      const lst = f.lastIndexOf("/")
      return f
        .slice(0, f.lastIndexOf("/") + 1)
        .concat(localId)
        .split("/docs/")[1]
      // return strip tout ce qui est avant /docs/ et remplace le tout ce qui a apres le dernier / pour le local idt
    }
  })
  .filter((f) => !!f)

if (process.env.NODE_ENV !== "production") {
  console.log("draft pages are", draftPages)
}

function isDraft(pageLink) {
  return draftPages.some((draft) => pageLink.includes(draft))
}

function filterDraftPages(sidebar) {
  return sidebar
    .map((item) => {
      if (typeof item === "string") {
        return !isDraft(item) && item
      } else {
        const link =
          !!item.link && !isDraft(item.link.id) ? item.link : undefined
        const items = filterDraftPages(item.items)
        if (items.length === 0) {
          if (!!link) {
            return link.id
          } else {
            return undefined
          }
        }

        return {
          ...item,
          link,
          items,
        }
      }
    })
    .filter((item) => !!item)
}

const daata = filterDraftPages(goingToProduction)

module.exports = {
  overviewSidebar: filterDraftPages(overview),
  buildingChatbotsSidebar: filterDraftPages(buildingChatbots),
  goingToProductionSidebar: filterDraftPages(goingToProduction),
  messagingSidebar: filterDraftPages(messaging),
  chatbotManagementSidebar: filterDraftPages(chatbotManagement),
  enterpriseSidebar: filterDraftPages(enterprise),
}
