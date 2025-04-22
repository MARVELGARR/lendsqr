import { screen,  } from "@testing-library/dom"
import AppLayout from "../../app/(routes)/(navigationRoutes)/Dashboard/layout"
import { render } from "@testing-library/react"

describe("test for components in the application layout", () => {
    it("test for if the header component is present", () => {
        render(<AppLayout children={<div />} />)

        
        
        const headerComponent = screen.getByTestId("application-header")
        expect(headerComponent).toBeInTheDocument()
    })
    it("test for if the sidebar component is present", () => {
        render(<AppLayout children={<div />} />)
        const sidebarcomponent = screen.getByTestId("sidebar-component")
        expect(sidebarcomponent).toBeInTheDocument()
        
    })
    
    it("test for if the main component is present", () => {
        render(<AppLayout children={<div />} />)
        const mainChildren = screen.getByRole("main")
        expect(mainChildren).toBeInTheDocument()

    })

    it("test for if the main children is present", () => {
        render(<AppLayout><div>Test child</div></AppLayout>)
        expect(screen.getByText("Test child")).toBeInTheDocument()

    })
})