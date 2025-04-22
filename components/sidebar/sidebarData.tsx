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
          path: "/Users",
          icon: <UsersIcon />,
        },
        {
          name: "Guarantors",
          path: "/Guarantors",
          icon: <GuarantorsIcon />,
        },
        {
          name: "Loans",
          path: "/Loans",
          icon: <LoansIcon />,
        },
        {
          name: "Decision Models",
          path: "/Decision-models",
          icon: <DecisionModelsIcon />,
        },
        {
          name: "Savings",
          path: "/Savings",
          icon: <SavingsIcon />,
        },
        {
          name: "Loan Requests",
          path: "/Loan-requests",
          icon: <LoanRequestsIcon />,
        },
        {
          name: "Whitelist",
          path: "/Whitelist",
          icon: <WhitelistIcon />,
        },
        {
          name: "Karma",
          path: "/Karma",
          icon: <KarmaIcon />,
        },
      ],
    },
    {
      title: "BUSINESSES",
      items: [
        {
          name: "Organization",
          path: "/BUSINESSES/Organization",
          icon: <OrganizationIcon />,
        },
        {
          name: "Loan Products",
          path: "/BUSINESSES/loan-products",
          icon: <LoanProductsIcon />,
        },
        {
          name: "Savings Products",
          path: "/BUSINESSES/Savings-products",
          icon: <SavingsProductsIcon />,
        },
        {
          name: "Fees and Charges",
          path: "/BUSINESSES/Fees-charges",
          icon: <FeesIcon />,
        },
        {
          name: "Transactions",
          path: "/BUSINESSES/Transactions",
          icon: <TransactionsIcon />,
        },
        {
          name: "Services",
          path: "/BUSINESSES/Services",
          icon: <ServicesIcon />,
        },
        {
          name: "Service Account",
          path: "/BUSINESSES/Service-account",
          icon: <ServiceAccountIcon />,
        },
        {
          name: "Settlements",
          path: "/BUSINESSES/Settlements",
          icon: <SettlementsIcon />,
        },
        {
          name: "Reports",
          path: "/BUSINESSES/Reports",
          icon: <ReportsIcon />,
        },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          name: "Preferences",
          path: "/SETTINGS/preferences",
          icon: <PreferencesIcon />,
        },
        {
          name: "Fees and Pricing",
          path: "/SETTINGS/fees-pricing",
          icon: <FeesAndPricingIcon />,
        },
        {
          name: "Audit Logs",
          path: "/SETTINGS/audit-logs",
          icon: <AuditLogsIcon />,
        },
        {
          name: "Systems Messages",
          path: "/SETTINGS/systems-messages",
          icon: <SystemsMessagesIcon />,
        },
      ],
    },
  ],
}
