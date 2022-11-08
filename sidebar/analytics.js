module.exports = [
  // Internal link
    {
      type: 'link',
      label: 'Home', // The link label
      href: '/analytics/analytics#selected-period', // The internal path
    }, {
    type: "category",
    collapsible: false,
    label: "Analytics",
    items: ["analytics/analytics"],
  },
   {
      type: 'html',
      value: '<a src="#selected-period" alt="Selected Period" >Selected Period</a>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
   {
    type: "category",
    collapsible: false,
    label: "Analytics",
    items: ["analytics/analytics"],
  }
]
