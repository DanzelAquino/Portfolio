const Card = ({ title, items }) => {
  return (
    <div className="p-6 border rounded-lg shadow bg-white">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="list-disc list-inside text-gray-700">
        {items && items.length > 0 ? (
          items.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li className="text-gray-500">—</li>
        )}
      </ul>
    </div>
  );
};

export default Card;
