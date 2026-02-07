import Link from 'next/link';
import Image from 'next/image';

function ProjectSingle({ title, category, img, url }) {
	return (
		<Link
			href={`/projects/${url}`}
			aria-label={title}
			className="group flex flex-col h-full rounded-xl shadow-lg hover:shadow-xl bg-secondary-light dark:bg-ternary-dark overflow-hidden"
		>
			{/* Bigger fixed-height image area + padding to add white space */}
			<div className="relative w-full h-72 sm:h-80 bg-white dark:bg-ternary-dark px-6 py-8">
				<Image
					src={img}
					alt={title}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-contain"
				/>
			</div>

			{/* Centered title + category (bigger like before) */}
			<div className="flex flex-col items-center justify-center text-center px-6 py-8 flex-1">
				<h2 className="font-general-medium text-2xl sm:text-2xl text-ternary-dark dark:text-ternary-light leading-snug min-h-[3.5rem]">
					{title}
				</h2>

				<p className="font-general-regular text-lg text-gray-500 dark:text-gray-200 mt-6">
					{category}
				</p>
			</div>
		</Link>
	);
}

export default ProjectSingle;
