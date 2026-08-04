"use client";

import { AppHeader } from "@/components/layout/app-header";
import { SearchDialog } from "@/components/search/search-dialog";
import { SourcesView } from "@/components/sources/sources-view";

export default function SourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-serif text-foreground">
      <AppHeader />
      <SearchDialog />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <SourcesView />
      </main>
    </div>
  );
}
