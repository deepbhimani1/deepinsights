import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	const [aboutMe] = useState(aboutMeData);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			{/* Photo */}
			<div className="w-full sm:w-1/3 lg:w-1/4 mb-7 sm:mb-0 flex justify-center">
				{/* Frame controls size + aspect ratio (prevents stretch) */}
				<div className="relative w-64 sm:w-72 aspect-[4/5]">
					<Image
						src="/images/profile.jpeg"
						alt="Profile Image"
						fill
						priority
						className="rounded-xl shadow-sm object-cover"
						sizes="(max-width: 640px) 256px, 288px"
					/>
				</div>
			</div>

			{/* Bio */}
			<div className="font-general-regular w-full sm:w-2/3 lg:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
}

export default AboutMeBio;
