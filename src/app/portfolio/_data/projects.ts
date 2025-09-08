export interface PortfolioProjectDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  tech: string[];
  category: string;
  duration: string;
  teamSize: string;
  year: string;
  client: string;
  features: string[];
  challenges: string[];
  results: string[];
  liveUrl: string;
  githubUrl: string;
}

export const portfolioProjects: PortfolioProjectDetail[] = [
  {
    id: "project-1",
    title: "Enterprise E-commerce Platform",
    shortDescription:
      "Scalable multi-vendor marketplace handling 100K+ daily transactions",
    fullDescription:
      "A comprehensive e-commerce platform built for enterprise-scale operations. This multi-vendor marketplace supports over 10,000 sellers and processes more than 100,000 daily transactions. The platform features advanced inventory management, real-time analytics, automated vendor payouts, and sophisticated fraud detection systems.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Docker"],
    category: "E-commerce",
    duration: "8 months",
    teamSize: "6 developers",
    year: "2023",
    client: "Global Retail Corp",
    features: [
      "Multi-vendor marketplace with 10,000+ sellers",
      "Real-time inventory management across warehouses",
      "Advanced analytics and reporting dashboard",
      "Automated payment processing and vendor payouts",
      "AI-powered fraud detection system",
      "Mobile-responsive design with PWA capabilities",
    ],
    challenges: [
      "Handling high-volume transactions with zero downtime",
      "Complex multi-tenant architecture for vendor isolation",
      "Real-time synchronization across multiple data centers",
      "Implementing sophisticated fraud detection algorithms",
    ],
    results: [
      "300% increase in transaction volume",
      "40% reduction in operational costs",
      "99.9% uptime achieved",
      "50% faster page load times",
    ],
    liveUrl: "https://demo-ecommerce.trxdevelopers.com",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "AI-Powered Analytics Dashboard",
    shortDescription:
      "Real-time business intelligence platform with ML predictions",
    fullDescription:
      "An advanced analytics platform that leverages machine learning to provide predictive insights for business decision-making. The system processes millions of data points in real-time, offering interactive visualizations, automated reporting, and AI-driven recommendations for business optimization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "React",
      "Docker",
      "Apache Kafka",
      "MongoDB",
    ],
    category: "AI/ML",
    duration: "6 months",
    teamSize: "4 developers",
    year: "2023",
    client: "DataTech Solutions",
    features: [
      "Real-time data processing with Apache Kafka",
      "Machine learning models for predictive analytics",
      "Interactive dashboards with custom visualizations",
      "Automated report generation and scheduling",
      "Natural language query interface",
      "Multi-tenant architecture with role-based access",
    ],
    challenges: [
      "Processing and analyzing massive datasets in real-time",
      "Building accurate ML models with limited historical data",
      "Creating intuitive visualizations for complex data",
      "Ensuring data privacy and security compliance",
    ],
    results: [
      "85% accuracy in predictive models",
      "60% faster decision-making process",
      "200% increase in data utilization",
      "45% reduction in manual reporting time",
    ],
    liveUrl: "https://demo-analytics.trxdevelopers.com",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Mobile Banking Application",
    shortDescription: "Secure fintech solution with biometric authentication",
    fullDescription:
      "A comprehensive mobile banking application featuring advanced security measures, biometric authentication, and seamless user experience. The app supports all major banking operations including transfers, bill payments, investment tracking, and financial planning tools.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop",
    ],
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Kubernetes",
      "AWS",
      "Firebase",
    ],
    category: "Mobile/Fintech",
    duration: "10 months",
    teamSize: "8 developers",
    year: "2024",
    client: "SecureBank International",
    features: [
      "Biometric authentication (fingerprint, face ID)",
      "Real-time transaction monitoring and alerts",
      "Comprehensive account management",
      "Investment portfolio tracking",
      "Bill payment and money transfer capabilities",
      "Personal financial planning tools",
    ],
    challenges: [
      "Implementing bank-grade security measures",
      "Ensuring compliance with financial regulations",
      "Creating seamless UX while maintaining security",
      "Handling real-time transaction processing",
    ],
    results: [
      "2M+ active users within 6 months",
      "99.99% transaction success rate",
      "4.8/5 app store rating",
      "70% reduction in customer service calls",
    ],
    liveUrl: "https://demo-banking.trxdevelopers.com",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "Healthcare Management System",
    shortDescription:
      "Comprehensive patient management and telemedicine platform",
    fullDescription:
      "A complete healthcare management system that streamlines patient care, appointment scheduling, medical records management, and telemedicine consultations. The platform integrates with existing hospital systems and provides secure, HIPAA-compliant data handling.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=500&fit=crop",
    ],
    tech: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "Docker", "AWS"],
    category: "Healthcare",
    duration: "12 months",
    teamSize: "10 developers",
    year: "2024",
    client: "MedCare Systems",
    features: [
      "Patient portal with appointment scheduling",
      "Electronic health records (EHR) management",
      "Telemedicine video consultations",
      "Prescription management and e-prescribing",
      "Insurance verification and billing",
      "Medical imaging integration",
    ],
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Integrating with legacy hospital systems",
      "Building reliable video consultation platform",
      "Managing complex medical workflows",
    ],
    results: [
      "50% reduction in appointment scheduling time",
      "30% increase in patient satisfaction",
      "40% improvement in medical record accuracy",
      "25% reduction in administrative costs",
    ],
    liveUrl: "https://demo-healthcare.trxdevelopers.com",
    githubUrl: "#",
  },
  {
    id: "project-5",
    title: "Supply Chain Management Platform",
    shortDescription: "End-to-end logistics and inventory optimization system",
    fullDescription:
      "A comprehensive supply chain management platform that optimizes logistics operations, inventory management, and supplier relationships. The system uses AI algorithms to predict demand, optimize routes, and reduce operational costs across the entire supply chain.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=500&fit=crop",
    ],
    tech: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Apache Spark",
      "Kubernetes",
      "GCP",
    ],
    category: "Enterprise",
    duration: "14 months",
    teamSize: "12 developers",
    year: "2023",
    client: "LogiCorp Global",
    features: [
      "Real-time inventory tracking across warehouses",
      "AI-powered demand forecasting",
      "Route optimization for delivery vehicles",
      "Supplier performance monitoring",
      "Automated procurement workflows",
      "Advanced analytics and reporting",
    ],
    challenges: [
      "Integrating with multiple legacy systems",
      "Processing large volumes of real-time data",
      "Building accurate demand prediction models",
      "Ensuring system scalability across regions",
    ],
    results: [
      "35% reduction in inventory costs",
      "25% improvement in delivery times",
      "50% increase in supply chain visibility",
      "20% reduction in operational expenses",
    ],
    liveUrl: "https://demo-supply.trxdevelopers.com",
    githubUrl: "#",
  },
];
