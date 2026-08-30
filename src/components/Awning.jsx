// Striped shopfront awning — scallops cut with SVG so it reads like real canvas.
export default function Awning() {
  const stripes = 14
  return (
    <div aria-hidden="true" className="w-full overflow-hidden leading-none">
      <div className="flex h-10 sm:h-14">
        {Array.from({ length: stripes }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-sauce' : 'bg-paper'}`}
          />
        ))}
      </div>
      <svg viewBox={`0 0 ${stripes * 20} 10`} preserveAspectRatio="none" className="block h-4 w-full sm:h-5">
        {Array.from({ length: stripes }).map((_, i) => (
          <path
            key={i}
            d={`M ${i * 20} 0 A 10 10 0 0 0 ${(i + 1) * 20} 0 Z`}
            fill={i % 2 === 0 ? '#d9442e' : '#f8f3e7'}
          />
        ))}
      </svg>
    </div>
  )
}
