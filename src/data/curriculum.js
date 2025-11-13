
export const tracks = [
  {
  id: 't_data',
  slug: 'data-analysis',
  title: 'Data Analysis',
  description: 'From spreadsheets to SQL and Python, analyze, visualize, and present insights with confidence.',
  level: 'Beginner → Intermediate',
  modules: [
    
    {
      id: 'm_data_found',
      title: 'Foundations of Data',
      position: 1,
      lessons: [
        { id: 'l_da_overview', title: 'What is Data Analytics?', position: 1, est_minutes: 20, type: 'video', youtube_url: 'https://www.youtube.com/embed/yZvFH7B6gKI',
          resources: [{ label: 'Analytics Lifecycle (IBM)', url: 'https://www.ibm.com/topics/data-analytics' }]
        },
        { id: 'l_da_types', title: 'Data Types, Formats & Quality', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://cloud.google.com/discover/data-formats', summary_md: 'Common data formats (CSV, JSON, Parquet), structured vs unstructured, data quality dimensions.' }
        },
        { id: 'p_da_setup', title: 'Project: Tools Setup & Sample CSV', position: 3, est_minutes: 45, type: 'project',
          project: {
            brief_md: 'Install a spreadsheet app (Excel/Sheets) and Python. Download a sample CSV (e.g., sales) and explore columns, types, and missing values.',
            deliverables: ['CSV placed in a repo/folder', 'Notes on columns, nulls, data types'],
            rubric: [
              { criterion: 'Environment set up (Sheets/Excel + Python)', points: 10 },
              { criterion: 'Initial data audit (types, nulls, ranges)', points: 10 },
              { criterion: 'Readable notes/README', points: 10 }
            ]
          }
        },
        { id: 'q_data_found', title: 'Quiz: Concepts & Lifecycle', position: 4, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which step usually comes first in analytics?', options: ['Modeling','Communication','Cleaning','Deployment'], answer: 2, why: 'You must clean/prepare before modeling.' },
              { q: 'CSV is best described as…', options: ['Binary columnar','Row-based text','Image format','Key-value store'], answer: 1, why: 'CSV is a row-based text format with delimiters.' }
            ]
          }
        }
      ]
    },


    {
      id: 'm_data_excel',
      title: 'Excel & Google Sheets',
      position: 2,
      lessons: [
        { id: 'l_excel_basics', title: 'Excel Basics for Analysts', position: 1, est_minutes: 75, type: 'video', youtube_url: 'https://www.youtube.com/embed/rwbho0CgEAE' }, 
        { id: 'l_excel_clean', title: 'Cleaning & Functions (VLOOKUP/XLOOKUP)', position: 2, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/9QfUppZ8C70' }, 
        { id: 'l_sheets_pivot', title: 'Pivot Tables (Sheets/Excel)', position: 3, est_minutes: 40, type: 'video', youtube_url: 'https://www.youtube.com/embed/4QkpQf7L7Cw' }, 
        { id: 'p_excel_report', title: 'Project: Sales Summary Dashboard', position: 4, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Create a pivot-driven dashboard (revenue by month/product/region) with slicers/filters and simple conditional formatting.',
            deliverables: ['Workbook (xlsx or Sheets link)', 'One-page summary'],
            rubric: [
              { criterion: 'Correct pivots & aggregations', points: 10 },
              { criterion: 'Usable filters/slicers', points: 10 },
              { criterion: 'Clear formatting & summary', points: 10 }
            ]
          }
        },
        { id: 'q_excel_quiz', title: 'Quiz: Formulas & Pivots', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which finds a value by row/column key?', options: ['SUMIFS','XLOOKUP','LEFT','COUNT'], answer: 1, why: 'XLOOKUP is the modern lookup function.' },
              { q: 'Pivot tables mainly help with…', options: ['Data entry','Visualization only','Summarizing large tables','Sorting alphabetically'], answer: 2, why: 'They aggregate/summarize large tables quickly.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_data_sql',
      title: 'SQL for Analysis',
      position: 3,
      lessons: [
        { id: 'l_sql_course', title: 'SQL Fundamentals (SELECT → JOIN → GROUP)', position: 1, est_minutes: 120, type: 'video', youtube_url: 'https://www.youtube.com/embed/HXV3zeQKqGY' }, 
        { id: 'l_sql_window', title: 'Window Functions & Analytics', position: 2, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/IfY3t6rC8XY' }, 
        { id: 'l_sql_reading', title: 'Reading: SQL Style & Best Practices', position: 3, est_minutes: 20, type: 'reading',
          reading: { url: 'https://www.sqlstyle.guide/', summary_md: 'Naming, formatting, and readability conventions for SQL queries.' }
        },
        { id: 'p_sql_case', title: 'Project: Product & Cohort Analysis', position: 4, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Given order tables, write queries to compute monthly active users (MAU), average order value (AOV), and first-purchase cohorts.',
            deliverables: ['.sql file or notebook', 'Query outputs (CSV)'],
            rubric: [
              { criterion: 'Correct joins & filters', points: 10 },
              { criterion: 'Accurate cohort/MAU/AOV logic', points: 10 },
              { criterion: 'Readable/consistent SQL style', points: 10 }
            ]
          }
        },
        { id: 'q_sql_quiz', title: 'Quiz: Joins & Aggregations', position: 5, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which join returns rows present in both tables?', options: ['LEFT','RIGHT','INNER','FULL'], answer: 2, why: 'INNER returns intersection of both tables.' },
              { q: 'Which clause groups rows before aggregate?', options: ['GROUP BY','ORDER BY','HAVING','OVER'], answer: 0, why: 'GROUP BY defines the grouping for aggregates.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_data_pandas',
      title: 'Python + Pandas',
      position: 4,
      lessons: [
        { id: 'l_py_install', title: 'Python Setup & Basics', position: 1, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
        { id: 'l_pandas_course', title: 'Pandas for Data Analysis', position: 2, est_minutes: 120, type: 'video', youtube_url: 'https://www.youtube.com/embed/vmEHCJofslg' }, 
        { id: 'l_pandas_clean', title: 'Cleaning: Nulls, Types, Duplicates', position: 3, est_minutes: 40, type: 'video', youtube_url: 'https://www.youtube.com/embed/DhYsZVqCOr0' }, 
        { id: 'p_pandas_pipeline', title: 'Project: Cleaning Pipeline (Notebook)', position: 4, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Write a notebook to load CSVs, standardize types, handle nulls/duplicates, compute KPIs, and export a clean dataset.',
            deliverables: ['.ipynb notebook', 'cleaned.csv', 'README with steps'],
            rubric: [
              { criterion: 'Robust ETL steps (load→clean→export)', points: 10 },
              { criterion: 'Reproducible notebook with Markdown notes', points: 10 },
              { criterion: 'Meaningful KPIs summary', points: 10 }
            ]
          }
        },
        { id: 'q_pandas_quiz', title: 'Quiz: DataFrames & Ops', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which reads a CSV into a DataFrame?', options: ['pd.read_csv','pd.load','pd.csv_to_df','df.from_csv'], answer: 0, why: 'pd.read_csv is the standard reader.' },
              { q: 'Drop duplicates uses…', options: ['df.clear()','df.unique()','df.drop_duplicates()','df.remove_dup()'], answer: 2, why: 'drop_duplicates removes duplicate rows.' }
            ]
          }
        }
      ]
    },
    {
      id: 'm_data_viz',
      title: 'Visualization & Storytelling',
      position: 5,
      lessons: [
        { id: 'l_viz_principles', title: 'Data Viz Principles', position: 1, est_minutes: 40, type: 'video', youtube_url: 'https://www.youtube.com/embed/2LhoCfjm8R4' }, // Viz basics
        { id: 'l_matplotlib_seaborn', title: 'Matplotlib & Seaborn (Python)', position: 2, est_minutes: 75, type: 'video', youtube_url: 'https://www.youtube.com/embed/6GUZXDef2U0' }, 
        { id: 'l_dashboards_tools', title: 'Dashboards: Google Data Studio/Looker Studio', position: 3, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/2LZ0N2F6wXc' }, 
        { id: 'p_story_board', title: 'Project: Insight Storyboard', position: 4, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Create 3–5 charts that explain a business question end-to-end. Finish with a one-page narrative of the insight and recommendation.',
            deliverables: ['Notebook or dashboard link', 'One-page narrative'],
            rubric: [
              { criterion: 'Appropriate chart choices & labeling', points: 10 },
              { criterion: 'Clear narrative from data→insight→action', points: 10 },
              { criterion: 'Reproducible outputs (code or share link)', points: 10 }
            ]
          }
        },
        { id: 'q_viz_quiz', title: 'Quiz: Chart Literacy', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Best chart for distribution of a single variable?', options: ['Line','Bar','Histogram','Pie'], answer: 2, why: 'Histogram shows distribution/bins.' },
              { q: 'Stacked bars are weakest when…', options: ['Few categories','Many segments','Zero baseline','Horizontal layout'], answer: 1, why: 'Too many segments makes comparisons hard.' }
            ]
          }
        }
      ]
    },
 
    {
      id: 'm_data_capstone',
      title: 'Capstone: End-to-End Analysis',
      position: 6,
      lessons: [
        { id: 'p_capstone_brief_da', title: 'Project Brief & Dataset Selection', position: 1, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Pick a public dataset (e.g., Kaggle/Google) and perform an end-to-end analysis: clean, analyze, visualize, and recommend actions.',
            deliverables: ['Repo with data & notebook(s)', 'Executive summary (1–2 pages)', 'Dashboard or chart pack'],
            rubric: [
              { criterion: 'Sound cleaning & data management', points: 15 },
              { criterion: 'Insightful KPIs & visualizations', points: 15 },
              { criterion: 'Clear recommendations tied to data', points: 15 }
            ]
          },
          resources: [
            { label: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets' },
            { label: 'Google Dataset Search', url: 'https://datasetsearch.research.google.com/' }
          ]
        },
        { id: 'l_da_comm', title: 'Presenting Findings to Stakeholders', position: 2, est_minutes: 30, type: 'video', youtube_url: 'https://www.youtube.com/embed/YsTzj2QH8Zk' }, 
        { id: 'q_da_grad', title: 'Graduation Checklist', position: 3, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Is your analysis reproducible (clear steps, code/notebook)?', options: ['Yes','No','Partially','Unsure'], answer: 0, why: 'Reproducibility is key for review and trust.' },
              { q: 'Does your summary tie insights to decisions?', options: ['Yes','No','Somewhat','Not applicable'], answer: 0, why: 'Stakeholders need actionable recommendations.' }
            ]
          }
        }
      ]
    }
  ]
},


  {
  id: 't_devops',
  slug: 'devops',
  title: 'DevOps',
  description: 'Mindset, Git, Linux, Docker, Kubernetes, CI/CD, IaC, and Observability, ship faster and safer.',
  level: 'Beginner → Intermediate',
  modules: [
    
    {
      id: 'm_devops_found',
      title: 'DevOps Foundations',
      position: 1,
      lessons: [
        { id: 'l_devops_intro', title: 'What is DevOps? (Mindset & Culture)', position: 1, est_minutes: 20, type: 'video', youtube_url: 'https://www.youtube.com/embed/0yWAtQ6wYNM' }, 
        { id: 'l_git_basics', title: 'Git & GitHub Basics', position: 2, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/RGOj5yH7evk' }, 
        { id: 'l_found_read', title: 'Reading: CALMS & DevOps Lifecycle', position: 3, est_minutes: 20, type: 'reading',
          reading: { url: 'https://itrevolution.com/articles/what-is-devops/', summary_md: 'Culture, Automation, Lean, Measurement, Sharing — the CALMS framework and continuous delivery loop.' }
        },
        { id: 'p_found_env', title: 'Project: Local Dev Environment', position: 4, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Install Git, VS Code, and a terminal shell. Create a repo with a clean README and commit workflow (feature branches + PRs).',
            deliverables: ['Repo link', 'README with dev setup'],
            rubric: [
              { criterion: 'Git installed, SSH set up', points: 10 },
              { criterion: 'Branching and PR workflow', points: 10 },
              { criterion: 'Readable README with steps', points: 10 }
            ]
          }
        },
        { id: 'q_devops_found', title: 'Quiz: DevOps Mindset', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which CALMS pillar focuses on metrics?', options: ['Culture','Automation','Measurement','Sharing'], answer: 2, why: 'Measurement emphasizes KPIs and feedback loops.' },
              { q: 'Main benefit of trunk-based development?', options: ['Long-lived branches','Fewer merges','Faster integration','No reviews'], answer: 2, why: 'Frequent integration reduces drift/merge pain.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_devops_linux',
      title: 'Linux & Shell Essentials',
      position: 2,
      lessons: [
        { id: 'l_linux_100s', title: 'Linux in 100 Seconds', position: 1, est_minutes: 3, type: 'video', youtube_url: 'https://www.youtube.com/embed/iv8rSLsi1xo' }, 
        { id: 'l_linux_cli', title: 'Command Line Basics (Hands-on)', position: 2, est_minutes: 90, type: 'reading',
          reading: { url: 'https://ubuntu.com/tutorials/command-line-for-beginners', summary_md: 'Navigation, files, permissions, pipes, grep, sed, systemctl. Practice each with real commands.' }
        },
        { id: 'p_linux_task', title: 'Project: Shell Scripting Task Runner', position: 3, est_minutes: 75, type: 'project',
          project: {
            brief_md: 'Write a Bash script to build, test, and package a sample app. Add logs, exit codes, and help flags.',
            deliverables: ['task.sh with usage docs', 'Demo GIF or log output'],
            rubric: [
              { criterion: 'Robust flags & error handling', points: 10 },
              { criterion: 'Readable logs and exit codes', points: 10 },
              { criterion: 'Idempotent, repeatable runs', points: 10 }
            ]
          }
        },
        { id: 'q_linux_quiz', title: 'Quiz: Shell & Permissions', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which command changes permissions?', options: ['chmod','chown','mv','ls -la'], answer: 0, why: 'chmod modifies file mode bits.' },
              { q: 'Which symbol pipes stdout to next command?', options: ['>','|','&','>>'], answer: 1, why: '`|` passes stdout to another command.' }
            ]
          }
        }
      ]
    },

   
    {
      id: 'm_devops_docker',
      title: 'Containers with Docker',
      position: 3,
      lessons: [
        { id: 'l_docker_crash', title: 'Docker Crash Course', position: 1, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/3c-iBn73dDE' }, 
        { id: 'l_compose', title: 'Docker Compose Crash Course', position: 2, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/pTFZFxd4hOI' }, 
        { id: 'p_dockerize', title: 'Project: Dockerize a Web API', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Containerize a sample Node/Express API + Postgres with Docker and Compose. Add a healthcheck and named volumes.',
            deliverables: ['Dockerfile', 'docker-compose.yml', 'Makefile or task.sh'],
            rubric: [
              { criterion: 'Lean Dockerfile & .dockerignore', points: 10 },
              { criterion: 'Compose with volumes & healthcheck', points: 10 },
              { criterion: 'Docs to run locally (one command)', points: 10 }
            ]
          }
        },
        { id: 'q_docker_quiz', title: 'Quiz: Docker & Compose', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which instruction sets base image?', options: ['RUN','FROM','ARG','ENV'], answer: 1, why: 'FROM defines the base image.' },
              { q: 'Compose file typically named…', options: ['docker.json','compose.yaml','docker-compose.yml','compose.lock'], answer: 2, why: 'docker-compose.yml is common default.' }
            ]
          }
        }
      ]
    },


    {
      id: 'm_devops_k8s',
      title: 'Kubernetes Fundamentals',
      position: 4,
      lessons: [
        { id: 'l_k8s_explained', title: 'Kubernetes Explained', position: 1, est_minutes: 15, type: 'video', youtube_url: 'https://www.youtube.com/embed/X48VuDVv0do' }, 
        { id: 'l_k8s_reading', title: 'Reading: Pods, Deployments, Services', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://kubernetes.io/docs/concepts/', summary_md: 'Core objects, control plane, scheduling, services & networking, config & storage.' }
        },
        { id: 'p_k8s_mini', title: 'Project: Mini K8s Deployment', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Create manifests for a stateless web app: Deployment, Service (ClusterIP), and Ingress (kind/minikube). Add rolling updates and readiness probes.',
            deliverables: ['manifests/*.yaml', 'kubectl apply logs', 'README with minikube/kind steps'],
            rubric: [
              { criterion: 'Clean manifests & probes', points: 10 },
              { criterion: 'Rolling updates verified', points: 10 },
              { criterion: 'Ingress working locally', points: 10 }
            ]
          }
        },
        { id: 'q_k8s_quiz', title: 'Quiz: K8s Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which object manages replicas?', options: ['Pod','Deployment','Service','ConfigMap'], answer: 1, why: 'Deployment manages ReplicaSets/Pods.' },
              { q: 'Which exposes pods internally?', options: ['NodePort','ClusterIP','Ingress','Volume'], answer: 1, why: 'ClusterIP exposes inside the cluster.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_devops_cicd',
      title: 'CI/CD Pipelines',
      position: 5,
      lessons: [
        { id: 'l_cicd_overview', title: 'CI/CD Overview in 100 Seconds', position: 1, est_minutes: 5, type: 'video', youtube_url: 'https://www.youtube.com/embed/scEDHsr3APg' }, 
        { id: 'l_actions_read', title: 'Reading: GitHub Actions (Workflows, Jobs, Steps)', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions', summary_md: 'Triggers, runners, jobs, steps, caching, artifacts, and secrets.' }
        },
        { id: 'p_pipeline', title: 'Project: Build → Test → Docker → Push', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Create a GitHub Actions workflow to run tests, build an image, push to a registry (GHCR/Docker Hub), and publish artifacts.',
            deliverables: ['.github/workflows/ci.yml', 'Badges in README', 'Registry URL'],
            rubric: [
              { criterion: 'Cache & matrix where applicable', points: 10 },
              { criterion: 'Secrets & permissions configured', points: 10 },
              { criterion: 'Artifacts & status badges', points: 10 }
            ]
          }
        },
        { id: 'q_cicd_quiz', title: 'Quiz: CI/CD Concepts', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'What stores credentials securely?', options: ['Actions vars','Secrets','README','Artifacts'], answer: 1, why: 'Use repository/org secrets.' },
              { q: 'Which step publishes build outputs?', options: ['actions/checkout','actions/setup-node','upload-artifact','docker/login-action'], answer: 2, why: 'Artifacts are uploaded with upload-artifact.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_devops_capstone',
      title: 'IaC & Observability (Capstone)',
      position: 6,
      lessons: [
        { id: 'l_terraform_course', title: 'Terraform Full Course (IaC)', position: 1, est_minutes: 180, type: 'video', youtube_url: 'https://www.youtube.com/embed/V4waklkBC38' }, 
        { id: 'l_obs_read', title: 'Reading: Prometheus & Grafana Basics', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://prometheus.io/docs/introduction/overview/', summary_md: 'Time-series metrics, scraping, exporters; visualize with Grafana dashboards.' }
        },
        { id: 'p_capstone_cd', title: 'Capstone: From Commit to Cluster', position: 3, est_minutes: 240, type: 'project',
          project: {
            brief_md: 'Provision infra (Terraform) → containerize app (Docker) → deploy to K8s (manifests) → CI/CD (Actions) → basic monitoring (Prometheus/Grafana).',
            deliverables: ['Infra code', 'K8s manifests', 'Actions workflow', 'Runbook.md'],
            rubric: [
              { criterion: 'Reproducible infra (IaC) & parameterization', points: 15 },
              { criterion: 'Automated pipeline from commit to deploy', points: 15 },
              { criterion: 'Basic metrics/health + runbook', points: 15 }
            ]
          },
          resources: [
            { label: 'Grafana Getting Started', url: 'https://grafana.com/docs/grafana/latest/getting-started/' },
            { label: 'Kind (local K8s)', url: 'https://kind.sigs.k8s.io/' }
          ]
        },
        { id: 'q_devops_grad', title: 'Graduation Checklist', position: 4, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Are secrets stored safely (not in repo)?', options: ['Yes','No','Sometimes','Unclear'], answer: 0, why: 'Use secrets managers or Actions secrets.' },
              { q: 'Is deploy observable (health, logs, basic metrics)?', options: ['Yes','No','Partially','Not needed'], answer: 0, why: 'Ops requires visibility for reliability.' }
            ]
          }
        }
      ]
    }
  ]
}
,

  {
  id: 't_backend',
  slug: 'backend',
  title: 'Backend Development',
  description: 'HTTP, REST, Node.js, Express, databases, auth, testing, and deployment.',
  level: 'Beginner → Intermediate',
  modules: [
    
    {
      id: 'm_back_http',
      title: 'HTTP & REST Fundamentals',
      position: 1,
      lessons: [
        { id: 'l_http_crash', title: 'HTTP Crash Course', position: 1, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/iYM2zFP3Zn0' }, 
        { id: 'l_rest_100s', title: 'REST APIs in 100 Seconds', position: 2, est_minutes: 8, type: 'video', youtube_url: 'https://www.youtube.com/embed/-MTSQjw5DrM' }, 
        { id: 'l_http_read', title: 'Reading: MDN HTTP Overview', position: 3, est_minutes: 20, type: 'reading',
          reading: { url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview', summary_md: 'Requests, responses, methods, status codes, headers, caching.' }
        },
        { id: 'p_api_spec', title: 'Project: Design an API Spec (OpenAPI)', position: 4, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Draft an OpenAPI 3.0 spec for a simple “Tasks” service (users, tasks, auth). Include endpoints, schemas, and error responses.',
            deliverables: ['openapi.yaml', 'README explaining resources & errors'],
            rubric: [
              { criterion: 'Clear resources & routes', points: 10 },
              { criterion: 'Consistent request/response schemas', points: 10 },
              { criterion: 'Error handling & status codes', points: 10 }
            ]
          }
        },
        { id: 'q_http_quiz', title: 'Quiz: HTTP & REST', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which status code means “Created”?', options: ['200','201','204','400'], answer: 1, why: '201 indicates a new resource was created.' },
              { q: 'Which header carries credentials (simplest case)?', options: ['X-Token','Authorization','Cookie-Auth','Auth-Id'], answer: 1, why: 'Bearer tokens are sent via Authorization header.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_back_node',
      title: 'Node.js & Express',
      position: 2,
      lessons: [
        { id: 'l_node_express_full', title: 'Node.js + Express Full Course', position: 1, est_minutes: 240, type: 'video', youtube_url: 'https://www.youtube.com/embed/Oe421EPjeBE' }, 
        { id: 'l_express_mw', title: 'Reading: Express Middleware & Routing', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://expressjs.com/en/guide/using-middleware.html', summary_md: 'Middleware flow, order, and routing best practices.' }
        },
        { id: 'p_crud_api', title: 'Project: CRUD API (Tasks)', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Build a CRUD REST API for Tasks with Express. Implement validation, error handling, and pagination.',
            deliverables: ['Repo link', 'Postman collection/OpenAPI spec'],
            rubric: [
              { criterion: 'Routes & controllers separated', points: 10 },
              { criterion: 'Validation & error handling', points: 10 },
              { criterion: 'Pagination & filtering', points: 10 }
            ]
          }
        },
        { id: 'q_node_quiz', title: 'Quiz: Node & Express', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which method registers route handlers?', options: ['app.use','app.route','app.on','app.listen'], answer: 0, why: 'app.use mounts middleware/routers; also app.get/post etc.' },
              { q: 'Where do you put cross-cutting logic?', options: ['Views','Middleware','Static folder','package.json'], answer: 1, why: 'Middleware handles cross-cutting concerns.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_back_db',
      title: 'Databases & SQL (PostgreSQL)',
      position: 3,
      lessons: [
        { id: 'l_postgres_full', title: 'PostgreSQL Full Course', position: 1, est_minutes: 180, type: 'video', youtube_url: 'https://www.youtube.com/embed/qw--VYLpxG4' }, 
        { id: 'l_sql_design', title: 'SQL Schema Design & Keys', position: 2, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/ztHopE5Wnpc' }, 
        { id: 'l_norm_read', title: 'Reading: Normalization & Relationships', position: 3, est_minutes: 20, type: 'reading',
          reading: { url: 'https://www.guru99.com/database-normalization.html', summary_md: '1NF→3NF, primary/foreign keys, many-to-many via junction tables.' }
        },
        { id: 'p_db_integrate', title: 'Project: Integrate Postgres into API', position: 4, est_minutes: 150, type: 'project',
          project: {
            brief_md: 'Connect your Express API to PostgreSQL. Implement models/queries for Users and Tasks; add indexes and basic migrations.',
            deliverables: ['SQL migrations', 'Updated API with DB persistence'],
            rubric: [
              { criterion: 'Secure connection & env config', points: 10 },
              { criterion: 'Efficient queries & indexes', points: 10 },
              { criterion: 'Correct relationships & constraints', points: 10 }
            ]
          }
        },
        { id: 'q_db_quiz', title: 'Quiz: Joins & Indexes', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which index helps equality lookups?', options: ['B-Tree','Hash map','Bitmap','Array'], answer: 0, why: 'B-Tree index is default and good for equality/range.' },
              { q: 'A junction table is used for…', options: ['1:1','1:many','many:many','denormalization'], answer: 2, why: 'It models many-to-many relationships.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_back_auth',
      title: 'Authentication & Security',
      position: 4,
      lessons: [
        { id: 'l_jwt_basics', title: 'JWT Auth Basics', position: 1, est_minutes: 25, type: 'video', youtube_url: 'https://www.youtube.com/embed/mbsmsi7l3r4' }, 
        { id: 'l_owasp_read', title: 'Reading: OWASP Top 10 (Overview)', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://owasp.org/www-project-top-ten/', summary_md: 'Injection, broken auth, sensitive data exposure, SSRF, etc.' }
        },
        { id: 'p_auth_roles', title: 'Project: Auth + RBAC', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Implement registration, login, refresh tokens, and role-based access control (admin/user). Hash passwords with bcrypt/argon2.',
            deliverables: ['Repo link', '.env example', 'Auth docs'],
            rubric: [
              { criterion: 'Secure password hashing & salting', points: 10 },
              { criterion: 'Access/refresh flow with rotation/expiry', points: 10 },
              { criterion: 'RBAC middleware & protected routes', points: 10 }
            ]
          }
        },
        { id: 'q_auth_quiz', title: 'Quiz: Auth & Security', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Best practice for storing passwords?', options: ['Plain text','Base64','Hashed with salt','Encrypted with AES'], answer: 2, why: 'Use strong hash (bcrypt/argon2/scrypt) + salt.' },
              { q: 'JWTs should typically be…', options: ['Never expired','Short-lived','Hard-coded','In query strings'], answer: 1, why: 'Short-lived reduces risk exposure.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_back_quality',
      title: 'Testing, Docs & Caching',
      position: 5,
      lessons: [
        { id: 'l_jest_crash', title: 'Jest Crash Course', position: 1, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/7r4xVDI2vho' }, 
        { id: 'l_swagger_100s', title: 'Swagger/OpenAPI in 100 Seconds', position: 2, est_minutes: 5, type: 'video', youtube_url: 'https://www.youtube.com/embed/EykxNOPIBKo' }, 
        { id: 'l_redis_crash', title: 'Redis Crash Course', position: 3, est_minutes: 40, type: 'video', youtube_url: 'https://www.youtube.com/embed/jgpVdJB2sKQ' }, 
        { id: 'p_tests_docs_cache', title: 'Project: Tests + Swagger + Caching', position: 4, est_minutes: 150, type: 'project',
          project: {
            brief_md: 'Add unit/integration tests for your API, generate Swagger docs from your OpenAPI spec, and cache a hot endpoint with Redis.',
            deliverables: ['Test suite & coverage','/docs endpoint','Redis config & notes'],
            rubric: [
              { criterion: 'Meaningful tests & CI-ready commands', points: 10 },
              { criterion: 'Accurate OpenAPI/Swagger docs', points: 10 },
              { criterion: 'Effective caching strategy & invalidation', points: 10 }
            ]
          }
        },
        { id: 'q_quality_quiz', title: 'Quiz: Quality & Caching', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which testing level hits the real DB and server?', options: ['Unit','Integration','Mocked unit','Snapshot'], answer: 1, why: 'Integration tests exercise multiple components.' },
              { q: 'Redis is primarily used for…', options: ['Long-term storage','In-memory caching','Static hosting','File uploads'], answer: 1, why: 'Redis is an in-memory data store/cache.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_back_capstone',
      title: 'Deployment & Capstone',
      position: 6,
      lessons: [
        { id: 'l_deploy_read', title: 'Reading: Deployment Guides (Vercel/Render)', position: 1, est_minutes: 25, type: 'reading',
          reading: { url: 'https://render.com/docs/deploy-node-express-app', summary_md: 'Environment variables, build & start, health checks, logs, scaling.' }
        },
        { id: 'p_capstone_api', title: 'Capstone: Production-Ready API', position: 2, est_minutes: 240, type: 'project',
          project: {
            brief_md: 'Ship a production-ready API: auth, DB, validation, tests, Swagger, caching, and deployment. Include a short “runbook” for on-call.',
            deliverables: ['Live URL', 'Repo', 'Runbook.md'],
            rubric: [
              { criterion: 'Stable deployment & env config', points: 15 },
              { criterion: 'Observability (logs/health) & error handling', points: 15 },
              { criterion: 'Security (auth, validation, headers)', points: 15 }
            ]
          },
          resources: [
            { label: 'Helmet (security headers)', url: 'https://helmetjs.github.io/' },
            { label: 'PM2 (process manager)', url: 'https://pm2.keymetrics.io/' }
          ]
        },
        { id: 'q_grad_backend', title: 'Graduation Checklist', position: 3, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Are secrets stored in env variables / secret manager?', options: ['Yes','No','Sometimes','Hard-coded'], answer: 0, why: 'Never hard-code secrets.' },
              { q: 'Do you have basic monitoring/logging?', options: ['Yes','No','Maybe later','Not needed'], answer: 0, why: 'You need logs and health endpoints in prod.' }
            ]
          }
        }
      ]
    }
  ]
}
,

  {
  id: 't_front',
  slug: 'frontend',
  title: 'Frontend Development',
  description: 'From HTML/CSS to modern JavaScript and React. Build polished, accessible UIs.',
  level: 'Beginner → Intermediate',
  modules: [

    {
      id: 'm_front_found',
      title: 'Web Foundations',
      position: 1,
      lessons: [
        { id: 'l_html_course', title: 'HTML Full Course', position: 1, est_minutes: 120, type: 'video', youtube_url: 'https://www.youtube.com/embed/kUMe1FH4CHE',
          resources: [{ label: 'MDN: HTML Elements', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element' }]
        },
        { id: 'l_css_course', title: 'CSS Fundamentals', position: 2, est_minutes: 90, type: 'video', youtube_url: 'https://www.youtube.com/embed/yfoY53QXEnI',
          resources: [{ label: 'MDN: CSS Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference' }]
        },
        { id: 'l_semantics', title: 'Semantic HTML (Reading)', position: 3, est_minutes: 20, type: 'reading',
          reading: { url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics', summary_md: 'Why semantics improve accessibility, SEO, and maintainability.' }
        },
        { id: 'p_profile_page', title: 'Project: Personal Profile Page', position: 4, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Build a responsive personal profile with a hero, bio, skills, and contact section. Use semantic tags and a mobile-first layout.',
            deliverables: ['Live demo (e.g., Netlify)', 'Repo link'],
            rubric: [
              { criterion: 'Semantic structure (header/main/footer/section/article)', points: 10 },
              { criterion: 'Mobile-first responsive CSS', points: 10 },
              { criterion: 'Accessible landmarks & alt text', points: 10 }
            ]
          },
          resources: [{ label: 'A11y Landmarks', url: 'https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/' }]
        },
        { id: 'q_found_quiz', title: 'Quiz: HTML & CSS Basics', position: 5, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which element defines the main content region?', options: ['<content>', '<main>', '<section>', '<article>'], answer: 1, why: '<main> holds the dominant content of <body>.' },
              { q: 'Which CSS unit scales with root font size?', options: ['px', 'em', 'rem', '%'], answer: 2, why: 'rem is based on the root font size.' }
            ]
          }
        }
      ]
    },

   
    {
      id: 'm_front_js',
      title: 'Modern JavaScript',
      position: 2,
      lessons: [
        { id: 'l_js_intro', title: 'JavaScript Fundamentals', position: 1, est_minutes: 180, type: 'video', youtube_url: 'https://www.youtube.com/embed/PkZNo7MFNFg' },
        { id: 'l_dom_events', title: 'DOM & Events', position: 2, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/0ik6X4DJKCc' },
        { id: 'l_js_reading', title: 'Reading: JS Guide (MDN)', position: 3, est_minutes: 25, type: 'reading',
          reading: { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', summary_md: 'Core language features, control flow, functions, objects, modules.' }
        },
        { id: 'p_todo', title: 'Project: Interactive Todo (LocalStorage)', position: 4, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Build a todo app with add/edit/delete, filters, and persistence in localStorage.',
            deliverables: ['Live demo', 'Repo link'],
            rubric: [
              { criterion: 'Add/edit/delete & filter by status', points: 10 },
              { criterion: 'Data persists with localStorage', points: 10 },
              { criterion: 'Keyboard accessibility (Enter/Space)', points: 10 }
            ]
          }
        },
        { id: 'q_js_quiz', title: 'Quiz: JS Core', position: 5, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which keyword declares a block-scoped variable?', options: ['var','let','function','const'], answer: 1, why: 'let and const are block-scoped; var is function-scoped.' },
              { q: 'Which API listens for clicks?', options: ['document.attach','addEventListener','onClickGlobal','bindEvent'], answer: 1, why: 'addEventListener is the standard event API.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_front_git',
      title: 'Git & GitHub',
      position: 3,
      lessons: [
        { id: 'l_git_basics', title: 'Git & GitHub Crash Course', position: 1, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/RGOj5yH7evk' },
        { id: 'l_git_flow', title: 'Reading: Git Basics', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics', summary_md: 'Commits, staging, branches, merges, and remotes.' }
        },
        { id: 'p_push_project', title: 'Project: Push Your Todo App', position: 3, est_minutes: 45, type: 'project',
          project: {
            brief_md: 'Initialize a repo, write a good README, commit with meaningful messages, push to GitHub, and enable Pages.',
            deliverables: ['Repo link', 'Live Pages URL'],
            rubric: [
              { criterion: 'Readable README (project purpose, run steps, screenshot)', points: 10 },
              { criterion: 'Clean commit history', points: 10 },
              { criterion: 'GitHub Pages deployed', points: 10 }
            ]
          }
        },
        { id: 'q_git_quiz', title: 'Quiz: Git Essentials', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which command creates a new branch "feature/ui"?', options: ['git new feature/ui','git branch feature/ui','git checkout feature/ui','git make feature/ui'], answer: 1, why: '`git branch <name>` creates a branch.' },
              { q: 'Which command uploads local commits to origin?', options: ['git push','git upload','git commit','git sync'], answer: 0, why: '`git push` sends commits to remote.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_front_react',
      title: 'React Basics',
      position: 4,
      lessons: [
        { id: 'l_react_intro', title: 'React Beginner Course', position: 1, est_minutes: 180, type: 'video', youtube_url: 'https://www.youtube.com/embed/SqcY0GlETPk', 
          resources: [{ label: 'React Docs (beta)', url: 'https://react.dev/learn' }]
        },
        { id: 'l_fetch_api', title: 'Fetching Data & Effects', position: 2, est_minutes: 45, type: 'video', youtube_url: 'https://www.youtube.com/embed/TNhaISOUy6Q' }, 
        { id: 'p_movie_app', title: 'Project: Movie Search App', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Create a search UI that queries OMDb API, shows results with loading and error states. Add favorites persisted to localStorage.',
            deliverables: ['Live demo', 'Repo link'],
            rubric: [
              { criterion: 'Clean component structure & state', points: 10 },
              { criterion: 'Loading/error UI and empty states', points: 10 },
              { criterion: 'Favorites persisted & accessible controls', points: 10 }
            ]
          }
        },
        { id: 'q_react_quiz', title: 'Quiz: Components & State', position: 4, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which hook stores component state?', options: ['useMemo','useEffect','useState','useRef'], answer: 2, why: 'useState returns the value + setter.' },
              { q: 'Where should you fetch data?', options: ['Top-level only','Inside event handlers only','Inside useEffect typically','Directly in render return'], answer: 2, why: 'Side-effects like fetching belong in useEffect.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_front_style_a11y',
      title: 'Styling & Accessibility',
      position: 5,
      lessons: [
        { id: 'l_tailwind', title: 'Tailwind CSS in Practice', position: 1, est_minutes: 60, type: 'video', youtube_url: 'https://www.youtube.com/embed/pfaSUYaSgRo' }, 
        { id: 'l_a11y_video', title: 'Web Accessibility Basics', position: 2, est_minutes: 40, type: 'video', youtube_url: 'https://www.youtube.com/embed/20SHvU2PKsM' }, 
        { id: 'l_a11y_read', title: 'Reading: WAI-ARIA & Landmarks', position: 3, est_minutes: 25, type: 'reading',
          reading: { url: 'https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/', summary_md: 'Use landmark roles to improve navigation for assistive tech.' }
        },
        { id: 'p_ui_kit', title: 'Project: Mini UI Kit', position: 4, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Build a small UI library (Button, Input, Modal, Alert) with focus states and keyboard navigation.',
            deliverables: ['Storybook (optional) / demo page', 'Repo link'],
            rubric: [
              { criterion: 'Consistent spacing & tokens', points: 10 },
              { criterion: 'Focusable & keyboard operable controls', points: 10 },
              { criterion: 'Reusability and docs/readme', points: 10 }
            ]
          }
        },
        { id: 'q_a11y_quiz', title: 'Quiz: Styling & A11y', position: 5, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which WCAG area relates to keyboard use?', options: ['Robust','Operable','Perceivable','Understandable'], answer: 1, why: 'Operable covers keyboard and interaction.' },
              { q: 'Which HTML attribute pairs labels with inputs?', options: ['for on <label>','aria-name','name on <label>','htmlFor on input'], answer: 0, why: '<label for="id"> associates with the input id.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_front_capstone',
      title: 'Capstone: Portfolio Website',
      position: 6,
      lessons: [
        { id: 'p_capstone_brief', title: 'Project Brief & Wireframe', position: 1, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Design and build a personal portfolio with Home, Projects, About, and Contact pages. Include at least 3 projects with case-study writeups.',
            deliverables: ['Live site URL', 'Repo', 'Case studies (Markdown/Notion)'],
            rubric: [
              { criterion: 'Visual design & consistency', points: 15 },
              { criterion: 'Performance (Lighthouse ≥ 90) & a11y basics', points: 15 },
              { criterion: 'Clear project storytelling/case studies', points: 15 }
            ]
          },
          resources: [
            { label: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/overview/' },
            { label: 'Accessibility Checklist', url: 'https://www.a11yproject.com/checklist/' }
          ]
        },
        { id: 'l_hosting', title: 'Deploying with Netlify/Vercel', position: 2, est_minutes: 30, type: 'video', youtube_url: 'https://www.youtube.com/embed/2fG0FZ0r5T4' }, 
        { id: 'q_grad_check', title: 'Graduation Checklist', position: 3, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Does every image have alt text or an empty alt if decorative?', options: ['Yes','No','Unsure','Only on homepage'], answer: 0, why: 'Alt text is key for accessibility.' },
              { q: 'Is the portfolio responsive across mobile/tablet/desktop?', options: ['Yes','No','Partially','Not sure'], answer: 0, why: 'Responsiveness is non-negotiable for hiring managers.' }
            ]
          }
        }
      ]
    }
  ]
},


  {
  id: 't_uiux',
  slug: 'ui-ux',
  title: 'UI/UX Design',
  description: 'Research → IA & flows → wireframes → Figma prototyping → visual design → accessibility → polished case study.',
  level: 'Beginner → Intermediate',
  modules: [
    {
      id: 'm_uiux_found',
      title: 'UX Foundations',
      position: 1,
      lessons: [
        { id: 'l_ux_intro', title: 'What is UX? (AJ&Smart)', position: 1, est_minutes: 20, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/Ovj4hFxko7c',
          resources: [{ label: 'UX vs. UI summary', url: 'https://www.interaction-design.org/literature/topics/ux-design' }]
        },
        { id: 'l_heuristics', title: 'Reading: Nielsen’s 10 Usability Heuristics', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', summary_md: 'Visibility, match with real world, control & freedom, consistency, error prevention, recognition vs recall, flexibility, minimalist design, error recovery, and help/docs.' }
        },
        { id: 'p_heuristic_eval', title: 'Project: Heuristic Evaluation (Mini Audit)', position: 3, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Pick any app/website. Run a quick heuristic evaluation. Document 5–8 issues, severity, and suggested fixes with annotated screenshots.',
            deliverables: ['PDF or Notion page with findings', 'Annotated screenshots'],
            rubric: [
              { criterion: 'Correct mapping to heuristics', points: 10 },
              { criterion: 'Clear severity & actionable fixes', points: 10 },
              { criterion: 'Clean, scannable report format', points: 10 }
            ]
          }
        },
        { id: 'q_found_ux', title: 'Quiz: UX Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Heuristic that reduces memory load:', options: ['Error prevention','Recognition over recall','Flexibility & efficiency','Consistency'], answer: 1, why: 'Interfaces should favor recognition to minimize memory load.' },
              { q: 'UX primarily focuses on…', options: ['Aesthetics','Business model','End-to-end user experience','Brand only'], answer: 2, why: 'UX covers the whole journey: usefulness, usability, delight.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_uiux_research',
      title: 'Research & Strategy',
      position: 2,
      lessons: [
        { id: 'l_interviews_read', title: 'Reading: Planning User Interviews', position: 1, est_minutes: 25, type: 'reading',
          reading: { url: 'https://www.nngroup.com/articles/user-interviews/', summary_md: 'Goals, sampling, question types, bias reduction, ethics, synthesis.' }
        },
        { id: 'l_usability_read', title: 'Reading: Usability Testing 101', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://www.nngroup.com/articles/usability-testing-101/', summary_md: 'Recruiting, tasks, facilitation, notes, and prioritizing issues.' }
        },
        { id: 'p_research_plan', title: 'Project: Lean Research Plan + Persona/JTBD', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Draft a 1-page plan (objectives, methods, participants, questions). Create 1 persona and 1 JTBD statement from assumed or quick guerilla interviews.',
            deliverables: ['1-page plan', 'Persona (or 2)', 'One JTBD statement'],
            rubric: [
              { criterion: 'Focused objectives & neutral questions', points: 10 },
              { criterion: 'Persona grounded in evidence/assumptions', points: 10 },
              { criterion: 'Clear JTBD with context/motivation/outcome', points: 10 }
            ]
          }
        },
        { id: 'q_research_ux', title: 'Quiz: Research Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Best interview question style:', options: ['Leading','Yes/No','Open-ended','Multiple choice'], answer: 2, why: 'Open-ended prompts yield richer insights.' },
              { q: 'Usability tests should have:', options: ['Solution pitching','Task scenarios','No facilitation','Unfiltered biases'], answer: 1, why: 'Well-written, realistic tasks drive valid findings.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_uiux_ia_wire',
      title: 'IA, User Flows & Wireframes',
      position: 3,
      lessons: [
        { id: 'l_wireframes_video', title: 'Wireframing Basics (Figma)', position: 1, est_minutes: 40, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/zgX1C9b5l7A'
        },
        { id: 'l_ia_read', title: 'Reading: Information Architecture Basics', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://www.nngroup.com/articles/information-architecture-ia/', summary_md: 'Grouping, labeling, navigation, and findability patterns.' }
        },
        { id: 'p_user_flow', title: 'Project: User Flow + Low-Fi Wireframes', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Map the flow for a key task (e.g., onboarding, checkout). Produce black-and-white low-fi frames for each step with notes.',
            deliverables: ['User flow diagram', 'Low-fi wireframes (PDF/Figma)'],
            rubric: [
              { criterion: 'Flow completeness & clarity', points: 10 },
              { criterion: 'Clean, minimal wireframes with annotations', points: 10 },
              { criterion: 'Task feasibility and edge cases considered', points: 10 }
            ]
          }
        },
        { id: 'q_ia_wire_quiz', title: 'Quiz: IA & Wireframes', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Wireframes should mainly focus on…', options: ['Color & branding','Layout & structure','Motion design','Copywriting only'], answer: 1, why: 'Keep it low-fi to validate structure/flows first.' },
              { q: 'Primary nav labels should be…', options: ['Clever','Consistent & clear','Vague but short','All verbs'], answer: 1, why: 'Clarity beats cleverness in IA.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_uiux_figma',
      title: 'Figma Prototyping & Components',
      position: 4,
      lessons: [
        { id: 'l_figma_101', title: 'Figma for Beginners', position: 1, est_minutes: 120, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/FTFaQWZBqQ8',
          resources: [{ label: 'Figma Learn: Getting Started', url: 'https://help.figma.com/hc/en-us/categories/360002051733-Get-started' }]
        },
        { id: 'l_comp_variants_read', title: 'Reading: Components, Variants, Auto Layout', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://help.figma.com/hc/en-us/articles/360040451373-Create-components', summary_md: 'Build reusable components, variants for states/sizes, layout constraints with Auto Layout.' }
        },
        { id: 'p_clickable_proto', title: 'Project: Clickable Prototype (Mid-Fi)', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Convert low-fi screens into mid-fi Figma frames. Create components (buttons, inputs, cards), wire interactions, add Auto Layout for responsiveness.',
            deliverables: ['Figma file link', 'Short demo video/GIF'],
            rubric: [
              { criterion: 'Componentization & variants used well', points: 10 },
              { criterion: 'Smooth prototyping links & flows', points: 10 },
              { criterion: 'Auto Layout applied to key sections', points: 10 }
            ]
          }
        },
        { id: 'q_figma_quiz', title: 'Quiz: Prototyping & Components', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Variants are best for…', options: ['Exporting PNGs','Alternate component states/sizes','Page navigation','Dev handoff only'], answer: 1, why: 'Variants group related states like hover/pressed.' },
              { q: 'Auto Layout helps with…', options: ['Animations','Responsive spacing & resizing','SVG editing','Video embeds'], answer: 1, why: 'Auto Layout manages spacing and resizing behavior.' }
            ]
          }
        }
      ]
    },

    
    {
      id: 'm_uiux_visual_a11y',
      title: 'Visual Design & Accessibility',
      position: 5,
      lessons: [
        { id: 'l_typography_color', title: 'Typography & Color for UI', position: 1, est_minutes: 45, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/fqY5Zk6bVJU',
          resources: [
            { label: 'Google Fonts Knowledge', url: 'https://fonts.google.com/knowledge' },
            { label: 'Material 3 Color System', url: 'https://m3.material.io/styles/color/overview' }
          ]
        },
        { id: 'l_a11y_video', title: 'Web Accessibility Basics (Chrome DevRel)', position: 2, est_minutes: 40, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/20SHvU2PKsM'
        },
        { id: 'l_wcag_read', title: 'Reading: WCAG & Contrast', position: 3, est_minutes: 25, type: 'reading',
          reading: { url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', summary_md: 'Perceivable, Operable, Understandable, Robust; contrast ratios and keyboard nav.' }
        },
        { id: 'p_ui_kit', title: 'Project: Mini UI Kit + Style Guide', position: 4, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Create tokens (colors, type scale, spacing), buttons, inputs, cards, modals. Include states and focus outlines. Provide usage guidelines.',
            deliverables: ['Figma library link', 'Style guide page'],
            rubric: [
              { criterion: 'Consistent tokens & scale', points: 10 },
              { criterion: 'Accessible states & focus treatment', points: 10 },
              { criterion: 'Clear docs for usage', points: 10 }
            ]
          }
        },
        { id: 'q_visual_a11y', title: 'Quiz: Visual & A11y', position: 5, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Recommended body text size on web:', options: ['10–12px','14–16px','18–20px','>24px'], answer: 1, why: 'Common guidance targets ~16px for legibility.' },
              { q: 'Minimum contrast ratio for normal text:', options: ['2.0:1','3.0:1','4.5:1','7.0:1'], answer: 2, why: 'WCAG AA requires 4.5:1 for normal text.' }
            ]
          }
        }
      ]
    },

   
    {
      id: 'm_uiux_capstone',
      title: 'Capstone: End-to-End Case Study',
      position: 6,
      lessons: [
        { id: 'p_capstone_brief_uiux', title: 'Project Brief & Scope', position: 1, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Choose a problem (new app or redesign). Deliver research plan, persona/JTBD, IA & user flows, low-fi → mid-fi → prototype, UI kit, and a polished case study.',
            deliverables: ['Figma file', 'Research & flows', 'UI kit', 'Interactive prototype', 'Case study page (PDF/Notion/Portfolio)'],
            rubric: [
              { criterion: 'Traceable process from research to prototype', points: 15 },
              { criterion: 'Usability & accessibility considerations', points: 15 },
              { criterion: 'Clear narrative and outcomes/metrics', points: 15 }
            ]
          },
          resources: [
            { label: 'Case Study Tips (UX Collective)', url: 'https://uxdesign.cc/tagged/case-study' },
            { label: 'A11Y Project Checklist', url: 'https://www.a11yproject.com/checklist/' }
          ]
        },
        { id: 'l_handoff_read', title: 'Reading: Dev Handoff (Figma Inspect/Redlines)', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://help.figma.com/hc/en-us/articles/360040450513-Prepare-designs-for-development', summary_md: 'Components, style consistency, constraints, and Inspect panel for devs.' }
        },
        { id: 'q_uiux_grad', title: 'Graduation Checklist', position: 3, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Does your case study articulate the problem, process, and measurable outcome?', options: ['Yes','No','Partially','Unsure'], answer: 0, why: 'Clear storytelling is crucial for hiring managers.' },
              { q: 'Have you validated flows with at least 3 users or peers?', options: ['Yes','No','Planned','Not applicable'], answer: 0, why: 'Lightweight validation boosts credibility.' }
            ]
          }
        }
      ]
    }
  ]
}
,

  {
  id: 't_pm',
  slug: 'product-management',
  title: 'Product Management',
  description: 'Customer discovery, strategy, roadmaps, execution, analytics, and go-to-market, end to end.',
  level: 'Beginner → Intermediate',
  modules: [
    {
      id: 'm_pm_found',
      title: 'PM Foundations',
      position: 1,
      lessons: [
        { id: 'l_pm_intro', title: 'What is Product Management?', position: 1, est_minutes: 20, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/7dmVQ3I3Z1c',
          resources: [
            { label: 'SVPG: Empowered Product Teams (overview)', url: 'https://www.svpg.com/empowered-product-teams/' }
          ]
        },
        { id: 'l_pm_responsibilities', title: 'The PM Role: Outcomes over Output (reading)', position: 2, est_minutes: 20, type: 'reading',
          reading: {
            url: 'https://www.svpg.com/product-vs-feature-teams/',
            summary_md: 'Difference between outcome-driven product teams and output-driven feature teams.'
          }
        },
        { id: 'p_pm_journal', title: 'Project: Stakeholder Map & Outcome Journal', position: 3, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Map 6–10 stakeholders (influence/interest). Define 3 business outcomes for a sample product and draft success signals.',
            deliverables: ['Stakeholder map', '1-page outcome journal'],
            rubric: [
              { criterion: 'Clear stakeholder analysis', points: 10 },
              { criterion: 'Measurable outcome statements', points: 10 },
              { criterion: 'Coherent success signals', points: 10 }
            ]
          }
        },
        { id: 'q_pm_found', title: 'Quiz: Role & Outcomes', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'PMs should optimize primarily for…', options: ['Feature volume','On-time delivery only','Customer & business outcomes','Dev velocity'], answer: 2, why: 'Outcomes trump raw output.' },
              { q: 'Which artifact best captures *why* to build?', options: ['Sprint board','PRD','Roadmap','Business outcome brief'], answer: 3, why: 'Outcomes explain the “why.”' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_pm_discovery',
      title: 'Discovery, JTBD & Research',
      position: 2,
      lessons: [
        { id: 'l_interviews', title: 'Planning Customer Interviews (reading)', position: 1, est_minutes: 25, type: 'reading',
          reading: {
            url: 'https://www.nngroup.com/articles/user-interviews/',
            summary_md: 'Objectives, sampling, neutral prompts, bias avoidance, synthesis.'
          }
        },
        { id: 'l_jtbd_video', title: 'Jobs-To-Be-Done (intro video)', position: 2, est_minutes: 18, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/BY3qFZ9d8zE'
        },
        { id: 'p_discovery_pack', title: 'Project: Discovery Pack (Interview Guide + JTBD)', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Draft an interview guide (10–12 questions). Produce one persona snapshot and 2 JTBD statements (“When… I want to… so I can…”).',
            deliverables: ['Interview guide', 'Persona snapshot', '2 JTBD statements'],
            rubric: [
              { criterion: 'Neutral, open-ended prompts', points: 10 },
              { criterion: 'Persona grounded in evidence/assumptions', points: 10 },
              { criterion: 'Well-formed JTBD (situation, motivation, outcome)', points: 10 }
            ]
          }
        },
        { id: 'q_pm_discovery', title: 'Quiz: Discovery Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'A good interview question is…', options: ['Leading','Yes/No','Open-ended','Hypothetical only'], answer: 2, why: 'Open questions surface unexpected insights.' },
              { q: 'JTBD focuses on…', options: ['Features','Company goals only','User’s underlying progress','UI polish'], answer: 2, why: 'JTBD frames the progress users seek.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_pm_prioritize',
      title: 'Prioritization & Roadmaps',
      position: 3,
      lessons: [
        { id: 'l_rice_read', title: 'RICE Prioritization (reading)', position: 1, est_minutes: 20, type: 'reading',
          reading: {
            url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/',
            summary_md: 'Reach × Impact × Confidence ÷ Effort to compare initiatives.'
          }
        },
        { id: 'l_now_next_later', title: 'Now/Next/Later Roadmaps (video)', position: 2, est_minutes: 12, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/8c8n8M6pQ9Q'
        },
        { id: 'p_prioritize_board', title: 'Project: RICE Scoring + Outcome Roadmap', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Score 6–10 initiatives with RICE; draft a 1-page Now/Next/Later outcome roadmap linked to business goals.',
            deliverables: ['RICE table (CSV/Sheet)', 'Outcome roadmap (1 page)'],
            rubric: [
              { criterion: 'Reasonable inputs & confidence', points: 10 },
              { criterion: 'Traceable outcomes → initiatives', points: 10 },
              { criterion: 'Concise, stakeholder-ready formatting', points: 10 }
            ]
          }
        },
        { id: 'q_pm_prioritize', title: 'Quiz: Scoring & Roadmaps', position: 4, est_minutes: 8, type: 'quiz',
          quiz: { pass_percent: 70,
            items: [
              { q: 'In RICE, “C” stands for…', options: ['Complexity','Confidence','Cost','Coverage'], answer: 1, why: 'Confidence qualifies your assumptions.' },
              { q: 'Now/Next/Later emphasizes…', options: ['Exact dates','Capacity only','Outcome-oriented sequencing','Random buckets'], answer: 2, why: 'It communicates direction over deadlines.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_pm_execution',
      title: 'Execution (Agile, Specs, Delivery)',
      position: 4,
      lessons: [
        { id: 'l_agile_scrum', title: 'Agile & Scrum in Practice (video)', position: 1, est_minutes: 25, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/9TycLR0TqFA'
        },
        { id: 'l_prd_read', title: 'Writing a Lean PRD (reading)', position: 2, est_minutes: 20, type: 'reading',
          reading: {
            url: 'https://www.svpg.com/the-one-page-product-requirements-document/',
            summary_md: 'One-page PRD: problem, goals, personas, scenarios, success metrics, constraints.'
          }
        },
        { id: 'p_prd_spec', title: 'Project: One-Page PRD + User Stories', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Write a one-page PRD for one initiative; add user stories with acceptance criteria and edge cases. Include risks/assumptions.',
            deliverables: ['One-page PRD', 'User stories + AC'],
            rubric: [
              { criterion: 'Problem & goals are crisp', points: 10 },
              { criterion: 'Stories & AC testable and clear', points: 10 },
              { criterion: 'Risks/assumptions explicit', points: 10 }
            ]
          }
        },
        { id: 'q_pm_exec', title: 'Quiz: Delivery & PRDs', position: 4, est_minutes: 8, type: 'quiz',
          quiz: { pass_percent: 70,
            items: [
              { q: 'Acceptance criteria should be…', options: ['Vague','Testable','Optional','UI-only'], answer: 1, why: 'Testable AC makes quality measurable.' },
              { q: 'Sprint review focuses on…', options: ['Hiring','Code refactor only','Increment demo & feedback','Budget approvals'], answer: 2, why: 'It inspects increment and gathers feedback.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_pm_metrics',
      title: 'Analytics, Experiments & Pricing',
      position: 5,
      lessons: [
        { id: 'l_metrics_video', title: 'North Star & AARRR Metrics (video)', position: 1, est_minutes: 20, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/JZQ8bQ6G9m0'
        },
        { id: 'l_ab_read', title: 'A/B Testing Basics (reading)', position: 2, est_minutes: 20, type: 'reading',
          reading: {
            url: 'https://www.optimizely.com/optimization-glossary/ab-testing/',
            summary_md: 'Hypotheses, variants, sample size, significance, pitfalls.'
          }
        },
        { id: 'p_experiment_brief', title: 'Project: Experiment Brief + Metric Plan', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Define a North Star metric and 3 guardrails. Write an experiment brief (hypothesis, success metric, segments, stop/ship rules).',
            deliverables: ['Metric tree (diagram)', 'Experiment brief (1–2 pages)'],
            rubric: [
              { criterion: 'Coherent metric hierarchy', points: 10 },
              { criterion: 'Sound hypothesis & evaluation rules', points: 10 },
              { criterion: 'Ethical & user-safe experiment design', points: 10 }
            ]
          }
        },
        { id: 'q_pm_metrics', title: 'Quiz: Metrics & Experiments', position: 4, est_minutes: 8, type: 'quiz',
          quiz: { pass_percent: 70,
            items: [
              { q: 'AARRR “R” at the end refers to…', options: ['Revenue','Retention','Referral','Requests'], answer: 2, why: 'Acquisition, Activation, Retention, Revenue, Referral.' },
              { q: 'A good North Star metric is…', options: ['Easily gamed','Aligns to value delivered','Unrelated to strategy','Pure vanity'], answer: 1, why: 'It reflects sustained value creation.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_pm_capstone',
      title: 'Capstone: Strategy to Launch',
      position: 6,
      lessons: [
        { id: 'l_gTM_video', title: 'Go-to-Market Essentials (video)', position: 1, est_minutes: 18, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/5Qy1lSPoaq8'
        },
        { id: 'p_capstone_pm', title: 'Capstone: Mini Strategy → PRD → Roadmap → Launch', position: 2, est_minutes: 240, type: 'project',
          project: {
            brief_md: 'Pick a product idea or redesign. Produce mini strategy (target, positioning), one-page PRD, RICE-prioritized backlog, Now/Next/Later roadmap, and a simple GTM checklist.',
            deliverables: ['Mini strategy (1 page)', 'PRD', 'RICE backlog', 'Roadmap', 'GTM checklist'],
            rubric: [
              { criterion: 'End-to-end coherence (problem→launch)', points: 15 },
              { criterion: 'Prioritization aligned to outcomes', points: 15 },
              { criterion: 'Launch plan realistic & testable', points: 15 }
            ]
          },
          resources: [
            { label: 'Positioning (April Dunford overview)', url: 'https://www.aprildunford.com/' },
            { label: 'Now/Next/Later pattern (ProdPad)', url: 'https://www.prodpad.com/blog/now-next-later-roadmap/' }
          ]
        },
        { id: 'q_pm_grad', title: 'Graduation Checklist', position: 3, est_minutes: 10, type: 'quiz',
          quiz: { pass_percent: 80,
            items: [
              { q: 'Is your roadmap outcome-based and time-agnostic?', options: ['Yes','No','Partially','Unsure'], answer: 0, why: 'Communicate direction, not promises.' },
              { q: 'Do metrics & GTM tie back to the same strategy?', options: ['Yes','No','Somewhat','N/A'], answer: 0, why: 'Alignment prevents local optimization.' }
            ]
          }
        }
      ]
    }
  ]
}
,

  {
  id: 't_cyber',
  slug: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'Threats, blue-team ops, web/app security, cloud IAM incident response, and hands-on-practical.',
  level: 'Beginner → Intermediate',
  modules: [
    {
      id: 'm_cyber_found',
      title: 'Security Foundations',
      position: 1,
      lessons: [
        { id: 'l_cia_tri', title: 'CIA Triad & Threats (video)', position: 1, est_minutes: 14, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/9G8I1bQ0l-4',
          resources: [
            { label: 'NIST Cybersecurity Framework (overview)', url: 'https://www.nist.gov/cyberframework' }
          ]
        },
        { id: 'l_risk_basics', title: 'Reading: Risk, Vulnerabilities, Controls', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://csrc.nist.gov/glossary', summary_md: 'Key security terms and relationships among threats, vulnerabilities, likelihood, and impact.' }
        },
        { id: 'p_found_hardening', title: 'Project: Personal Hardening Checklist', position: 3, est_minutes: 60, type: 'project',
          project: {
            brief_md: 'Create a practical checklist: password manager, MFA, OS/browser updates, disk encryption, secure DNS, and backup routine. Apply it on your own device(s).',
            deliverables: ['Checklist (PDF/Notion)', 'Before/after notes'],
            rubric: [
              { criterion: 'Covers identity, endpoint, backups', points: 10 },
              { criterion: 'Clear step-by-step actions', points: 10 },
              { criterion: 'Evidence of application (screenshots/notes)', points: 10 }
            ]
          }
        },
        { id: 'q_found_cyber', title: 'Quiz: Core Concepts', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Which principle ensures accuracy and trust in data?', options: ['Confidentiality','Integrity','Availability','Non-repudiation'], answer: 1, why: 'Integrity protects against unauthorized modification.' },
              { q: 'Risk is typically a function of…', options: ['Threat × Vulnerability × Impact','Threat ÷ Control','Impact − Likelihood','Control × Cost'], answer: 0, why: 'Classic formulation combines likelihood and impact.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_cyber_net_linux',
      title: 'Networking & Linux for Security',
      position: 2,
      lessons: [
        { id: 'l_network_sec', title: 'Network Security Basics (video)', position: 1, est_minutes: 18, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/2asPoW2gJ-c'
        },
        { id: 'l_linux_cli_read', title: 'Reading: Linux CLI & Permissions', position: 2, est_minutes: 30, type: 'reading',
          reading: { url: 'https://ubuntu.com/tutorials/command-line-for-beginners', summary_md: 'Filesystem, permissions, pipes/greps, services, and logs—skills every analyst uses.' }
        },
        { id: 'p_packet_basics', title: 'Project: Packet & Log Basics', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Capture a short pcap from your own network (or use a sample). Identify DNS/HTTP flows and summarize findings. Review /var/log or Windows Event Viewer for a simple login/boot sequence.',
            deliverables: ['1-page summary', 'Screenshots of Wireshark/EVTX'],
            rubric: [
              { criterion: 'Identifies protocols & conversations', points: 10 },
              { criterion: 'Explains key fields (IP, port, method)', points: 10 },
              { criterion: 'Basic log triage steps documented', points: 10 }
            ]
          },
          resources: [
            { label: 'Wireshark User Guide', url: 'https://www.wireshark.org/docs/wsug_html_chunked/' }
          ]
        },
        { id: 'q_net_linux', title: 'Quiz: Ports & Permissions', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'HTTPS typically uses which TCP port?', options: ['53','80','110','443'], answer: 3, why: '443 is the default for HTTPS.' },
              { q: 'Which Linux command changes file mode bits?', options: ['chown','chmod','chgrp','ps'], answer: 1, why: 'chmod modifies permissions.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_cyber_blue',
      title: 'Blue-Team Ops & SIEM',
      position: 3,
      lessons: [
        { id: 'l_siem_video', title: 'SIEM & Monitoring (video)', position: 1, est_minutes: 18, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/6zSff0bZl2w'
        },
        { id: 'l_win_logging', title: 'Reading: Windows Logging & Sysmon', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://learn.microsoft.com/windows/security/threat-protection/windows-defender-advanced-threat-protection/event-logging', summary_md: 'Core Windows logs, Sysmon event IDs, and why EDR/telemetry matters.' }
        },
        { id: 'p_detect_lab', title: 'Project: “Detect the Oddity” Lab', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Using a sample log set (e.g., Windows Security/Sysmon), define 3 detection rules (failed logons spike, suspicious process tree, unusual outbound). Document queries and rationale.',
            deliverables: ['Query snippets (KQL/Splunk SPL/SQL-like)', 'Short report (what/why/so-what)'],
            rubric: [
              { criterion: 'Clear query logic & filters', points: 10 },
              { criterion: 'Reasonable detection hypotheses', points: 10 },
              { criterion: 'Actionable findings (next steps)', points: 10 }
            ]
          },
          resources: [
            { label: 'Sigma Rules (generic detections)', url: 'https://sigmahq-py.readthedocs.io/' }
          ]
        },
        { id: 'q_blue_quiz', title: 'Quiz: Telemetry & Detections', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'SIEM primarily helps teams…', options: ['Patch endpoints','Aggregate & analyze logs','Block IPs at firewall','Encrypt disks'], answer: 1, why: 'SIEM centralizes and analyzes telemetry.' },
              { q: 'A sudden spike in 4625 events suggests…', options: ['Account creation','Failed logons','Service start','Driver load'], answer: 1, why: '4625 is failed logon (Windows Security).' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_cyber_webapp',
      title: 'Web/AppSec & OWASP',
      position: 4,
      lessons: [
        { id: 'l_owasp_read', title: 'Reading: OWASP Top 10 (Overview)', position: 1, est_minutes: 30, type: 'reading',
          reading: { url: 'https://owasp.org/www-project-top-ten/', summary_md: 'The most critical web app risks with example scenarios and mitigations.' }
        },
        { id: 'l_secure_coding', title: 'Reading: Secure Coding Basics', position: 2, est_minutes: 20, type: 'reading',
          reading: { url: 'https://cheatsheetseries.owasp.org/IndexTopTen.html', summary_md: 'OWASP Cheat Sheets: input validation, authentication, access control, error handling, logging.' }
        },
        { id: 'p_appsec_review', title: 'Project: AppSec Review (Safe & Local)', position: 3, est_minutes: 120, type: 'project',
          project: {
            brief_md: 'Pick a **local demo app** you control. Review auth, input validation, session handling, and error messages. Propose fixes (no production testing).',
            deliverables: ['Findings doc with screenshots', 'Mitigation checklist'],
            rubric: [
              { criterion: 'Findings mapped to OWASP risks', points: 10 },
              { criterion: 'Concrete fix recommendations', points: 10 },
              { criterion: 'Scope limited to owned/local targets', points: 10 }
            ]
          }
        },
        { id: 'q_owasp_quiz', title: 'Quiz: AppSec Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Best defense against SQL injection is…', options: ['Escaping only','Parameterized queries','WAF only','Input length limit'], answer: 1, why: 'Use parameterized/prepared statements.' },
              { q: 'Access control should be enforced…', options: ['In the UI only','On the server','In the DB only','By cookies'], answer: 1, why: 'Server-side authorization checks are critical.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_cyber_cloud',
      title: 'Cloud Security & IAM',
      position: 5,
      lessons: [
        { id: 'l_iam_read', title: 'Reading: Identity & Access Management (IAM) Basics', position: 1, est_minutes: 25, type: 'reading',
          reading: { url: 'https://aws.amazon.com/iam/features/', summary_md: 'Principle of least privilege, roles vs users, policies, temporary credentials.' }
        },
        { id: 'l_shared_resp', title: 'Reading: Shared Responsibility Model', position: 2, est_minutes: 15, type: 'reading',
          reading: { url: 'https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility', summary_md: 'What the cloud provider secures vs what you must secure.' }
        },
        { id: 'p_iam_design', title: 'Project: IAM & Secrets Design', position: 3, est_minutes: 90, type: 'project',
          project: {
            brief_md: 'Design IAM roles/policies for a simple 3-tier app (web, API, DB). Include how secrets are stored (e.g., parameter store/Key Vault) and a rotation plan.',
            deliverables: ['Policy JSON examples (sanitized)', 'Diagram & README'],
            rubric: [
              { criterion: 'Least-privilege policies', points: 10 },
              { criterion: 'Clear separation of duties/roles', points: 10 },
              { criterion: 'Secrets handling & rotation plan', points: 10 }
            ]
          }
        },
        { id: 'q_cloud_quiz', title: 'Quiz: IAM & Cloud Basics', position: 4, est_minutes: 8, type: 'quiz',
          quiz: {
            pass_percent: 70,
            items: [
              { q: 'Least privilege means…', options: ['Full admin to move fast','Grant only required permissions','One role for everyone','No auditing'], answer: 1, why: 'Only the access needed for a specific task.' },
              { q: 'Secrets should be stored…', options: ['In code','In env files in repo','In a secrets manager','In plain text on VM'], answer: 2, why: 'Use a dedicated secrets manager/service.' }
            ]
          }
        }
      ]
    },

    {
      id: 'm_cyber_ir',
      title: 'Incident Response (Capstone)',
      position: 6,
      lessons: [
        { id: 'l_incident_vid', title: 'Incident Response Basics (video)', position: 1, est_minutes: 18, type: 'video',
          youtube_url: 'https://www.youtube.com/embed/8QFqP8XxE0c'
        },
        { id: 'l_nist_ir_read', title: 'Reading: NIST IR Lifecycle (800-61)', position: 2, est_minutes: 25, type: 'reading',
          reading: { url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final', summary_md: 'Prepare → Detect/Analyze → Contain/Eradicate/Recover → Post-Incident.' }
        },
        { id: 'p_tabletop', title: 'Capstone: Tabletop + Runbook', position: 3, est_minutes: 180, type: 'project',
          project: {
            brief_md: 'Run a tabletop scenario (phishing → credential theft). Draft an IR runbook with roles, comms plan, log sources, containment steps, and lessons learned.',
            deliverables: ['Runbook.md', 'Timeline of actions/decisions', 'Lessons learned'],
            rubric: [
              { criterion: 'Clear roles & decision points', points: 15 },
              { criterion: 'Detection/containment steps grounded in telemetry', points: 15 },
              { criterion: 'Actionable improvements captured', points: 15 }
            ]
          }
        },
        { id: 'q_grad_cyber', title: 'Graduation Checklist', position: 4, est_minutes: 10, type: 'quiz',
          quiz: {
            pass_percent: 80,
            items: [
              { q: 'Are contacts/owners documented for each system?', options: ['Yes','No','Partially','Unsure'], answer: 0, why: 'Ownership matters in IR speed and accountability.' },
              { q: 'Do you have baseline detections (auth, process, network)?', options: ['Yes','No','Some','Planned'], answer: 0, why: 'Baselines help spot anomalies quickly.' }
            ]
          }
        }
      ]
    }
  ]
},
];

export function getTrackBySlug(slug) {
  return tracks.find(t => t.slug === slug) || null;
}
export function getLessonById(id) {
  for (const t of tracks) {
    for (const m of t.modules || []) {
      const found = (m.lessons || []).find(l => l.id === id);
      if (found) return { lesson: found, track: t, module: m };
    }
  }
  return { lesson: null, track: null, module: null };
}
export function getFirstLessonId(track) {
  const mods = (track.modules || []).slice().sort((a,b)=>a.position-b.position);
  const firstWithLessons = mods.find(m => (m.lessons?.length ?? 0) > 0);
  if (!firstWithLessons) return null;
  const lessons = firstWithLessons.lessons.slice().sort((a,b)=>a.position-b.position);
  return lessons[0]?.id ?? null;
}
