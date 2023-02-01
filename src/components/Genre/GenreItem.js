const GenreItem = ({ name }) => {
  return (
    <div
      className="mb-3 flex w-4/5 gap-2 rounded border-l-4 border-red bg-gray-blue py-2 pl-2"
      onClick={() => {
        console.log("discover");
      }}
    >
      <p className="text-white">{name}</p>
      <div className="text-white">+</div>
    </div>
  );
};

export default GenreItem;
