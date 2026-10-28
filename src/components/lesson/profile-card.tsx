import type { Profile } from "@/lib/types";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="thinker-profile">
      <header className="border-b border-border bg-panel-muted px-4 py-3">
        <div className="flex items-baseline gap-2">
          <h3 className="font-serif text-lg font-bold leading-tight text-foreground">
            {profile.name}
          </h3>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {profile.lifespan}
          </span>
        </div>
        <p className="mt-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          {profile.role}
        </p>
      </header>
      <ul className="flex-1 space-y-2 px-4 py-4">
        {profile.facts.map((fact, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="text-pretty font-serif text-[15px] leading-relaxed text-foreground">
              {fact}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Profiles({ profiles }: { profiles: Profile[] }) {
  if (profiles.length === 0) return null;
  return (
    <section id="thinkers" aria-labelledby="profiles-heading" className="reader-section">
      <h2
        id="profiles-heading"
        className="reader-section-title mb-6"
      >
        The thinkers
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </section>
  );
}
