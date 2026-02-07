import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'League Player Ranking Report Generator',
		url: 'player-ranking-report-generator',
		category: 'Sports Analytics',
		img: '/images/projects/baseball-ranking.png',
		ProjectHeader: {
			title: 'League Player Ranking Report Generator',
			publishDate: 'January 2026',
			tags: 'Python / Excel Automation / Scoring Models / Normalization / Reporting',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Automated Player Ranking Output (Excel)',
				img: '/images/projects/baseball-ranking.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'End-to-End Sports Analytics Automation',
				},
				{
					id: uuidv4(),
					title: 'Deliverables',
					details:
						'Coach-ready Excel ranking reports generated directly from raw evaluation data',
				},
				{
					id: uuidv4(),
					title: 'Turnaround Time',
					details:
						'Full roster reports generated in under 1 minute with zero manual intervention',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Design a scalable, fair, and transparent player evaluation system that converts raw tryout and performance data into standardized rankings coaches can trust for draft decisions, roster balancing, and player development.',
			Technologies: [
				{
					title: 'Tools & Features',
					techs: [
						'Python',
						'Pandas',
						'Excel Automation',
						'Statistical Normalization',
						'Z-Score & Robust Scaling',
						'Weighted Scoring Models',
						'Outlier Handling',
						'Data Quality Checks',
					],
				},
			],
			ProjectDetailsHeading: 'Key Work & Impact',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a fully automated Python pipeline that ingests raw evaluation files and outputs standardized Excel ranking reports with consistent formatting and scoring logic.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented age-group–specific normalization so players are evaluated only against comparable peers, preventing unfair comparisons across groups.',
				},
				{
					id: uuidv4(),
					details:
						'Mapped all skill and overall scores to an intuitive 0–10 scale, where 5 represents the group average, making rankings easy to interpret for non-technical stakeholders.',
				},
				{
					id: uuidv4(),
					details:
						'Designed a flexible weighted scoring framework that allows leagues or coaches to customize how skills contribute to overall rankings without rewriting the pipeline.',
				},
				{
					id: uuidv4(),
					details:
						'Handled missing and incomplete data explicitly by re-normalizing weights, ensuring players are not unfairly penalized due to unavailable measurements.',
				},
				{
					id: uuidv4(),
					details:
						'Reduced the influence of extreme outliers through capped normalization, producing more stable and defensible rankings while preserving meaningful performance differences.',
				},
				{
					id: uuidv4(),
					details:
						'Structured reports for real-world use: clean layouts, side-by-side rankings, clear labels, and transparent breakdowns explaining why each player ranks where they do.',
				},
			],
		},
	},

	{
	id: 2,
	title: 'Player Trend Analysis Report Generator',
	url: 'player-trend-analysis-report',
	category: 'Sports Analytics',
	img: '/images/projects/player-trend-analysis.png',
	ProjectHeader: {
		title: 'Player Trend Analysis Report Generator (Multi-Season)',
		publishDate: 'February 2026',
		tags: 'Python / Longitudinal Analytics / Percentiles / Visualization / Excel & PDF Reporting',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Multi-Season Trend Report View',
			img: '/images/projects/player-trend-analysis.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Longitudinal Sports Analytics Reporting' },
			{
				id: uuidv4(),
				title: 'Focus',
				details:
					'Multi-season trend tracking, development signal detection, and coach-ready takeaways',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'One report per player with year-by-year metrics, trend charts, and an overall development index',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Track how a player’s key metrics evolve across seasons and convert raw changes into clear, coach-friendly insights—highlighting what improved, what regressed, and where to focus training next.',
		Technologies: [
			{
				title: 'Tools & Features',
				techs: [
					'Python',
					'Pandas',
					'Excel Automation',
					'PDF Reporting',
					'Percentile Benchmarking',
					'Time-Series Aggregations',
					'Rolling Averages',
					'YoY Deltas & % Change',
					'Visualization',
					'Data Quality Checks',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Standardized multi-year player data (naming, units, missing values) so comparisons are reliable and repeatable across seasons.',
			},
			{
				id: uuidv4(),
				details:
					'Benchmarked each season using percentile rankings relative to the player’s cohort, making performance changes interpretable even when raw distributions shift year-to-year.',
			},
			{
				id: uuidv4(),
				details:
					'Generated automated trend signals: year-over-year deltas, directionality-aware metrics (e.g., faster sprint times score higher), and clear indicators of meaningful jumps or declines.',
			},
			{
				id: uuidv4(),
				details:
					'Created an “Overall Development Index” that summarizes a player’s multi-metric progress into a single, explainable snapshot for quick decision-making.',
			},
			{
				id: uuidv4(),
				details:
					'Built a coach-first layout with scanable sections: top strength, biggest improvement, latest-season summary, and charts that visually show development over time.',
			},
			{
				id: uuidv4(),
				details:
					'Designed the pipeline to be robust to real-world data: supports metrics appearing/disappearing by season and prevents missing values from breaking reporting.',
			},
		],
	},
},


	{
	id: 3,
	title: 'Player Performance Report Generator',
	url: 'player-performance-report',
	category: 'Sports Analytics',
	img: '/images/projects/player-performance-report.png',
	ProjectHeader: {
		title: 'Individual Player Performance Report Generator',
		publishDate: 'February 2026',
		tags: 'Python / KPI Design / Normalized Scoring / Excel + PDF Reporting / Visual Storytelling',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Individual Player Performance Report (One-Page Summary)',
			img: '/images/projects/player-performance-report.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Coach-Ready Sports Analytics Reporting' },
			{
				id: uuidv4(),
				title: 'Output',
				details:
					'One-page per-player report (Excel + PDF) with overall score, tool grades, strengths, and focus areas',
			},
			{
				id: uuidv4(),
				title: 'Designed For',
				details:
					'Draft decisions, player development conversations, and quick comparisons across a roster',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Summarize a player’s performance into a clean, repeatable one-page report that coaches can scan in seconds—highlighting strengths, development areas, and the key metrics that support those conclusions.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'Excel Automation',
					'PDF Reporting',
					'KPI Design',
					'Normalized Scoring (0–10)',
					'Percentile / Rank Outputs',
					'Color-Banded Insights',
					'Visualization',
					'Data Completeness Checks',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Designed a standardized one-page template so coaches can compare players instantly without re-learning the report layout each time.',
			},
			{
				id: uuidv4(),
				details:
					'Built a normalized scoring system (0–10) for overall and tool grades so evaluations are consistent and comparable within each age group.',
			},
			{
				id: uuidv4(),
				details:
					'Included coach-friendly ranking context (e.g., rank placement and “top %”) to quickly communicate where a player stands in the cohort.',
			},
			{
				id: uuidv4(),
				details:
					'Translated raw measurements into actionable takeaways by automatically flagging strengths and focus areas based on tool score patterns.',
			},
			{
				id: uuidv4(),
				details:
					'Added “Data Completeness” visibility so coaches know whether scores are supported by a full evaluation set (and aren’t guessing on missing tests).',
			},
			{
				id: uuidv4(),
				details:
					'Implemented clean visual communication (color banding + key metric callouts) to turn numbers into an at-a-glance scouting-style summary.',
			},
			{
				id: uuidv4(),
				details:
					'Built for scale: generate the full roster automatically into organized Excel + PDF deliverable folders with minimal manual effort.',
			},
		],
	},
},

	{
	id: 4,
	title: 'Player Injury Detector & Report Tableau Dashboard',
	url: 'injury-dashboards-player-reports',
	category: 'Sports Analytics',
	img: '/images/projects/sfu-injury.png',
	ProjectHeader: {
		title: 'Player Injury Detector & Report Tableau Dashboard',
		publishDate: 'November 2025',
		tags: 'Tableau / Power BI / Athlete Monitoring / Workload & Risk Signals / Reporting Ops',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Player Injury Detector & Report Tableau Dashboard',
			img: '/images/projects/sfu-injury.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Athlete Monitoring & Performance Operations' },
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Interactive dashboards + coach-facing player report formats for weekly staff updates and decision-making',
			},
			{
				id: uuidv4(),
				title: 'Use Cases',
				details:
					'Availability tracking, workload monitoring, early risk screening, and consistent communication across staff',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create reliable reporting tools that help staff track injury and availability trends over time, identify early warning signals (workload spikes, performance drops), and communicate player status using consistent definitions—without relying on manual spreadsheet updates.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Tableau',
					'Power BI',
					'Excel',
					'Data Cleaning & Standardization',
					'KPI Design',
					'Trend Analysis',
					'Rolling Averages',
					'Operational Reporting',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Built dashboards that summarize injury and availability trends across time (weekly views, session-level drilldowns) to support staff reporting and operational decisions.',
			},
			{
				id: uuidv4(),
				details:
					'Integrated workload + performance indicators into a single monitoring view (e.g., rolling averages, session-to-session changes) to surface potential risk signals early—before issues become missed time.',
			},
			{
				id: uuidv4(),
				details:
					'Designed standardized player-level report formats that translate raw logs into clear, action-oriented summaries (status, recent trend, and what staff should pay attention to).',
			},
			{
				id: uuidv4(),
				details:
					'Created consistent definitions and a repeatable reporting structure so staff can trust the numbers (clear status categories, consistent time windows, and documented KPI logic).',
			},
			{
				id: uuidv4(),
				details:
					'Iterated directly with coaches and staff to refine what “matters” operationally, reduce manual work, and keep reporting consistent as the season progressed.',
			},
			{
				id: uuidv4(),
				details:
					'Optimized for real-world usage: fast filtering by player, position, and time range, plus layouts built for quick scanning during meetings.',
			},
		],
	},
},


	{
	id: 5,
	title: 'IMU Head Movement Analysis',
	url: 'imu-head-movement-analysis',
	category: 'Sports Analytics',
	img: '/images/projects/westvan-imu.png',
	ProjectHeader: {
		title: 'IMU Head Movement Analysis',
		publishDate: 'January 2026',
		tags: 'Python / IMU Signal Processing / Time-Series / Event Detection / Feature Engineering / Reporting',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Gyro Magnitude Trend + Detected Movement Windows',
			img: '/images/projects/westvan-imu.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Wearable Sports Science Analytics (IMU-Based)' },
			{
				id: uuidv4(),
				title: 'Data',
				details: 'IMU time-series (gyroscope, accelerometer, angles, and quaternions when available)',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Per-athlete summary outputs + cohort-level CSV summaries + visual plots for coach review',
			},
			{
				id: uuidv4(),
				title: 'Use Cases',
				details:
					'Movement quality screening, stability monitoring, consistency tracking, and training focus recommendations',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Convert raw IMU recordings into coach-readable insights by detecting movement events, quantifying head-movement intensity and stability, and producing consistent summaries that highlight movement quality and potential training focus areas.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'Time-Series Cleaning',
					'Basic Signal Processing (Smoothing / Filtering)',
					'Event Detection (Windowing / Peak-Based Segmentation)',
					'Feature Engineering',
					'Visualization',
					'CSV + Report Outputs',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Cleaned and aligned multi-sensor IMU streams to handle real-world issues (missing values, inconsistent recordings, variable session lengths, and noisy segments).',
			},
			{
				id: uuidv4(),
				details:
					'Built a repeatable movement-event detection approach using smoothed gyro magnitude and window-based segmentation to isolate individual movement bouts from continuous recordings.',
			},
			{
				id: uuidv4(),
				details:
					'Engineered athlete-friendly movement metrics such as peak rotational intensity, sustained-intensity exposure, range-of-motion proxies, and stability/consistency indicators across detected events.',
			},
			{
				id: uuidv4(),
				details:
					'Generated visual diagnostic plots (trend lines + detected movement windows) so coaches can validate patterns quickly instead of trusting a “black box” score.',
			},
			{
				id: uuidv4(),
				details:
					'Produced per-athlete summaries and a cohort-level export (CSV) to enable comparisons across athletes, sessions, and time periods.',
			},
			{
				id: uuidv4(),
				details:
					'Designed the workflow for iteration: metrics and thresholds can be tuned based on sport context, drill type, and coach feedback without rebuilding the pipeline.',
			},
		],
	},
},


	{
	id: 7,
	title: 'Octagon Insights — UFC Analytics',
	url: 'octagon-insights-ufc-analytics',
	category: 'Sports Analytics',
	img: '/images/projects/ufc.png',
	ProjectHeader: {
		title: 'Octagon Insights — UFC Analytics',
		publishDate: 'April 2024',
		tags: 'Python / SQL / Data Cleaning / EDA / Visualization / Feature Importance / Predictive Modeling',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'UFC Fight Outcome Analytics',
			img: '/images/projects/ufc.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Team Analytics Project (End-to-End Pipeline)' },
			{
				id: uuidv4(),
				title: 'Dataset',
				details: '1,000+ UFC fight records with 100+ attributes (fighter stats + fight outcomes)',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Cleaned dataset + EDA notebook + visualization suite + baseline ML models for outcome prediction',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Use exploratory analysis and modeling to uncover patterns correlated with UFC fight outcomes, communicate insights through clear visual storytelling, and build baseline predictive models to test which features matter most.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'Matplotlib',
					'SQL',
					'Jupyter Notebooks',
					'Feature Engineering',
					'Tree-Based Models (Feature Importance)',
					'Model Evaluation',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Built a reproducible data pipeline that transforms raw UFC fight data into a cleaned analysis-ready dataset by resolving missing values, inconsistent formats, and outliers across a wide column set.',
			},
			{
				id: uuidv4(),
				details:
					'Performed structured EDA to test relationships between fighter attributes (reach, stance, height/weight) and outcome signals (win/loss, finish round, method), translating findings into coach/analyst-readable visuals.',
			},
			{
				id: uuidv4(),
				details:
					'Created 10+ visualizations to highlight performance patterns, distribution shifts, and matchup factors that correlate with winning—designed for storytelling, not just charts.',
			},
			{
				id: uuidv4(),
				details:
					'Developed baseline machine learning approaches to predict fight outcomes and compare models across iterations, using evaluation metrics to identify what improved performance and what did not.',
			},
			{
				id: uuidv4(),
				details:
					'Ran feature-importance analysis (tree-based models) to rank which fighter attributes contributed most to prediction strength, helping separate “interesting” variables from “useful” ones.',
			},
			{
				id: uuidv4(),
				details:
					'Packaged the project for replication (scripts + notebooks + requirements) so anyone can rerun the pipeline end-to-end with the raw dataset.',
			},
		],
	},
},
{
	id: 12,
	title: 'Music Artist Performance Analytics',
	url: 'music-artist-performance-analytics',
	category: 'BI & Analytics',
	img: '/images/projects/music-analytics.png',
	ProjectHeader: {
		title: 'Music Artist Performance Analytics (Streaming + Audience Insights)',
		publishDate: '2025',
		tags: 'Tableau / Streaming Analytics / Audience Insights / Release Strategy / Visual Storytelling',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Artist Streaming Insights Dashboard',
			img: '/images/projects/music-analytics.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'BI + Analytics Portfolio Project' },
			{
				id: uuidv4(),
				title: 'Focus',
				details:
					'Streaming performance, audience behavior, platform mix, and release lifecycle trends',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Interactive Tableau dashboards + PDF export for stakeholder-friendly reporting',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Turn raw music streaming exports into a decision-support dashboard that helps artists/teams understand what is driving performance—what’s growing, where listeners come from, which platforms matter, and how release-week momentum compares to long-tail behavior.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Tableau',
					'Excel (Data Preparation)',
					'CSV Datasets',
					'KPI Design',
					'Trend Analysis',
					'Segmentation (Geo / Demographic / Platform)',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Built a Tableau dashboard suite that breaks down performance at the song level and across weekly trends—making it easy to spot breakout tracks, decay patterns, and momentum shifts across an album/release cycle.',
			},
			{
				id: uuidv4(),
				details:
					'Created audience insights views (geography + demographics) to show where growth is coming from and where targeting could be tightened for marketing and touring decisions.',
			},
			{
				id: uuidv4(),
				details:
					'Analyzed platform contribution (Spotify vs Apple Music, etc.) to quantify dependency risk and identify where incremental gains will matter most.',
			},
			{
				id: uuidv4(),
				details:
					'Added stream-source breakdowns (organic vs editorial) to separate sustainable fan demand from playlist-driven spikes—improving how teams interpret “good weeks.”',
			},
			{
				id: uuidv4(),
				details:
					'Designed release-week vs long-tail comparisons to show whether performance is front-loaded or compounding over time—supporting release planning and follow-up content timing.',
			},
			{
				id: uuidv4(),
				details:
					'Packaged insights into a clean, client-ready PDF export so the analysis can be shared in meetings without needing Tableau access.',
			},
		],
	},
},


	// =========================
	// OTHER PROJECTS
	// =========================
	{
	id: 8,
	title: 'LendingClub Credit Risk Analysis on Loan Defaults',
	url: 'lendingclub-credit-risk-analysis',
	category: 'BI & Analytics',
	img: '/images/projects/lendingclub.png',
	ProjectHeader: {
		title: 'LendingClub Credit Risk Analysis on Loan Defaults',
		publishDate: 'Dec 2025',
		tags: 'Python / Risk Analytics / EDA / Feature Selection / Clustering / Outlier Detection / ML Classification',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Credit Risk Modeling & Insights',
			img: '/images/projects/lendingclub.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Personal Data Mining / Risk Analytics Project' },
			{ id: uuidv4(), title: 'Domain', details: 'Credit Risk / Lending / Default Prediction' },
			{
				id: uuidv4(),
				title: 'Scope',
				details:
					'Large-scale borrower dataset (1M+ records) with 150+ engineered and curated features for default risk analysis',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'End-to-end notebooks + final report + reusable feature sets (raw, scaled+PCA) for clustering and classification',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Analyze loan default risk by segmenting borrowers, detecting anomalous risk profiles, and building predictive models that identify high-risk borrowers—supporting credit decisioning and risk monitoring.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'NumPy',
					'Scikit-learn',
					'XGBoost',
					'scikit-learn-extra (K-Medoids)',
					'PCA',
					't-SNE',
					'Git',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Built an end-to-end analytics workflow covering cleaning, preprocessing, feature selection, modeling, and evaluation—structured as reproducible notebooks with project-generated datasets.',
			},
			{
				id: uuidv4(),
				details:
					'Performed feature selection using multiple methods (RFE, SelectKBest, Fisher Score, Mutual Information) to reduce noise and improve model signal quality across 150+ variables.',
			},
			{
				id: uuidv4(),
				details:
					'Segmented borrower profiles using clustering (K-Means, K-Medoids, Agglomerative) to uncover distinct risk archetypes and provide interpretable group-level insights beyond a single risk score.',
			},
			{
				id: uuidv4(),
				details:
					'Detected anomalous borrower behavior using outlier detection (Local Outlier Factor + distance-based approaches) to flag edge-case risk patterns that traditional averages can hide.',
			},
			{
				id: uuidv4(),
				details:
					'Trained and tuned classification models (Logistic Regression, Random Forest, XGBoost) and evaluated performance using cross-validation and ROC analysis.',
			},
			{
				id: uuidv4(),
				details:
					'Optimized for “risk capture” by targeting recall on the charged-off class—achieving 67% recall and 0.43 F1-score to better identify high-risk borrowers for review or policy tightening.',
			},
			{
				id: uuidv4(),
				details:
					'Created PCA/t-SNE visual diagnostics and correlation analysis to validate structure in the data and communicate findings clearly to non-technical stakeholders.',
			},
		],
	},
},


	{
	id: 9,
	title: 'Fintech LLMs Investment Evaluation Analysis',
	url: 'fintech-llm-investment-evaluation',
	category: 'Applied AI & Analytics',
	img: '/images/projects/fintech-llm1.png',
	ProjectHeader: {
		title: 'Fintech LLMs Investment Evaluation Analysis',
		publishDate: 'Nov 2025 - Dec 2025',
		tags: 'Python / LLM Evaluation / NLP (FinBERT) / Portfolio Risk Metrics / Backtesting / Bias Analysis',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'LLM Portfolio Evaluation Framework',
			img: '/images/projects/fintech-llm1.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Personal Applied AI + FinTech Research Project' },
			{
				id: uuidv4(),
				title: 'Models Compared',
				details: 'ChatGPT vs Gemini vs FinGPT (finance-specialized LLM)',
			},
			{
				id: uuidv4(),
				title: 'Investor Personas',
				details: 'Conservative / Balanced / Aggressive (standardized prompts to remove prompt bias)',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Evaluation notebook + results tables + summary report/presentation with findings and recommendations',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Evaluate whether LLMs can generate reliable investment-style outputs by testing factual accuracy, sentiment bias, portfolio risk alignment, diversification quality, and backtested performance across different investor profiles.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'Pandas',
					'NumPy',
					'FinBERT (Sentiment)',
					'Portfolio Risk Metrics',
					'Z-Score Normalization',
					'HHI Concentration Index',
					'Backtesting vs SPY',
					'Sharpe Ratio / Max Drawdown',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Findings',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Designed an end-to-end evaluation pipeline that converts unstructured LLM responses into structured datasets (tickers, asset types, allocations, rationale) for apples-to-apples comparison across models.',
			},
			{
				id: uuidv4(),
				details:
					'Built factual accuracy checks to validate ticker existence and asset description correctness, scoring reliability with an objective pass/fail approach.',
			},
			{
				id: uuidv4(),
				details:
					'Measured sentiment bias using FinBERT to quantify whether language skewed overly optimistic, overly cautious, or encouraged excessive risk-taking across personas.',
			},
			{
				id: uuidv4(),
				details:
					'Quantified portfolio risk alignment using volatility-based risk scoring and z-score normalization to compare risk levels consistently across asset classes and model outputs.',
			},
			{
				id: uuidv4(),
				details:
					'Evaluated diversification quality using the Herfindahl–Hirschman Index (HHI) to detect concentration risk and compare asset mix quality between models.',
			},
			{
				id: uuidv4(),
				details:
					'Backtested generated portfolios and benchmarked against SPY using total return, Sharpe ratio, and max drawdown to separate “high returns” from sustainable risk-adjusted performance.',
			},
			{
				id: uuidv4(),
				details:
					'Key finding: general-purpose LLMs produced more usable and reliable outputs than the finance-specialized model in this setup, reinforcing the need for validation layers + human oversight before real-world use.',
			},
		],
	},
},


	{
	id: 10,
	title: 'Medical Chest X-ray Classifier',
	url: 'medical-chest-xray-classifier',
	category: 'Data Science',
	img: '/images/projects/chest-xray.png',
	ProjectHeader: {
		title: 'Medical Chest X-ray Classifier',
		publishDate: 'Jan 2025 - Apr 2025',
		tags: 'Deep Learning / Computer Vision / ResNet50 / Model Benchmarking / Deployment (Flask)',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'X-Ray Diagnosis Web App (Demo)',
			img: '/images/projects/chest-xray.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'University ML Project (End-to-End System)' },
			{
				id: uuidv4(),
				title: 'Task',
				details: 'Multi-class classification: COVID-19 vs TB vs Pneumonia vs Normal',
			},
			{
				id: uuidv4(),
				title: 'Models',
				details: 'ResNet50 (primary) + comparisons with VGG16, DenseNet, and a custom CNN',
			},
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Trained model files + reproducible preprocessing notebook + Flask web app for inference + documentation',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Build a deep-learning chest X-ray screening system that classifies medical images into COVID-19, Tuberculosis, Pneumonia, or Normal—pairing strong model performance with clear documentation and a working web demo for inference.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Python',
					'PyTorch',
					'OpenCV / Image Preprocessing',
					'Matplotlib',
					'Data Augmentation',
					'Class Weighting',
					'Model Evaluation (Confusion Matrix, Precision/Recall)',
					'Flask (Deployment)',
					'Git',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Built an end-to-end pipeline from raw multi-source datasets → cleaned/preprocessed dataset → model training → evaluation → deployed inference via a Flask web application.',
			},
			{
				id: uuidv4(),
				details:
					'Trained a ResNet50-based classifier on 15K+ chest X-ray images and achieved ~92% accuracy while tracking class-wise performance to avoid “accuracy-only” reporting.',
			},
			{
				id: uuidv4(),
				details:
					'Improved generalization using augmentation, normalization, and class weighting to address class imbalance and reduce overfitting—optimizing for better recall on disease classes.',
			},
			{
				id: uuidv4(),
				details:
					'Benchmarked multiple architectures (ResNet50, VGG16, DenseNet, custom CNN) to compare performance tradeoffs and validate model selection beyond a single run.',
			},
			{
				id: uuidv4(),
				details:
					'Performed EDA and visual diagnostics to understand dataset imbalance, image quality variance, and model behavior—supporting explainable reporting in the final write-up.',
			},
			{
				id: uuidv4(),
				details:
					'Packaged the project for replication with clear repository structure, setup instructions, and pretrained model download steps so others can run the system end-to-end.',
			},
		],
	},
},


	{
	id: 11,
	title: 'Yelp Business Intelligence Analysis',
	url: 'yelp-business-intelligence-analysis',
	category: 'BI & Analytics',
	img: '/images/projects/yelp-bi.png',
	ProjectHeader: {
		title: 'Yelp Business Intelligence Analysis',
		publishDate: 'April 2023',
		tags: 'SQL / Data Modeling / BI Querying / Python / Tkinter / Interactive Reporting',
	},
	ProjectImages: [
		{
			id: uuidv4(),
			title: 'Interactive Yelp BI Application',
			img: '/images/projects/yelp-bi.png',
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Project',
		CompanyInfo: [
			{ id: uuidv4(), title: 'Type', details: 'Course Project (End-to-End BI App)' },
			{ id: uuidv4(), title: 'Focus', details: 'Relational BI + Interactive SQL Reporting' },
			{
				id: uuidv4(),
				title: 'Deliverables',
				details:
					'Normalized database + optimized SQL reporting queries + GUI app for business/user exploration',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Structure Yelp-style review data into a normalized relational schema and build an interactive BI application that lets users filter, explore, and query businesses and users—turning raw tables into decision-support reporting.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'SQL',
					'MySQL (Relational Queries)',
					'ER Modeling',
					'Normalization (3NF)',
					'Python',
					'Tkinter (GUI)',
					'Database Connectivity',
					'Query Optimization',
				],
			},
		],
		ProjectDetailsHeading: 'Key Work & Impact',
		ProjectDetails: [
			{
				id: uuidv4(),
				details:
					'Designed a normalized relational schema using ER modeling to ensure consistent reporting across businesses, users, reviews, and relationships—reducing redundancy and improving query reliability.',
			},
			{
				id: uuidv4(),
				details:
					'Built an interactive BI application that supports real-world exploration workflows: search businesses by city, name, and star thresholds, with results displayed in a scrollable table for fast comparison.',
			},
			{
				id: uuidv4(),
				details:
					'Implemented user-driven analytics and interaction flows (login validation, write-a-review, add-friend) to simulate how BI systems support operational actions—not just read-only dashboards.',
			},
			{
				id: uuidv4(),
				details:
					'Wrote and optimized 10+ SQL queries powering dynamic filters and reports, ensuring case-insensitive search and flexible optional filtering without breaking the UX.',
			},
			{
				id: uuidv4(),
				details:
					'Added clear success/error messaging and simple navigation to make the tool usable for non-technical users while keeping the underlying query logic structured and testable.',
			},
			{
				id: uuidv4(),
				details:
					'Packaged the project with documented structure and instructions so the database + application can be reproduced and demoed end-to-end.',
			},
		],
	},
},

];
