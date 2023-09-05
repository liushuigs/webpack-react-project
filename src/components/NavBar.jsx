export default function Navbar() {
  return (
    <div className="flex h-screen overflow-hidden flex-col w-[240px] border-r">
      <div className="h-[56px] px-4">title</div>
      <div className="flex-1 overflow-scroll px-4 border-b border-t">menu</div>
      <div className="px-4 py-4">footer</div>
    </div>
  )
}