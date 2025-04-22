import { screen, fireEvent, render } from "@testing-library/react";
import SidebarComponent from "../../components/sidebar/SidebarComponent";

import styles from "../../components/sidebar/sidebarComponent.module.scss"

describe("SidebarComponent", () => {
    it("renders the sidebar component and check if mounted", () => {
        render(<SidebarComponent />);
        const sidebar = screen.getByTestId("sidebar-component");
        expect(sidebar).toBeInTheDocument();
    })

    it("renders the sidebar items and check if they are presents", () => {
        render(<SidebarComponent />);
        const sidebarItems = screen.getAllByTestId("sidebar-item");
        expect(sidebarItems.length).toBeGreaterThan(0);
    })

    // NOTE: by default the sidebar is open in mobile

    it("toggles the sidebar open and closed on mobile toggle click", () => {
        render(<SidebarComponent />)
      
        const toggleButton = screen.getByRole("button", { name: /close sidebar/i }) // only one button element with this name and it's for the sidebar toggle but used matcher to be specific
        fireEvent.click(toggleButton)
        
        expect(toggleButton).toHaveAttribute("aria-label", "Open sidebar") // check if the button is open or closed
        
        fireEvent.click(toggleButton)
        expect(toggleButton).toHaveAttribute("aria-label", "Close sidebar") // check if the button is open or closed

      })
    it("test if the overlay is not present when the sidebar is close", () => {
        render(<SidebarComponent />)
        const toggleButton = screen.getByRole("button", { name: /close sidebar/i }) // only one button element with this name and it's for the sidebar toggle but used matcher to be specific
        fireEvent.click(toggleButton)
        
        const overlay = screen.queryByTestId("overlay")
        expect(overlay).not.toBeInTheDocument()
        
        fireEvent.click(toggleButton)
        const _overlay = screen.getByTestId("overlay")
        expect(_overlay).toBeInTheDocument()

    })
    it("test if the overlat is present when the sidebar is open", ()=>{
        render(<SidebarComponent/>)
        const _overlay = screen.getByTestId("overlay")
        expect(_overlay).toBeInTheDocument()

    })


    
    // Test for sidebar items
    it("sets an item as active when clicked and not active when not clicked", () => {
        render(<SidebarComponent />)
      
        const dashboardLink = screen.getByTestId("dashboard-link")
        fireEvent.click(dashboardLink)
        
        expect(dashboardLink).toHaveClass("menuItem active")
        
        
      })

})