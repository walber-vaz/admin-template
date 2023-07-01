export default function Logo(): JSX.Element {
  return (
    <div className={`
      bg-white w-12 h-12 rounded-full
      flex flex-col items-center justify-center
    `}>
      <div className="w-3 h-3 rounded-full bg-red-600 mb-0.5"></div>
      <div className="flex mt-0.5">
        <div className="w-3 h-3 rounded-full bg-yellow-600 mr-0.5"></div>
        <div className="w-3 h-3 rounded-full bg-green-600 ml-0.5"></div>
      </div>
    </div>
  )
}
