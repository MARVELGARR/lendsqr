import {
  DashboardIcon,
  UsersIcon,
  GuarantorsIcon,
  LoansIcon,
  DecisionModelsIcon,
  SavingsIcon,
  LoanRequestsIcon,
  WhitelistIcon,
  KarmaIcon,
  OrganizationIcon,
  LoanProductsIcon,
  SavingsProductsIcon,
  FeesIcon,
  TransactionsIcon,
  ServicesIcon,
  ServiceAccountIcon,
  SettlementsIcon,
  ReportsIcon,
  PreferencesIcon,
  FeesAndPricingIcon,
  AuditLogsIcon,
  SystemsMessagesIcon,
} from "./icons"

export const sidebarData = {
  icons: {
    Dashboard: DashboardIcon,
    Organization: OrganizationIcon,
  },
  sections: [
    {
      title: "CUSTOMERS",
      items: [
        {
          name: "Users",
          path: "/users",
          icon: <UsersIcon />,
        },
        {
          name: "Guarantors",
          path: "/guarantors",
          icon: <GuarantorsIcon />,
        },
        {
          name: "Loans",
          path: "/loans",
          icon: <LoansIcon />,
        },
        {
          name: "Decision Models",
          path: "/decision-models",
          icon: <DecisionModelsIcon />,
        },
        {
          name: "Savings",
          path: "/savings",
          icon: <SavingsIcon />,
        },
        {
          name: "Loan Requests",
          path: "/loan-requests",
          icon: <LoanRequestsIcon />,
        },
        {
          name: "Whitelist",
          path: "/whitelist",
          icon: <WhitelistIcon />,
        },
        {
          name: "Karma",
          path: "/karma",
          icon: <KarmaIcon />,
        },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        {
          name: "Organization",
          path: "/organization",
          icon: <OrganizationIcon />,
        },
        {
          name: "Loan Products",
          path: "/loan-products",
          icon: <LoanProductsIcon />,
        },
        {
          name: "Savings Products",
          path: "/savings-products",
          icon: <SavingsProductsIcon />,
        },
        {
          name: "Fees and Charges",
          path: "/fees-charges",
          icon: <FeesIcon />,
        },
        {
          name: "Transactions",
          path: "/transactions",
          icon: <TransactionsIcon />,
        },
        {
          name: "Services",
          path: "/services",
          icon: <ServicesIcon />,
        },
        {
          name: "Service Account",
          path: "/service-account",
          icon: <ServiceAccountIcon />,
        },
        {
          name: "Settlements",
          path: "/settlements",
          icon: <SettlementsIcon />,
        },
        {
          name: "Reports",
          path: "/reports",
          icon: <ReportsIcon />,
        },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          name: "Preferences",
          path: "/preferences",
          icon: <PreferencesIcon />,
        },
        {
          name: "Fees and Pricing",
          path: "/fees-pricing",
          icon: <FeesAndPricingIcon />,
        },
        {
          name: "Audit Logs",
          path: "/audit-logs",
          icon: <AuditLogsIcon />,
        },
        {
          name: "Systems Messages",
          path: "/systems-messages",
          icon: <SystemsMessagesIcon />,
        },
      ],
    },
  ],
}
