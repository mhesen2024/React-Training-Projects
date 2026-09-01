export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-stone-900/25 backdrop-blur-sm">
      <div className="rounded-2xl bg-white p-7 shadow-soft">
        <div className="loader" aria-label="Loading"></div>
      </div>
    </div>
  )
}
