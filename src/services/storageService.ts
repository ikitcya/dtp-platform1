export const saveReport = (report: object) => {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));
  };
  
  export const getReports = () => {
    return JSON.parse(localStorage.getItem('reports') || '[]');
  };
  