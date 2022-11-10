
export default function LoadingSpinner() {
  return (
    <div className="w-[4%] mt-44 mx-auto">
      <div className="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full text-green-400" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
    </div>
  )
}
