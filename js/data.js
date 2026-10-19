// Resume data - single source of truth for the dynamic sections.
window.RESUME_DATA = {
  skills: [
    { name: 'Java/J2EE', items: ['Java (8/11/17)', 'Spring Boot', 'Spring MVC', 'Hibernate/JPA', 'JAX-RS/REST', 'JMS', 'Servlets/JSP', 'EJB'] },
    { name: 'Frontend/Web', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'RxJS'] },
    { name: 'Tools/IDE/SCM', items: ['Kiro', 'IntelliJ IDEA', 'Eclipse', 'Visual Studio Code', 'Git', 'Maven', 'Gradle', 'Jenkins'] },
    { name: 'Methodologies', items: ['Agile/Scrum', 'Kanban', 'TDD', 'CI/CD', 'Waterfall'] },
    { name: 'Design Patterns', items: ['MVC', 'Singleton', 'Factory', 'Observer', 'Dependency Injection', 'Repository'] },
    { name: 'Databases', items: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'] },
    { name: 'App Servers', items: ['WebLogic', 'JBoss/WildFly', 'Apache Tomcat', 'WebSphere'] },
    { name: 'Cloud', items: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
    { name: 'Observability', items: ['Splunk', 'ELK Stack', 'Prometheus', 'Grafana', 'New Relic'] },
    { name: 'Testing', items: ['JUnit', 'Mockito', 'Jasmine', 'Karma', 'Selenium'] }
  ],
  experience: [
    { role: 'Application Architect', employer: 'HCL Global Systems', location: 'Troy, MI', dateRangeLabel: 'Jun 2019 - Present', technologies: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Oracle', 'Kubernetes'] },
    { role: 'J2EE Consultant', employer: 'California Casualty Management Company', client: 'California Casualty', location: 'San Mateo, CA', dateRangeLabel: 'Mar 2016 - May 2019', technologies: ['Java', 'Spring MVC', 'Hibernate', 'WebLogic', 'Oracle'] },
    { role: 'Senior Java Developer', employer: 'Quality Core Systems', location: 'Edison, NJ', dateRangeLabel: 'Jan 2013 - Feb 2016', technologies: ['Java', 'EJB', 'JBoss', 'PostgreSQL', 'JMS'] },
    { role: 'Java/J2EE Developer', employer: 'Quantum Infotech', location: 'Jersey City, NJ', dateRangeLabel: 'Jul 2010 - Dec 2012', technologies: ['Java', 'Servlets', 'JSP', 'Tomcat', 'MySQL'] },
    { role: 'Software Engineer', employer: 'Wells Fargo India Solutions', location: 'Hyderabad, India', dateRangeLabel: 'Apr 2008 - Jun 2010', technologies: ['Java', 'Spring', 'WebSphere', 'Oracle'] },
    { role: 'Associate Developer', employer: 'ADP', location: 'Hyderabad, India', dateRangeLabel: 'May 2006 - Mar 2008', technologies: ['Java', 'JSP', 'SQL Server'] },
    { role: 'Junior Developer', employer: 'Solix Technologies', location: 'Hyderabad, India', dateRangeLabel: 'Jun 2004 - Apr 2006', technologies: ['Java', 'JDBC', 'MySQL'] }
  ],
  projects: [
    { name: 'Enterprise Claims Processing Platform', employer: 'California Casualty', description: 'Architected and led implementation of a modular J2EE claims platform handling high-volume policy and claims workflows, reducing processing latency through server optimization and asynchronous messaging.' },
    { name: 'Customer Self-Service Portal', employer: 'HCL Global Systems', description: 'Designed an Angular and Spring Boot portal enabling customers to manage accounts, submit requests, and track status in real time, with fast first paint and strong SEO.' },
    { name: 'Observability and Alerting Framework', description: 'Built a reusable monitoring and alerting framework integrating Splunk and Prometheus/Grafana to surface service health and accelerate incident resolution across multiple application teams.' }
  ]
};