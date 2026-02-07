import FormInput from '../reusable/FormInput';

const EMAIL_TO = 'deepbhimani1985@gmail.com';

function ContactForm() {
	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;

		const name = form.elements.name?.value?.trim() || '';
		const email = form.elements.email?.value?.trim() || '';
		const subjectRaw = form.elements.subject?.value?.trim() || '';
		const message = form.elements.message?.value?.trim() || '';

		if (!name || !email || !message) {
			alert('Please fill out your name, email, and message.');
			return;
		}

		const subject = subjectRaw || `Website Inquiry from ${name}`;

		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			'',
			'Message:',
			message,
		].join('\n');

		const gmailUrl =
			'https://mail.google.com/mail/?view=cm&fs=1' +
			`&to=${encodeURIComponent(EMAIL_TO)}` +
			`&su=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;

		// ✅ New-tab ONLY (no fallback that hijacks current tab)
		const a = document.createElement('a');
		a.href = gmailUrl;
		a.target = '_blank';
		a.rel = 'noopener noreferrer';
		document.body.appendChild(a);
		a.click();
		a.remove();

		// Optional: clear the form after opening Gmail
		form.reset();
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<button
							type="submit"
							aria-label="Send Message"
							className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
