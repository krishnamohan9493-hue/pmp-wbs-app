const DATA = {
  overview: {
    objective: "Plan, design, document, procure, and support the construction and installation of a pharmaceutical facility that is: compliant with applicable cGMP, EHS, fire and building regulations; fit for intended manufacturing processes and production capacity; designed for effective contamination, cross-contamination, and operator-risk control; suitable for construction, commissioning, qualification, validation, and reliable operation; delivered within approved cost, schedule, quality, and safety requirements.",
    priorities: [
      "Patient and product safety",
      "cGMP and regulatory compliance",
      "Contamination and cross-contamination control performance",
      "Constructability and maintainability",
      "Safe execution and environmental compliance",
      "Procurement of compliant equipment and systems",
      "Schedule and cost control",
      "Quality of documentation and change control",
      "Readiness for commissioning, qualification, and validation"
    ],
    planningBasisAssumptions: [
      "Client will provide product, process, capacity, and operational requirements",
      "Site is legally available and suitable for development",
      "Applicable regulatory requirements and authority expectations will be identified before design freeze",
      "Project will use a controlled document management system",
      "Design deliverables will be produced using coordinated 3D BIM/Revit models",
      "Construction contractors and equipment vendors will be selected through competitive tendering unless otherwise directed",
      "Commissioning, qualification, and validation activities will either be included in the project scope or transferred to a separately defined package",
      "Long-lead equipment and critical clean utilities will be managed through an early procurement strategy"
    ]
  },
  governance: {
    orgChart: {
      client: ["Project Sponsor", "Steering Committee", "User Department Representatives", "Quality Assurance", "Engineering and Maintenance", "EHS", "Finance and Procurement", "Operations and Supply Chain"],
      projectManagementTeam: ["Project Director / Project Manager", "Engineering Manager", "Design Leads by discipline", "Planning and Cost Control Manager", "Procurement Manager", "Construction Manager", "QA/QC Manager", "Commissioning and Qualification Lead", "Document Control Manager", "EHS Manager", "BIM Manager"],
      externalParties: ["Specialist consultants", "Equipment manufacturers", "Main contractors", "Subcontractors", "Testing laboratories", "Regulatory and statutory authorities", "Independent inspection or certification bodies"]
    },
    governanceForums: [
      { forum: "Steering Committee", frequency: "Monthly or at stage gates", purpose: "Strategic decisions, budget, risk escalation" },
      { forum: "Project Core Team Meeting", frequency: "Weekly", purpose: "Progress, issues, actions, interfaces" },
      { forum: "Design Coordination Meeting", frequency: "Weekly during design", purpose: "Interdisciplinary coordination and design closure" },
      { forum: "Procurement Review Meeting", frequency: "Weekly during procurement", purpose: "Enquiries, bids, evaluations, vendor progress" },
      { forum: "Construction Coordination Meeting", frequency: "Weekly", purpose: "Site progress, RFIs, interfaces, safety" },
      { forum: "Contractor Daily Coordination", frequency: "Daily", purpose: "Work fronts, permits, manpower, constraints" },
      { forum: "QA/QC Review", frequency: "Weekly", purpose: "ITPs, inspections, NCRs, material approvals" },
      { forum: "SHE Walkdown", frequency: "Daily/weekly", purpose: "Safety compliance and corrective actions" },
      { forum: "Management Information System Review", frequency: "Monthly", purpose: "Schedule, cost, risk, procurement, quality, SHE" }
    ]
  },
  controls: {
    baselineControls: ["Scope", "Schedule", "Cost", "Quality", "Procurement", "Design deliverables", "Construction progress", "Commissioning and qualification readiness"],
    coreRegisters: ["Risk", "Issue", "Change", "Document", "RFI", "NCR", "Observation", "Action", "Cost", "Schedule", "SHE", "Quality", "Procurement", "Commissioning", "Qualification", "Validation", "Training", "Commissioning readiness", "Handover", "Closeout"]
  },
  schedule: {
    phases: [
      { name: "Project Management & Planning", code: "PMP", duration: "4 weeks", start: "01-01", end: "01-28" },
      { name: "Concept & Feasibility", code: "C&F", duration: "6 weeks", start: "01-29", end: "03-10" },
      { name: "Detailed Engineering", code: "DET", duration: "16 weeks", start: "03-11", end: "06-24" },
      { name: "Procurement", code: "PROC", duration: "12 weeks", start: "04-01", end: "06-24" },
      { name: "Construction", code: "CONST", duration: "30 weeks", start: "05-01", end: "11-24" },
      { name: "Commissioning & Qualification", code: "CQ", duration: "10 weeks", start: "11-25", end: "02-12" },
      { name: "Validation & Handover", code: "VH", duration: "8 weeks", start: "02-13", end: "04-15" }
    ]
  },
  rac: [
    { id: "RAC-01", deliverable: "Project Execution Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-02", deliverable: "Project Schedule", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-03", deliverable: "Budget & Cost Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-04", deliverable: "Risk Management Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-05", deliverable: "Quality Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-06", deliverable: "SHE Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-07", deliverable: "Project Organization", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-08", deliverable: "Project Communication Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-09", deliverable: "Procurement Strategy", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-10", deliverable: "Site Master Plan", R: "PM", A: "SP", C: "EN", I: "QA" },
    { id: "RAC-11", deliverable: "Design Execution Plan", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-12", deliverable: "Process Design Package", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-13", deliverable: "Utility Design Package", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-14", deliverable: "Civil & Structural Design", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-15", deliverable: "MEP Design Package", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-16", deliverable: "Architectural Design", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-17", deliverable: "Instrumentation & Control Design", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-18", deliverable: "P&ID Package", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-19", deliverable: "Equipment Specification", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-20", deliverable: "Vendor Documentation", R: "EN", A: "SP", C: "PM", I: "QA" },
    { id: "RAC-21", deliverable: "Construction Execution Plan", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-22", deliverable: "Site Safety Plan", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-23", deliverable: "Hazard Analysis Plan", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-24", deliverable: "RFI Log", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-25", deliverable: "As-Built Documentation", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-26", deliverable: "Inspection & Test Plan", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-27", deliverable: "NCR Log", R: "CM", A: "PM", C: "EN", I: "QA" },
    { id: "RAC-28", deliverable: "Commissioning Plan", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-29", deliverable: "Qualification Protocol", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-30", deliverable: "Validation Master Plan", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-31", deliverable: "Process Validation Protocol", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-32", deliverable: "Cleaning Validation Protocol", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-33", deliverable: "Equipment Qualification Protocol", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-34", deliverable: "Utility Qualification Protocol", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-35", deliverable: "Computer System Validation Plan", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-36", deliverable: "Training Plan", R: "OP", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-37", deliverable: "Handover Package", R: "CM", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-38", deliverable: "O&M Manuals", R: "CM", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-39", deliverable: "Commissioning Report", R: "CQ", A: "PM", C: "QA", I: "EN" },
    { id: "RAC-40", deliverable: "Validation Summary Report", R: "CQ", A: "PM", C: "QA", I: "EN" }
  ]
};