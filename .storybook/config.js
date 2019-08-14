import React from "react"
import { configure, addParameters, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import StoryRouter from "storybook-react-router"
import "@storybook/addon-console"
import { withA11y } from "@storybook/addon-a11y"
import { configureActions } from "@storybook/addon-actions"
import { MockApp } from "../src/core/App"
// import IntlProvider from "../src/providers/IntlProvider"

configureActions({
  depth: 100,
  limit: 20
})

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(StoryRouter())
addDecorator(story => <MockApp>{story()}</MockApp>)
// addDecorator(story => <IntlProvider>{story()}</IntlProvider>)

addParameters({
  options: {
    name: "MORE GOOD"
  }
})

function loadStories() {
  const storiesContext = require.context("../src", true, /\.stories.tsx$/)
  storiesContext.keys().forEach(story => storiesContext(story))
}

configure(loadStories, module)
