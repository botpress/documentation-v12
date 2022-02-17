// module.exports = [
//   {
//     type: "category",
//     collapsible: false,
//     label: "Licensing",
//     items: ["enterprise/licensing/enterprise-licensing"],
//   },
//   {
//     type: "category",
//     collapsible: false,
//     label: "User Management and Security",
//     items: [
//       {
//         type: "category",
//         collapsible: true,
//         label: "Role-Based Access Control (RBAC)",
//         items: [
//           "enterprise/user-management-and-security/role-based-access-control/roles",
//           "enterprise/user-management-and-security/role-based-access-control/collaborators",
//         ],
//       },
//       {
//         type: "category",
//         collapsible: true,
//         label: "Authentication Methods",
//         items: [
//           "enterprise/user-management-and-security/authentication-methods/basic-authentication",
//           "enterprise/user-management-and-security/authentication-methods/saml",
//           "enterprise/user-management-and-security/authentication-methods/oauth2",
//           "enterprise/user-management-and-security/authentication-methods/ldap",
//         ],
//       },
//       {
//         type: "category",
//         collapsible: true,
//         label: "Single-Sign On (SSO)",
//         items: [
//           "enterprise/user-management-and-security/single-sign-on/sso-with-google-oauth2",
//           "enterprise/user-management-and-security/single-sign-on/sso-with-github-oauth2",
//           "enterprise/user-management-and-security/single-sign-on/azure-oauth2",
//         ],
//       },
//     ],
//   },
//   {
//     type: "category",
//     collapsible: false,
//     label: "Server and CICD Management",
//     items: [
//       "enterprise/server-and-cicd-management/production-checklist",
//       "enterprise/server-and-cicd-management/monitoring",
//       "enterprise/server-and-cicd-management/alerting",
//       {
//         type: "category",
//         collapsible: true,
//         label: "Pipelines",
//         items: [
//           "enterprise/server-and-cicd-management/pipelines/configure-pipeline",
//           "enterprise/server-and-cicd-management/pipelines/promote-through-pipeline",
//           "enterprise/server-and-cicd-management/pipelines/revisions-and-rollback",
//         ],
//       },
//     ],
//   },
//   {
//     type: "category",
//     collapsible: false,
//     label: "Advanced Chatbots",
//     items: [
//       {
//         type: "category",
//         collapsible: true,
//         label: "Multi-lingual Chatbots",
//         items: [
//           "enterprise/advanced-chatbots/multi-lingual-chatbots/language-understanding",
//           "enterprise/advanced-chatbots/multi-lingual-chatbots/content-management",
//           "enterprise/advanced-chatbots/multi-lingual-chatbots/switching-languages",
//         ],
//       },
//     ],
//   },
// ]

module.exports = [
  {
    type: "category",
    collapsible: false,
    label: "On-Premise Deployment",
    items: [
      {
        type: "category",
        collapsible: true,
        label: "Deploy",
        link: {
          type: "doc",
          id: "going-to-production/deploy/deploy",
        },
        items: [
          "going-to-production/deploy/linux",
          "going-to-production/deploy/windows",
          "going-to-production/deploy/aws",
          "going-to-production/deploy/digitalocean",
          "going-to-production/deploy/docker-compose",
          "going-to-production/deploy/enterprise-scaling",
        ],
      },
      {
        type: "category",
        collapsible: true,
        label: "Hardware & Software Requirements",
        link: {
          type: "doc",
          id: "going-to-production/requirements/requirements",
        },
        items: ["going-to-production/requirements/benchmarking"],
      },
      "going-to-production/environment-variables",
      "going-to-production/updating",
    ],
  },
  // {
  //   type: "category",
  //   collapsible: false,
  //   label: "Development Lifecycle",
  //   items: [
  //     {
  //       type: "category",
  //       collapsible: true,
  //       label: "Environments",
  //       items: [
  //         "going-to-production/development-lifecycle/environments/read-write-production",
  //         "going-to-production/development-lifecycle/environments/read-only-production",
  //         "going-to-production/development-lifecycle/environments/multi-stage-environment",
  //       ],
  //     },
  //     "going-to-production/development-lifecycle/versioning",
  //     "going-to-production/development-lifecycle/import-export",
  //   ],
  // },
  // {
  //   type: "category",
  //   collapsible: false,
  //   label: "Migrations",
  //   items: [
  //     "going-to-production/migrations/chatbot-migrations",
  //     "going-to-production/migrations/environment-migrations",
  //   ],
  // },
]
