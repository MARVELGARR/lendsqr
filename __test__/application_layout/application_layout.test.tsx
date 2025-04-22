import { screen,  } from "@testing-library/dom"
import AppLayout from "../../app/(routes)/(navigationRoutes)/Dashboard/layout"
import { render } from "@testing-library/react"

describe("test for components in the application layout", () => {
    it("test for if the header component is present", () => {
        render(<AppLayout children={<div />} />)

        const sidebarcomponent = screen.getByTestId("sidebar-component")

        const mainChildren = screen.getByRole("main")
        
        const headerComponent = screen.getByTestId("application-header")
        expect(mainChildren).toBeInTheDocument()
        expect(sidebarcomponent).toBeInTheDocument()
        expect(headerComponent).toBeInTheDocument()
    })
})