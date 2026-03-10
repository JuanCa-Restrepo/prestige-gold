    function DividerLuxury({ className = "" }) {
  return (
    <div className={`flex items-center justify-center py-12 md:py-16 ${className}`}>
      <div className="flex w-full max-w-[680px] items-center justify-center gap-4 px-4">
        <div className="h-px flex-1 bg-[var(--color-gold)] opacity-45" />

        <div className="flex items-center gap-2">
          <span className="h-[3px] w-[3px] rounded-full bg-[var(--color-gold)] opacity-60" />
          <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-gold)] opacity-80" />
          <span className="h-[9px] w-[9px] rounded-full bg-[var(--color-gold)]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[var(--color-gold)] opacity-80" />
          <span className="h-[3px] w-[3px] rounded-full bg-[var(--color-gold)] opacity-60" />
        </div>

        <div className="h-px flex-1 bg-[var(--color-gold)] opacity-45" />
      </div>
    </div>
  );
}

export default DividerLuxury;