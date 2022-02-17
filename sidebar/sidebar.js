const overview = require("./overview")
const buildingChatbots = require("./buildingChatbots")
const goingToProduction = require("./goingToProduction")
const messaging = require("./messaging")
const chatbotManagement = require("./chatbotManagement")
const enterprise = require("./enterprise")

const draftPages = [
  "qna-item/convert-to-intent",
  "conversation-hooks",
  "ci-cd-hooks",
  "code-execution",
  "website-interactions",
  "website-embedding/jwt-authentication",
  "botpress-webchat/standalone-webchat",
  "welcome-screen",
  "customizations",
  "custom-widgets",
  "environment-migrations",
  "chatbot-migrations",
  "import-export",
  "read-write-production",
  "read-only-production",
  "multi-stage-environment",
  "going-to-production/windows",
  "linux",
  "revisions-and-rollback",
  "promote-through-pipeline",
  "language-understanding/questions-&-answers/feedback",
  "content-management",
  "server-hooks",
  "built-in-analytics",
  "custom-analytics",
  "integrations",
  "import-nodejs-libraries",
  "environment-variables",
  "code-sharing",
  "automated-testing",
  "trigger-a-flow",
  "rich-context-as-answer",
  "enable-disable",
  "language-understanding/contexts",
  "workflow-triggering",
  "rich-messages",
  "language-understanding/questions-&-answeres/feedback",
  "bulk-import-export",
  "spell-checking",
  "flow-editor/flow-lifecycle/",
  "flow-lifecycle/custom-transitions",
  "skill-nodes/single-choice",
  "skill-nodes/auth-gate",
  "skill-nodes/custom-skills",
  "custom-content-elements",
  "custom-actions",
  "developers/file-system",
  "multi-lingual-chatbots/language-understanding",
  "/deploy/windows",
]

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
