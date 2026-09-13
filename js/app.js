(() => {
  const container = document.getElementById('viewContainer');
  const viewSelector = document.getElementById('viewSelector');
  let currentView = 'dashboard';

  const phases = DATA.schedule.phases;

  function showView(name) {
    currentView = name;
    container.innerHTML = '';
    switch (name) {
      case 'dashboard': renderDashboard(); break;
      case 'wbs': renderWBS(); break;
      case 'schedule': renderSchedule(); break;
      case 'raci': renderRACI(); break;
      case 'risk': renderRisk(); break;
      case 'cost': renderCost(); break;
      case 'she': renderSHE(); break;
      case 'compliance': renderCompliance(); break;
    }
  }

  viewSelector.addEventListener('change', () => showView(viewSelector.value));

  function renderDashboard() {
    container.innerHTML = `
      <div class="view">
        <h2>Project Dashboard</h2>
        <div class="metrics">
          <div class="metric-card"><div class="label">Phases</div><div class="value">${phases.length}</div><div class="sub">Total project phases</div></div>
          <div class="metric-card"><div class="label">RACI Entries</div><div class="value">${DATA.rac.length}</div><div class="sub">Deliverable responsibilities</div></div>
          <div class="metric-card"><div class="label">Controls</div><div class="value">${DATA.controls.baselineControls.length}</div><div class="sub">Baseline controls</div></div>
          <div class="metric-card"><div class="label">Registers</div><div class="value">${DATA.controls.coreRegisters.length}</div><div class="sub">Core registers</div></div>
          <div class="metric-card"><div class="label">Objectives</div><div class="value">9</div><div class="sub">Key priorities</div></div>
          <div class="metric-card"><div class="label">Assumptions</div><div class="value">8</div><div class="sub">Planning basis</div></div>
        </div>
        <h3 class="section-title">Project Objective</h3>
        <p>${DATA.overview.objective}</p>
        <h3 class="section-title">Key Priorities</h3>
        <ul>${DATA.overview.priorities.map(p => `<li>${p}</li>`).join('')}</ul>
        <h3 class="section-title">Planning Basis Assumptions</h3>
        <ul>${DATA.overview.planningBasisAssumptions.map(a => `<li>${a}</li>`).join('')}</ul>
        <h3 class="section-title">Governance Forums</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Forum</th><th>Frequency</th><th>Purpose</th></tr></thead>
            <tbody>${DATA.governance.governanceForums.map(f => `<tr><td>${f.forum}</td><td>${f.frequency}</td><td>${f.purpose}</td></tr>`).join('')}</tbody>
          </table>
        </div>
        <h3 class="section-title">Core Registers</h3>
        <p>${DATA.controls.coreRegisters.join(', ')}</p>
        <h3 class="section-title">Baseline Controls</h3>
        <ul>${DATA.controls.baselineControls.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>`;
  }

  function renderWBS() {
    const wbs = [
      { id: 'WBS-01', name: 'Project Management & Planning', children: [
        { id: 'WBS-01.1', name: 'Project Planning' },
        { id: 'WBS-01.2', name: 'Document Control' },
        { id: 'WBS-01.3', name: 'Stakeholder Management' }
      ]},
      { id: 'WBS-02', name: 'Concept & Feasibility', children: [
        { id: 'WBS-02.1', name: 'Site Assessment' },
        { id: 'WBS-02.2', name: 'Regulatory Feasibility' },
        { id: 'WBS-02.3', name: 'Concept Design' }
      ]},
      { id: 'WBS-03', name: 'Detailed Engineering', children: [
        { id: 'WBS-03.1', name: 'Process Engineering' },
        { id: 'WBS-03.2', name: 'Civil & Structural' },
        { id: 'WBS-03.3', name: 'Mechanical & Electrical' },
        { id: 'WBS-03.4', name: 'Instrumentation & Control' },
        { id: 'WBS-03.5', name: 'Architecture' }
      ]},
      { id: 'WBS-04', name: 'Procurement', children: [
        { id: 'WBS-04.1', name: 'Vendor Selection' },
        { id: 'WBS-04.2', name: 'Equipment Procurement' },
        { id: 'WBS-04.3', name: 'Long-Lead Items' }
      ]},
      { id: 'WBS-05', name: 'Construction', children: [
        { id: 'WBS-05.1', name: 'Site Works' },
        { id: 'WBS-05.2', name: 'Building Works' },
        { id: 'WBS-05.3', name: 'MEP Installation' },
        { id: 'WBS-05.4', name: 'Equipment Installation' }
      ]},
      { id: 'WBS-06', name: 'Commissioning & Qualification', children: [
        { id: 'WBS-06.1', name: 'Pre-Commissioning' },
        { id: 'WBS-06.2', name: 'Commissioning' },
        { id: 'WBS-06.3', name: 'Qualification' }
      ]},
      { id: 'WBS-07', name: 'Validation & Handover', children: [
        { id: 'WBS-07.1', name: 'Process Validation' },
        { id: 'WBS-07.2', name: 'Cleanability Validation' },
        { id: 'WBS-07.3', name: 'Final Handover' }
      ]}
    ];

    function renderNode(nodes, depth = 0) {
      return nodes.map(n => {
        const hasChildren = n.children && n.children.length;
        return `<div class="wbs-node ${depth > 0 ? 'child' : ''}" data-id="${n.id}" data-depth="${depth}">
          <strong>${n.id}:</strong> ${n.name}${hasChildren ? ' ▸' : ''}
        </div>${hasChildren ? renderNode(n.children, depth + 1) : ''}`;
      }).join('');
    }

    container.innerHTML = `<div class="view"><h2>WBS Explorer</h2><div class="wbs-tree">${renderNode(wbs)}</div></div>`;
    container.querySelectorAll('.wbs-node').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('expanded'));
    });
  }

  function renderSchedule() {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let html = '<div class="view"><h2>Project Schedule</h2><div class="gantt">';
    html += '<div class="gantt-row header"><div class="gantt-label">Phase</div>';
    months.forEach(m => html += `<div>${m}</div>`);
    html += '</div>';

    const phaseColors = ['#4a7fc1','#2e8b57','#d35400','#8e44ad','#c0392b','#2980b9','#27ae60'];

    phases.forEach((p, i) => {
      html += '<div class="gantt-row"><div class="gantt-label">' + p.name + '</div>';
      for (let m = 0; m < 12; m++) {
        const active = (i + m) % 12 < (i % 12 + 3);
        html += `<div class="gantt-cell ${active ? 'active' : ''}"></div>`;
      }
      html += '</div>';
    });
    html += '</div></div>';
    container.innerHTML = html;
  }

  function renderRACI() {
    container.innerHTML = `
      <div class="view">
        <h2>RACI Matrix</h2>
        <p style="margin-bottom:1rem;font-size:0.9rem;color:#666;">Hover over a row to highlight R/A/C/I columns. Click a row to expand details.</p>
        <div class="table-wrap">
          <table class="raci-table">
            <thead><tr><th>Deliverable</th><th>R</th><th>A</th><th>C</th><th>I</th></tr></thead>
            <tbody>${DATA.rac.map(r => `
              <tr data-id="${r.id}"
                  onmouseenter="this.querySelectorAll('td:scope .role').forEach(c=>c.style.outline='2px solid #1f3a5f')"
                  onmouseleave="this.querySelectorAll('td:scope .role').forEach(c=>c.style.outline='none')">
                <td>${r.id}: ${r.deliverable}</td>
                <td><span class="role R">${r.R}</span></td>
                <td><span class="role A">${r.A}</span></td>
                <td><span class="role C">${r.C}</span></td>
                <td><span class="role I">${r.I}</span></td>
              </tr>
            `).join('')}</tbody>
          </table>
        </div>
        <div class="note"><strong>Legend:</strong> R = Responsible, A = Accountable, C = Consulted, I = Informed</div>
      </div>`;
  }

  function renderRisk() {
    const risks = [
      { id: 'R-01', desc: 'Delay in long-lead equipment delivery', cat: 'Schedule', prob: 'High', impact: 'High', mit: 'Early procurement strategy' },
      { id: 'R-02', desc: 'Regulatory authority review timeline', cat: 'Compliance', prob: 'Medium', impact: 'High', mit: 'Pre-submission meetings' },
      { id: 'R-03', desc: 'Design code non-compliance discovered late', cat: 'Quality', prob: 'Medium', impact: 'High', mit: 'Design review gates' },
      { id: 'R-04', desc: 'Construction contractor underperformance', cat: 'Construction', prob: 'Medium', impact: 'Medium', mit: 'KPI monitoring' },
      { id: 'R-05', desc: 'Budget overrun due to scope changes', cat: 'Cost', prob: 'High', impact: 'High', mit: 'Change control process' },
      { id: 'R-06', desc: 'Safety incident during construction', cat: 'SHE', prob: 'Low', impact: 'High', mit: 'SHE plan and walkdowns' },
      { id: 'R-07', desc: 'Environmental permit delays', cat: 'Compliance', prob: 'Medium', impact: 'Medium', mit: 'Early authority engagement' },
      { id: 'R-08', desc: 'Incomplete vendor documentation', cat: 'Quality', prob: 'High', impact: 'Medium', mit: 'Vendor documentation plan' },
      { id: 'R-09', desc: 'Competitive tender awards below estimate', cat: 'Cost', prob: 'Low', impact: 'Medium', mit: 'Budget contingency' },
      { id: 'R-10', desc: 'Resource availability constraints', cat: 'Schedule', prob: 'Medium', impact: 'Medium', mit: 'Resource leveling' }
    ];

    container.innerHTML = `
      <div class="view">
        <h2>Risk Register</h2>
        <div class="filter"><input type="text" id="riskFilter" placeholder="Filter risks..."></div>
        <div class="table-wrap">
          <table class="risk-table">
            <thead><tr><th>ID</th><th>Description</th><th>Category</th><th>Probability</th><th>Impact</th><th>Mitigation</th></tr></thead>
            <tbody id="riskBody">${risks.map(r => `
              <tr>
                <td>${r.id}</td>
                <td>${r.desc}</td>
                <td>${r.cat}</td>
                <td><span class="badge ${r.prob.toLowerCase()}">${r.prob}</span></td>
                <td><span class="badge ${r.impact.toLowerCase()}">${r.impact}</span></td>
                <td>${r.mit}</td>
              </tr>
            `).join('')}</tbody>
          </table>
        </div>
      </div>`;
    document.getElementById('riskFilter').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#riskBody tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }

  function renderCost() {
    const items = [
      { label: 'Engineering & Design', amount: 4500000 },
      { label: 'Equipment & Instruments', amount: 8200000 },
      { label: 'Construction & Installation', amount: 6800000 },
      { label: 'Commissioning & Qualification', amount: 2100000 },
      { label: 'Validation & Documentation', amount: 1500000 },
      { label: 'Project Management', amount: 1200000 },
      { label: 'Contingency', amount: 1700000 }
    ];
    const total = items.reduce((s, i) => s + i.amount, 0);

    container.innerHTML = `
      <div class="view">
        <h2>Cost Breakdown Structure</h2>
        <div class="metrics">
          <div class="metric-card"><div class="label">Total Budget</div><div class="value">$${(total/1000000).toFixed(1)}M</div></div>
          <div class="metric-card"><div class="label">Items</div><div class="value">${items.length}</div></div>
        </div>
        ${items.map(i => `
          <div class="cost-bar">
            <div class="label">${i.label}</div>
            <div class="track"><div class="fill" style="width:${(i.amount/total*100).toFixed(1)}%"></div></div>
            <div class="amount">$${(i.amount/1000000).toFixed(1)}M</div>
          </div>
        `).join('')}
        <div class="formula">Total = ${items.map(i => `$${(i.amount/1000000).toFixed(1)}M`).join(' + ')} = $${(total/1000000).toFixed(1)}M</div>
      </div>`;
  }

  function renderSHE() {
    container.innerHTML = `
      <div class="view">
        <h2>SHE / Quality</h2>
        <h3 class="section-title">SHE Objectives</h3>
        <ul>
          <li>Zero harm policy for all project personnel and contractors</li>
          <li>Compliance with all applicable environmental regulations</li>
          <li>Waste minimization and proper disposal</li>
          <li>Energy efficiency in design and construction</li>
        </ul>
        <h3 class="section-title">Quality Objectives</h3>
        <ul>
          <li>Deliverables conform to client specifications and codes</li>
          <li>All design and construction work subject to QA/QC inspections</li>
          <li>Document control with revision tracking</li>
          <li>NCR management and root cause analysis</li>
        </ul>
        <h3 class="section-title">Inspection & Test Plan Summary</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Activity</th><th>Responsible</th><th>Method</th></tr></thead>
            <tbody>
              <tr><td>Material Inspection</td><td>QA/QC</td><td>Visual + Test Certificate Review</td></tr>
              <tr><td>Welding Inspection</td><td>QA/QC</td><td>Visual + NDT</td></tr>
              <tr><td>Installation Inspection</td><td>QA/QC</td><td>Checklist + Measurement</td></tr>
              <tr><td>Commissioning Tests</td><td>C&Q</td><td>Functional Testing</td></tr>
              <tr><td>Documentation Review</td><td>Document Control</td><td>Completeness Check</td></tr>
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function renderCompliance() {
    const regs = [
      { id: 'C-01', name: 'cGMP Requirements', status: 'Compliant', body: 'FDA / EMA' },
      { id: 'C-02', name: 'Environmental Protection', status: 'Compliant', body: 'EPA / Local Authority' },
      { id: 'C-03', name: 'Fire Safety', status: 'Review Required', body: 'Fire Marshal' },
      { id: 'C-04', name: 'Building Codes', status: 'Compliant', body: 'Local Building Authority' },
      { id: 'C-05', name: 'Occupational Safety', status: 'Compliant', body: 'OSHA / Local' },
      { id: 'C-06', name: 'Radiation Safety', status: 'Not Applicable', body: 'NRC' },
      { id: 'C-07', name: 'Hazardous Materials', status: 'Compliant', body: 'EPA / Local' },
      { id: 'C-08', name: 'Water Discharge', status: 'Review Required', body: 'Water Authority' }
    ];

    container.innerHTML = `
      <div class="view">
        <h2>Compliance Register</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Regulation</th><th>Authority</th><th>Status</th></tr></thead>
            <tbody>${regs.map(r => `<tr>
              <td>${r.id}</td><td>${r.name}</td><td>${r.body}</td>
              <td><span class="badge ${r.status === 'Compliant' ? 'low' : r.status === 'Review Required' ? 'medium' : 'high'}">${r.status}</span></td>
            </tr>`).join('')}</tbody>
          </table>
        </div>
        <div class="note">All compliance requirements will be verified against the latest regulatory information at each design gate.</div>
      </div>`;
  }

  showView('dashboard');
})();