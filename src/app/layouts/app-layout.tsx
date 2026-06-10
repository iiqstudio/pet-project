export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>App layout</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
