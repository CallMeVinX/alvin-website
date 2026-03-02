import Navbar from "@/components/layout/Navbar";

export default function DevelopmentPage() {
	return (
		<main className="bg-zinc-950 text-zinc-100 min-h-screen">
			<Navbar />

			<section className="px-6 sm:px-10 lg:px-20 pt-32 pb-16">
				<div className="max-w-4xl mx-auto rounded-2xl border border-amber-400/30 bg-amber-500/10 px-6 py-8 text-center">
					<p className="text-sm uppercase tracking-widest text-amber-300/90">Personal Mode</p>
					<h1 className="mt-2 text-3xl sm:text-4xl font-bold text-amber-200">In Development</h1>
					<p className="mt-4 text-amber-100/90">
						This section is currently under development. Please switch back to Professional mode to view the full portfolio.
					</p>
				</div>
			</section>
		</main>
	);
}
