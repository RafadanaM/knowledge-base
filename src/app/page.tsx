export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100%-40px)]">
      <h2 className="text-8xl font-bold">Welcome</h2>
      <div className="my-4">
        <span className="text-2xl font-medium">
          This website contains things that I find:
        </span>
        <ul role="list" className="list-disc list-inside mt-2">
          <li className="text-orange-400 text-lg font-bold">Useful</li>
          <li className="text-orange-400 text-lg font-bold">Interesting</li>
          <li className="text-orange-400 text-lg font-bold">Others</li>
        </ul>
      </div>

      <span className="font-medium">
        Will I use these things in the future?
        <span className="text-orange-400 font-bold"> Maybe..</span>
      </span>
    </div>
  );
}
