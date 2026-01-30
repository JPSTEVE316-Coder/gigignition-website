'use client'

export default function BackgroundEffects() {
  return (
    <>
      {/* Grid Background */}
      <div className="bg-grid" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {[10, 20, 30, 40, 50, 60, 70, 80, 90, 95].map((left, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ignition-gold rounded-full animate-float-up"
            style={{
              left: `${left}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
