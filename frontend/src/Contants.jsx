import {
  Home,
  FileText,
  BarChart,
  MessageCircle,
  Settings,
  ChevronRight,
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Files,
} from "lucide-react";

const menuItems = [
  { icon: <Home />, text: "Dashboard", path: "/" },

  {
    icon: <Users />,
    text: "Users Management",
    path: "/customers",
    submenu: [
      { icon: <ChevronRight />, text: "Customer", path: "/customers/all" },
      { icon: <ChevronRight />, text: "Employee", path: "/customers/add" },
      { icon: <ChevronRight />, text: "Partner", path: "/customers/roles" },
    ],
  },

  {
    icon: <Files />, // Represents content management
    text: "CMS",
    path: "/cms",
    submenu: [
      { icon: <ChevronRight />, text: "Offer", path: "/cms/offer" },
      { icon: <ChevronRight />, text: "Front Page", path: "/cms/front-page" },
      { icon: <ChevronRight />, text: "Loans", path: "/cms/loans" },
    ],
  },

  {
    icon: <BarChart />,
    text: "Analytics",
    path: "/crm",
    submenu: [
      { icon: <ChevronRight />, text: "Sales Report", path: "/crm/sales" },
      {
        icon: <ChevronRight />,
        text: "Customer Insights",
        path: "/crm/customers",
      },
      { icon: <ChevronRight />, text: "Revenue Trends", path: "/crm/revenue" },
    ],
  },

  { icon: <FileText />, text: "Reports", path: "/reports" },

  {
    icon: <MessageCircle />,
    text: "Blog",
    path: "/blog",
    submenu: [
      { icon: <ChevronRight />, text: "All Posts", path: "/blog/posts" },
      { icon: <ChevronRight />, text: "Create Post", path: "/blog/create" },
      { icon: <ChevronRight />, text: "Categories", path: "/blog/categories" },
    ],
  },

  { icon: <Settings />, text: "Settings", path: "/settings" },
];

const stats = [
    {
      title: "Total Customers",
      value: "45,235",
      change: "12.5% this week",
      isPositive: true,
      Icon: Users,
      color: "primary",
    },
    {
      title: "Total Orders",
      value: "1,584",
      change: "8.2% this week",
      isPositive: true,
      Icon: ShoppingCart,
      color: "secondary",
    },
    {
      title: "Total Revenue",
      value: "$287,432",
      change: "5.7% this week",
      isPositive: true,
      Icon: DollarSign,
      color: "success",
    },
    {
      title: "Growth Rate",
      value: "27.5%",
      change: "3.2% this week",
      isPositive: false,
      Icon: TrendingUp,
      color: "warning",
    },
  ];


export {
    menuItems,
    stats
} 
