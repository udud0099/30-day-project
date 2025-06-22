import StarRating from "./components/StarRating";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <h1 className="text-white font-bold text-8xl">
          <StarRating />
        </h1>
      </div>
    </>
  );
}
