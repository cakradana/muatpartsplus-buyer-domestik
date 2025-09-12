export default function layout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <nav className="fixed left-0 right-0 top-0 z-10 h-[60px] bg-red-800"></nav>
      <div className="flex h-screen bg-neutral-100 pt-[60px]">
        <aside className="w-[192px] flex-shrink-0 bg-white">
          sidebar component here
        </aside>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
