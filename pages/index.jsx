import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import { projectsData } from '../data/projectsData';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />

			{/* Featured (top 3 only) */}
			<ProjectsGrid
				projects={projectsData.slice(0, 3)}
				title="Featured Projects"
				showFilters={false}
				limit={3}
				sectionId="projects"
			/>

			{/* Button to full Projects page */}
			<div className="mt-10 sm:mt-15 flex justify-center">
				<Link
					href="/projects"
					aria-label="More Projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				>
					More Projects
				</Link>
			</div>
		</div>
	);
}
