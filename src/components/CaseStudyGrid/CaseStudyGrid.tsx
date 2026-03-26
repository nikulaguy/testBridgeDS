import { useState, useMemo } from "react";
import type {
	CaseStudy,
	Expertise,
	Sector,
	Gain,
} from "../../data/case-studies";
import styles from "./CaseStudyGrid.module.css";

type FilterCategory = "expertise" | "sector" | "gain";

type ActiveFilters = {
	expertise: Expertise | null;
	sector: Sector | null;
	gain: Gain | null;
};

type Props = {
	caseStudies: CaseStudy[];
	expertises: Expertise[];
	sectors: Sector[];
	gains: Gain[];
};

export default function CaseStudyGrid({
	caseStudies,
	expertises,
	sectors,
	gains,
}: Props) {
	const [filters, setFilters] = useState<ActiveFilters>({
		expertise: null,
		sector: null,
		gain: null,
	});

	const toggleFilter = (category: FilterCategory, value: string) => {
		setFilters((prev) => ({
			...prev,
			[category]: prev[category] === value ? null : value,
		}));
	};

	const filteredStudies = useMemo(() => {
		return caseStudies.filter((cs) => {
			if (filters.expertise && cs.expertise !== filters.expertise) return false;
			if (filters.sector && cs.sector !== filters.sector) return false;
			if (filters.gain && cs.gain !== filters.gain) return false;
			return true;
		});
	}, [caseStudies, filters]);

	return (
		<div className={styles.container}>
			{/* Filters */}
			<div className={styles.filters}>
				<div className={styles.filterRow}>
					<span className={`${styles.filterLabel} text-caption-1`}>
						Expertise
					</span>
					<div className={styles.chips}>
						{expertises.map((e) => (
							<button
								key={e}
								type="button"
								className={`${styles.chip} text-body-2 ${filters.expertise === e ? styles.chipActive : ""}`}
								onClick={() => toggleFilter("expertise", e)}
								aria-pressed={filters.expertise === e}
							>
								{e}
							</button>
						))}
					</div>
				</div>
				<div className={styles.filterRow}>
					<span className={`${styles.filterLabel} text-caption-1`}>
						Secteur
					</span>
					<div className={styles.chips}>
						{sectors.map((s) => (
							<button
								key={s}
								type="button"
								className={`${styles.chip} text-body-2 ${filters.sector === s ? styles.chipActive : ""}`}
								onClick={() => toggleFilter("sector", s)}
								aria-pressed={filters.sector === s}
							>
								{s}
							</button>
						))}
					</div>
				</div>
				<div className={styles.filterRow}>
					<span className={`${styles.filterLabel} text-caption-1`}>Gains</span>
					<div className={styles.chips}>
						{gains.map((g) => (
							<button
								key={g}
								type="button"
								className={`${styles.chip} text-body-2 ${filters.gain === g ? styles.chipActive : ""}`}
								onClick={() => toggleFilter("gain", g)}
								aria-pressed={filters.gain === g}
							>
								{g}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Count */}
			<p className={`${styles.count} text-body-2`}>
				{filteredStudies.length} cas client
				{filteredStudies.length > 1 ? "s" : ""}
			</p>

			{/* Grid */}
			<div className={styles.grid}>
				{filteredStudies.map((cs) => (
					<article key={cs.slug} className={styles.card}>
						<div className={styles.cardBadges}>
							<span className={`${styles.badge} text-caption-1`}>
								{cs.sector}
							</span>
							<span className={`${styles.badge} text-caption-1`}>
								{cs.expertise}
							</span>
						</div>

						<div className={styles.cardContent}>
							<p className={`${styles.cardClient} text-surtitle`}>
								{cs.metaCards[0].value}
							</p>
							<h3 className={`${styles.cardTitle} text-heading-5`}>
								<a href={`/nos-resultats/${cs.slug}`}>{cs.title}</a>
							</h3>
							<p className={`${styles.cardDesc} text-body-2`}>
								{cs.cardDescription}
							</p>
						</div>

						<div className={styles.cardStat}>
							<span className={`${styles.statValue} text-heading-3`}>
								{cs.highlightStat.value}
							</span>
							<span className={`${styles.statLabel} text-caption-1`}>
								{cs.highlightStat.label}
							</span>
						</div>

						<a
							href={`/nos-resultats/${cs.slug}`}
							className={`${styles.cardLink} text-body-2`}
						>
							Découvrez le cas →
						</a>
					</article>
				))}
			</div>

			{/* Show all link */}
			{(filters.expertise || filters.sector || filters.gain) && (
				<button
					type="button"
					className={`${styles.showAll} text-body-2`}
					onClick={() =>
						setFilters({ expertise: null, sector: null, gain: null })
					}
				>
					Tous les cas clients →
				</button>
			)}
		</div>
	);
}
