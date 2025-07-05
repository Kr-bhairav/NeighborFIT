const MatchCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h4 className="text-lg font-bold">{data.name}</h4>
      <p className="text-gray-600">Score: {data.score.toFixed(2)}</p>

      <div className="grid grid-cols-3 gap-2 text-sm mt-2">
        {Object.entries(data).map(([key, val]) => (
          key !== "_id" && key !== "__v" && key !== "score" && key !== "name" && (
            <div key={key}>
              <strong>{key}:</strong> {val}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default MatchCard;
