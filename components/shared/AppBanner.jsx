import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();

	const handleScrollToProjects = (e) => {
		e.preventDefault();
		const el = document.getElementById('projects');
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			// ✅ Key change: full viewport height + extra bottom padding so next section is out of view
			className="flex flex-col sm:flex-row sm:justify-between items-center min-h-screen pt-6 sm:pt-0 pb-24 sm:pb-36"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hi, I am Deep Bhimani
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					Data & Baseball Analyst
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
					className="flex justify-center sm:block"
				>
					<a
						href="#"
						onClick={handleScrollToProjects}
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="See Projects"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg duration-100">
							See Projects
						</span>
					</a>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 mt-8 sm:mt-0 flex justify-center sm:justify-end"
			>
				<div className="w-full max-w-[800px]">
					<img
						src={activeTheme === 'dark' ? '/images/Hero.png' : '/images/Hero.png'}
						alt="Developer"
						className="w-full h-auto object-contain"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
