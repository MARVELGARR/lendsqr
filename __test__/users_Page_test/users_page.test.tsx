import { render, screen, within } from "@testing-library/react";
import UsersPage, { dashboardStats } from "../../app/(routes)/(navigationRoutes)/Dashboard/Users/page";

// ✅ Mock StatCardGrid
jest.mock("../../components/stat-card/StatCardGrid", () => ({
  __esModule: true,
  default: ({ stats }: { stats: any[] }) => (
    <div data-testid="stat-card-grid">
      {stats.map((stat, i) => (
        <div key={i} data-testid="stat-card">
          {stat.type}: {stat.value}
        </div>
      ))}
    </div>
  ),
}));

// ✅ Mock DataTable
jest.mock("../../components/data-table/DataTable", () => ({
  __esModule: true,
  default: () => <div data-testid="data-table">DataTable</div>,
}));

describe("Users Page", () => {
  beforeEach(() => {
    render(<UsersPage />);
  });

  it("renders the Users heading", () => {
    expect(screen.getByRole("heading", { name: /users/i })).toBeInTheDocument();
  });

  it("renders StatCardGrid with correct number of cards", () => {
    const grid = screen.getByTestId("stat-card-grid");
    expect(grid).toBeInTheDocument();

    const cards = screen.getAllByTestId("stat-card");
    expect(cards.length).toBe(dashboardStats.length);

    // ✅ Check each stat card contains correct info (scoped inside grid)
    dashboardStats.forEach((stat) => {
      const regex = new RegExp(`^${stat.type}:\\s*${stat.value}$`, "i");
      expect(within(grid).getByText(regex)).toBeInTheDocument();
    });
  });

  it("renders the DataTable", () => {
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
});
