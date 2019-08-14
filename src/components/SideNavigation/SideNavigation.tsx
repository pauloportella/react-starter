/* eslint-disable */
import React from "react"
import { Navigation } from "baseui/side-navigation"

// export interface ISideNavigationProps extends RouteComponentProps {}

const nav = [
  {
    title: "Colors",
    itemId: "#level1.1",
    subNav: [
      {
        title: "Primary",
        itemId: "#level1.1.1"
      },
      {
        title: "Shades",
        itemId: "#level1.1.2",
        subNav: [
          {
            title: "Dark",
            itemId: "#level1.1.2.1"
          },
          {
            title: "Light",
            itemId: "#level1.1.2.2"
          }
        ]
      }
    ]
  },
  {
    title: "Sizing",
    itemId: "#level1.2"
  },
  {
    title: "Typography",
    itemId: "#level1.3"
  }
]

export default function SideNavigation() {
  const [location, setLocation] = React.useState("#level1.1.1")

  return (
    <Navigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            height: "100%",
            width: "210px",
            position: "fixed",
            top: 0,
            left: 0,
            paddingTop: "73px",
            borderRight: `1px solid ${$theme.colors.mono400}`,
            zIndex: -1
          })
        }
      }}
      items={nav}
      activeItemId={location}
      onChange={({ item }) => setLocation(item.itemId)}
    />
  )
}
