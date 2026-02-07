import { useMemo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid({
	projects = projectsData,
	title = 'Projects portfolio',
	showFilters = true,
	limit, // e.g. 3 for home
	sectionId = 'projects',
}) {
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');

	// Unique category options (from the projects being displayed)
	const categoryOptions = useMemo(() => {
		const set = new Set(projects.map((p) => p.category).filter(Boolean));
		return Array.from(set);
	}, [projects]);

	const filteredProjects = useMemo(() => {
		let list = [...projects];

		// Filter by category
		if (selectProject) {
			list = list.filter((p) => p.category === selectProject);
		}

		// Filter by search (title)
		if (searchProject.trim()) {
			const q = searchProject.trim().toLowerCase();
			list = list.filter((p) => (p.title || '').toLowerCase().includes(q));
		}

		// Limit results (for featured)
		if (typeof limit === 'number') {
			list = list.slice(0, limit);
		}

		return list;
	}, [projects, selectProject, searchProject, limit]);

	return (
		<section id={sectionId} className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					{title}
				</p>
			</div>

			{/* Filters (hide on Home) */}
			{showFilters ? (
				<div className="mt-10 sm:mt-16">
					<h3
						className="
							font-general-regular 
							text-center text-secondary-dark
							dark:text-ternary-light
							text-md
							sm:text-xl
							mb-3
						"
					>
						Search projects by title or filter by category
					</h3>

					<div
						className="
							flex
							justify-between
							border-b border-primary-light
							dark:border-secondary-dark
							pb-3
							gap-3
						"
					>
						<div className="flex justify-between gap-2">
							<span
								className="
									hidden
									sm:block
									bg-primary-light
									dark:bg-ternary-dark
									p-2.5
									shadow-sm
									rounded-xl
									cursor-pointer
								"
							>
								<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5" />
							</span>

							<input
								value={searchProject}
								onChange={(e) => setSearchProject(e.target.value)}
								className="
									font-general-medium 
									pl-3
									pr-1
									sm:px-4
									py-2
									border 
									border-gray-200
									dark:border-secondary-dark
									rounded-lg
									text-sm
									sm:text-md
									bg-secondary-light
									dark:bg-ternary-dark
									text-primary-dark
									dark:text-ternary-light
								"
								id="projectSearch"
								name="projectSearch"
								type="search"
								placeholder="Search Projects"
								aria-label="Search Projects"
							/>
						</div>

						<ProjectsFilter
							value={selectProject}
							options={categoryOptions}
							onChange={setSelectProject}
						/>
					</div>
				</div>
			) : null}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{filteredProjects.map((project, index) => (
					<ProjectSingle key={`${project.url || project.id || index}`} {...project} />
				))}
			</div>
		</section>
	);
}

export default ProjectsGrid;
