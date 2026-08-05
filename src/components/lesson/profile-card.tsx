import type { Profile } from "@/lib/types";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius)] border-2 border-foreground bg-panel shadow-[4px_4px_0_var(--border)]">
      <header className="border-b-2 border-foreground bg-panel-muted px-4 py-3">
        <div className="flex items-baseline gap-2">
          <h3 className="font-serif text-lg font-bold leading-tight text-foreground">
            {profile.name}
          </h3>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            {profile.lifespan}
          </span>
        </div>
        <p className="mt-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
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
    <section aria-labelledby="profiles-heading" className="mt-12">
      <h2
        id="profiles-heading"
        className="mb-4 text-balance font-serif text-2xl font-bold leading-snug text-foreground"
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
