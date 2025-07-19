export const defaultCategories = [
  {
    id: 0,
    name: '所有类别'
  },
  {
    id: 1,
    name: '创意/设计'
  },
  {
    id: 2,
    name: '编程开发'
  },
  {
    id: 3,
    name: '市场营销'
  },
  {
    id: 4,
    name: '数据分析'
  },
  {
    id: 5,
    name: '市场调研'
  }
]

export const defaultAgents: [
  FreeAgent,
  PayPerNumberAgent,
  HumanBasedHiringModelAgent
] = [
  {
    id: 1,
    agentName: '免费测试Agent',
    agentType: 'BROWSER_USE',
    agentPayType: 'FREE',
    agentAddress: 'http://free-agent.com',
    description: '这是一个免费的测试Agent',
    authorBio: '免费Agent作者',
    agentCategory: 1,
    agentClassification: '免费工具',
    tags: ['free', 'test'],
    reputation: 4.0,
    successRate: 0.85,
    contractType: 'ALGORITHM',
    walletAddress: '0xfree123456789',
    isPrivate: false,
    autoAcceptJobs: true,
    isActive: true,
    totalJobsCompleted: 0
  },
  {
    id: 2,
    agentName: '代理2',
    description: '代理2描述',
    tags: ['标签1', '标签2'],
    reputation: 4.5,
    agentPayType: 'PAY_PER_TASK',
    contractType: 'result',
    agentType: 'browser-use',
    agentAddress: 'https://www.baidu.com',
    authorBio: '作者简介',
    agentCategory: 1,
    isPrivate: false,
    autoAcceptJobs: true,
    isActive: true,
    successRate: 0.9,
    totalJobsCompleted: 100,
    agentClassification: '分类1',
    walletAddress: '0x1234567890',
    pricePerNumber: 100,
    minPrice: 100,
    maxPrice: 1000
  },
  {
    id: 3,
    agentName: '代理3',
    description: '代理3描述',
    tags: ['标签1', '标签2'],
    reputation: 4.5,
    agentPayType: 'HUMAN_BASED_HIRING',
    contractType: 'result',
    agentType: 'browser-use',
    agentAddress: 'https://www.baidu.com',
    authorBio: '作者简介',
    agentCategory: 1,
    isPrivate: false,
    autoAcceptJobs: true,
    isActive: true,
    successRate: 0.9,
    totalJobsCompleted: 100,
    agentClassification: '分类1',
    pricePerNumber: 0,
    walletAddress: '0x1234567890',
    monthlySalary: 100,
    bonus: 100,
    expectedDuration: 100
  }
]

export const defaultJobs: [FreeJob, PayPerTaskJob] = [
  {
    id: 1,
    jobTitle: '免费测试任务',
    category: '测试分类',
    description: '这是一个免费的测试任务，需要提供押金',
    paymentType: 'FREE_JOBS',
    deadline: '2024-12-31T23:59:59.000Z',
    priority: 'MEDIUM',
    deliverables: '完成测试报告',
    skillLevel: 'BEGINNER',
    walletAddress: '0xfree-job123',
    budget: 50, // 押金
    status: 'OPEN',
    isPublic: true,
    autoAssign: true,
    allowBidding: false,
    escrowEnabled: false
  },
  {
    id: 2,
    jobTitle: '按次付费任务',
    category: '软件开发',
    description: '这是一个按次付费的开发任务',
    paymentType: 'PAY_PER_TASK',
    deadline: '2024-12-31T23:59:59.000Z',
    priority: 'HIGH',
    deliverables: '完整的软件解决方案',
    skillLevel: 'ADVANCED',
    walletAddress: '0xpaid-job456',
    budget: 500, // 最低预算
    status: 'OPEN',
    maxBudget: 1500, // 最高预算
    isPublic: true,
    autoAssign: false,
    allowBidding: true,
    escrowEnabled: true
  }
]

export const defaultAgentClassification = [
  {
    id: 1,
    name: '分类1'
  },
  {
    id: 2,
    name: '分类2'
  }
]

export const paymentTypes = ['FREE_JOBS', 'PAY_PER_TASK']

export const jobPriorities = [
  {
    label: '低优先级',
    value: 'LOW'
  },
  {
    label: '中优先级',
    value: 'MEDIUM'
  },
  {
    label: '高优先级',
    value: 'HIGH'
  },

  {
    label: '紧急',
    value: 'URGENT'
  }
]

export const skillLevels = [
  {
    label: '初级',
    value: 'BEGINNER'
  },
  {
    label: '中级',
    value: 'INTERMEDIATE'
  },
  {
    label: '高级',
    value: 'ADVANCED'
  },
  {
    label: '专家',
    value: 'EXPERT'
  }
]

export const AladdinContractAddress =
  '0x578FA8916A5815E1149F0d33de7A6e785644a898'
