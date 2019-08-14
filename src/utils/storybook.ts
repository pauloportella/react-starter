import { storiesOf } from "@storybook/react"
import StoryRouter from "storybook-react-router"
import FormikDecorator from "./FormikDecorator"
import { LayoutDecorator, FluidLayoutDecorator } from "components"

export {
  addUIComponent,
  addFluidUIComponent,
  addIconComponent,
  addPageComponent,
  getStoryRouter,
  addFormElement
}

function addUIComponent(componentName) {
  return storiesOf(`UI|Components/${componentName}`, module).addDecorator(
    LayoutDecorator
  )
}

function addFluidUIComponent(componentName) {
  return storiesOf(`UI|components/${componentName}`, module).addDecorator(
    FluidLayoutDecorator
  )
}
function addIconComponent() {
  return storiesOf(`UI|Icons/`, module).addDecorator(LayoutDecorator)
}

function addPageComponent(componentName) {
  return storiesOf(`PAGES|/${componentName}`, module).addDecorator(
    LayoutDecorator
  )
}

function getStoryRouter(initialEntries, initialIndex) {
  return StoryRouter({}, { initialEntries, initialIndex })
}

function addFormElement(
  formElement,
  initialValues = {},
  validationSchema = null
) {
  return storiesOf(`UI|Form Elements/${formElement}`, module)
    .addDecorator(LayoutDecorator)
    .addDecorator(FormikDecorator(initialValues, validationSchema))
}
