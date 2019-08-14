import React from "react"
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList
} from "baseui/header-navigation"
import { StatefulSelect as Search, TYPE } from "baseui/select"

// import { StyledLink } from "baseui/link"

export interface IHeaderProps {
  children?: React.ReactNode
}

const options = {
  options: [
    { id: "AliceBlue", color: "#F0F8FF" },
    { id: "AntiqueWhite", color: "#FAEBD7" },
    { id: "Aqua", color: "#00FFFF" },
    { id: "Aquamarine", color: "#7FFFD4" },
    { id: "Azure", color: "#F0FFFF" },
    { id: "Beige", color: "#F5F5DC" },
    { id: "Bisque", color: "#FFE4C4" },
    { id: "Black", color: "#000000" }
  ],
  labelKey: "id",
  valueKey: "color",
  placeholder: "Search colors",
  maxDropdownHeight: "300px"
}

export default function Header({ children }: IHeaderProps) {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            background: $theme.colors.white,
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0
          })
        }
      }}
    >
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>MORE GOOD</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        {/* <NavigationItem>
          <StyledLink href="#">Tab Link One</StyledLink>
        </NavigationItem> */}
      </NavigationList>

      <NavigationList $align={ALIGN.right}>
        <NavigationItem style={{ width: "200px" }}>
          <Search
            {...options}
            type={TYPE.search}
            getOptionLabel={props => props.option!.id || null}
            onChange={() => {}}
          />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  )
}
