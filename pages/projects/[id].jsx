import { useMemo, useState } from 'react';
import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';

function ProjectSingle({ project }) {
	const images = useMemo(() => project?.ProjectImages || [], [project]);
	const [activeIndex, setActiveIndex] = useState(0);

	const activeImage = images[activeIndex] || images[0];

	// Safety: if somehow project is missing, avoid runtime crash
	if (!project) return null;

	return (
		<div className="container mx-auto">
			<PagesMetaHead title={project?.title || project?.ProjectHeader?.title} />

			{/* Header */}
			<div>
				<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
					{project.ProjectHeader.title}
				</p>

				<div className="flex flex-wrap gap-y-3">
					<div className="flex items-center mr-10">
						<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
						<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* BIG centered hero image */}
			{activeImage ? (
				<div className="mt-12">
					<div className="mx-auto max-w-5xl">
						<div className="rounded-xl shadow-lg bg-white dark:bg-ternary-dark p-4 sm:p-6">
							<div className="relative w-full h-[360px] sm:h-[520px] lg:h-[640px]">
								<Image
									src={activeImage.img}
									alt={activeImage.title || project.ProjectHeader.title}
									fill
									sizes="(max-width: 1024px) 100vw, 1024px"
									className="object-contain"
									priority
								/>
							</div>
						</div>

						{/* Thumbnails (only if multiple images) */}
						{images.length > 1 ? (
							<div className="mt-6 flex flex-wrap justify-center gap-4">
								{images.map((imgItem, idx) => (
									<button
										key={imgItem.id || idx}
										type="button"
										onClick={() => setActiveIndex(idx)}
										className={`rounded-lg overflow-hidden border transition duration-200 ${
											idx === activeIndex
												? 'border-indigo-500'
												: 'border-gray-200 dark:border-secondary-dark'
										}`}
										aria-label={`View image ${idx + 1}`}
									>
										<div className="relative w-28 h-20 sm:w-32 sm:h-24 bg-white dark:bg-ternary-dark">
											<Image
												src={imgItem.img}
												alt={imgItem.title || `Project image ${idx + 1}`}
												fill
												sizes="160px"
												className="object-contain"
											/>
										</div>
									</button>
								))}
							</div>
						) : null}
					</div>
				</div>
			) : null}

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* About Project */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
							{project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{project.ProjectInfo.CompanyInfo.map((info) => (
								<li
									className="font-general-regular text-ternary-dark dark:text-ternary-light"
									key={info.id}
								>
									<span>{info.title}: </span>
									<span>{info.details}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Objective */}
					<div className="mb-7">
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Tools & Features */}
					{project.ProjectInfo?.Technologies?.[0] ? (
						<div className="mb-7">
							<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
								{project.ProjectInfo.Technologies[0].title}
							</p>
							<p className="font-general-regular text-primary-dark dark:text-ternary-light">
								{project.ProjectInfo.Technologies[0].techs.join(', ')}
							</p>
						</div>
					) : null}
				</div>

				{/* Key Work & Impact */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
						{project.ProjectInfo.ProjectDetailsHeading}
					</p>
					{project.ProjectInfo.ProjectDetails.map((details) => (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					))}
				</div>
			</div>

			{/* ✅ Related Projects removed. Footer "External Links" stays in your layout/footer. */}
		</div>
	);
}

/**
 * Build-time generation for Cloudflare Pages (static).
 * IMPORTANT: this assumes your dynamic route param is a slug stored in `project.url`.
 */
export async function getStaticPaths() {
	return {
		paths: projectsData.map((p) => ({
			params: { id: String(p?.url) },
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params?.id;

	let project = projectsData.find((p) => String(p?.url) === String(slug));

	// Optional fallback: numeric id support if someone visits /projects/1 manually
	if (!project) {
		const asNumber = Number(slug);
		if (!Number.isNaN(asNumber)) {
			project = projectsData.find((p) => Number(p?.id) === asNumber);
		}
	}

	if (!project) return { notFound: true };

	// Ensure props are serializable
	const safeProject = JSON.parse(JSON.stringify(project));

	return {
		props: { project: safeProject },
	};
}

export default ProjectSingle;
