const filters = [
  { label: "Todos", value: "all" },
  { label: "Manillas", value: "manillas" },
  { label: "Anillos", value: "anillos" },
  { label: "Dijes", value: "dijes" },
  { label: "Otros", value: "otros" },
];

function CatalogFilters({ activeFilter, setActiveFilter }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.22em] transition md:px-6 md:py-3 ${
              isActive
                ? "border-[var(--color-gold)] bg-[rgba(198,165,92,0.08)] text-[var(--color-gold)]"
                : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export default CatalogFilters;