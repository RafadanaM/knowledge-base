export default function Home() {
  return (
    <div className="flex h-[calc(100%-40px)] flex-col items-center justify-center">
      <h2 className="text-8xl font-bold">Welcome</h2>
      <div className="my-4">
        <span className="text-2xl font-medium">
          This website contains things that I find:
        </span>
        <ul role="list" className="mt-2 list-inside list-disc">
          <li className="text-lg font-bold text-primary">Useful</li>
          <li className="text-lg font-bold text-primary">Interesting</li>
          <li className="text-lg font-bold text-primary">Others</li>
        </ul>
      </div>

      <span className="font-medium">
        Will I use these things in the future?
        <span className="font-bold text-primary"> Maybe..</span>
      </span>
    </div>
  );
}
