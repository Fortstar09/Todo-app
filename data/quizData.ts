import { QuestionType } from "@/interfaces/interfaces";

export const quizData: QuestionType[] = [
  {
    id: 1,
    question:
      "In JavaScript, which of the following methods can be used to deeply clone an object?",
    options: [
      "Object.assign({}, obj)",
      "JSON.parse(JSON.stringify(obj))",
      "obj.clone()",
      "Object.create(obj)",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Which of the following data structures is most efficient for implementing an LRU cache?",
    options: ["Queue", "HashMap + Doubly Linked List", "Stack", "Binary Search Tree"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "In React, what is the purpose of using useMemo?",
    options: [
      "To create side effects in a component",
      "To memoize expensive calculations and avoid unnecessary re-renders",
      "To store global state",
      "To optimize API calls",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question:
      "Which HTTP status code indicates that a resource has been permanently moved to a new URL?",
    options: ["301", "302", "307", "410"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question:
      "Which of the following algorithms is NOT a supervised learning algorithm?",
    options: ["Linear Regression", "Decision Tree", "K-Means Clustering", "Support Vector Machine"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question:
      "In computer networks, which layer of the OSI model handles end-to-end communication and reliability?",
    options: ["Network Layer", "Transport Layer", "Session Layer", "Data Link Layer"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Which of the following is true about Docker containers?",
    options: [
      "They include a full operating system for each container",
      "They share the host OS kernel but are isolated from each other",
      "They require hypervisors to run",
      "They cannot be used in production environments",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "In cryptography, what does the term 'salt' refer to?",
    options: [
      "A secret encryption key",
      "Random data added to passwords before hashing",
      "An algorithm used to decrypt data",
      "A symmetric cipher method",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question:
      "What is the primary advantage of a NoSQL database over a traditional SQL database?",
    options: [
      "Stronger ACID compliance",
      "Fixed schema enforcement",
      "Better handling of unstructured or rapidly changing data",
      "Guaranteed transaction integrity",
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Which one of these time complexities represents the most efficient algorithm?",
    options: ["O(n log n)", "O(1)", "O(n^2)", "O(log n)"],
    correctAnswer: 1,
  },
  {
    id: 11,
    question:
      "In machine learning, which evaluation metric is best suited for an imbalanced classification problem?",
    options: ["Accuracy", "Precision", "Recall", "F1 Score"],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: "What does the CAP theorem state in distributed systems?",
    options: [
      "A system can guarantee all three properties simultaneously",
      "A system can guarantee only two of Consistency, Availability, and Partition tolerance at the same time",
      "A system must prioritize Consistency over Availability",
      "A system can achieve all three in small networks only",
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question:
      "Which of the following Git commands is used to combine changes from multiple branches?",
    options: ["git fetch", "git rebase", "git merge", "git stash"],
    correctAnswer: 2,
  },
  {
    id: 14,
    question:
      "Which programming paradigm focuses on data and transformations rather than state and mutable data?",
    options: [
      "Object-Oriented Programming",
      "Procedural Programming",
      "Functional Programming",
      "Declarative Programming",
    ],
    correctAnswer: 2,
  },
  {
    id: 15,
    question:
      "Which of these cloud computing models provides virtualized computing resources over the internet?",
    options: ["SaaS", "IaaS", "PaaS", "FaaS"],
    correctAnswer: 1,
  },
  {
    id: 16,
    question: "In a relational database, what is the purpose of an index?",
    options: [
      "To store duplicate records",
      "To speed up data retrieval operations",
      "To enforce referential integrity",
      "To encrypt sensitive data",
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "In TypeScript, what does the 'unknown' type represent?",
    options: [
      "A variable with any type that bypasses type checking",
      "A safer alternative to 'any' that requires type narrowing before use",
      "A deprecated alias for 'any'",
      "A type reserved for uninitialized variables",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "Which protocol is primarily used for secure file transfer over SSH?",
    options: ["FTP", "SFTP", "TFTP", "HTTP"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "What is the main purpose of a reverse proxy server?",
    options: [
      "To prevent outbound traffic",
      "To cache requests and route traffic to backend servers",
      "To manage local DNS entries",
      "To provide direct client-to-server communication",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question:
      "In AI, which technique allows a neural network to adjust its weights based on the error rate obtained in the previous iteration?",
    options: [
      "Gradient Descent",
      "Backpropagation",
      "Dropout Regularization",
      "Batch Normalization",
    ],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "What does the 'virtual DOM' in React help with?",
    options: [
      "Directly manipulating the browser DOM",
      "Improving performance by minimizing actual DOM updates",
      "Storing state across components",
      "Creating 3D animations in React",
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: "In Kubernetes, what is the function of a Pod?",
    options: [
      "A logical host for one or more containers",
      "A load balancer for clusters",
      "A node manager",
      "A network proxy for services",
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    correctAnswer: 1,
  },
  {
    id: 24,
    question:
      "In CSS, what does the property 'z-index' control?",
    options: [
      "Element transparency",
      "Stacking order of elements on the z-axis",
      "Zoom level of elements",
      "Font scaling factor",
    ],
    correctAnswer: 1,
  },
  {
    id: 25,
    question: "Which database system uses BSON as its storage format?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    correctAnswer: 2,
  },
  {
    id: 26,
    question:
      "Which command is used in Linux to find the process using a specific port?",
    options: ["ls", "grep", "netstat -tuln", "lsof -i :port"],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: "In Python, what does the 'with' statement ensure?",
    options: [
      "Manual file closing",
      "Automatic resource management and cleanup",
      "Thread synchronization",
      "Loop termination",
    ],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: "Which AWS service is primarily used for serverless computing?",
    options: ["EC2", "Lambda", "S3", "CloudWatch"],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "What does REST stand for in web services?",
    options: [
      "Representational State Transfer",
      "Remote Execution Service Technology",
      "Reliable Endpoint Session Transfer",
      "Request Event Stream Transport",
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: "Which sorting algorithm has the best average-case performance?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: 2,
  },
  {
    id: 31,
    question: "In React Native, what is the role of the Metro bundler?",
    options: [
      "Compiles native code",
      "Bundles JavaScript and assets for mobile runtime",
      "Handles navigation between screens",
      "Manages app permissions",
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question: "Which of the following is a NoSQL database?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
    correctAnswer: 2,
  },
  {
    id: 33,
    question:
      "Which type of cyberattack involves overwhelming a server with excessive traffic?",
    options: ["Phishing", "SQL Injection", "DDoS", "Man-in-the-Middle"],
    correctAnswer: 2,
  },
  {
    id: 34,
    question: "In GraphQL, what keyword is used to modify data on the server?",
    options: ["Query", "Fetch", "Mutation", "Resolve"],
    correctAnswer: 2,
  },
  {
    id: 35,
    question:
      "Which file is used to define environment variables in a Node.js project?",
    options: [".nodeenv", ".env", "package.json", "config.js"],
    correctAnswer: 1,
  },
  {
    id: 36,
    question:
      "Which command initializes a new Git repository in the current directory?",
    options: ["git start", "git init", "git new", "git create"],
    correctAnswer: 1,
  },
  {
    id: 37,
    question:
      "In REST APIs, which HTTP status code represents 'Unauthorized'?",
    options: ["400", "401", "403", "404"],
    correctAnswer: 1,
  },
  {
    id: 38,
    question: "Which of these is a strongly typed superset of JavaScript?",
    options: ["Python", "TypeScript", "ClojureScript", "CoffeeScript"],
    correctAnswer: 1,
  },
  {
    id: 39,
    question:
      "Which CSS layout system allows two-dimensional layouts (rows and columns)?",
    options: ["Flexbox", "Grid", "Float", "Positioning"],
    correctAnswer: 1,
  },
  {
    id: 40,
    question: "What does CI/CD stand for in DevOps?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Cloud Infrastructure / Container Deployment",
      "Continuous Installation / Configuration Delivery",
      "Code Integration / Centralized Debugging",
    ],
    correctAnswer: 0,
  },
];
