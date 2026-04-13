const Count = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition">
          <p className="text-3xl font-bold text-blue-600">10</p>
          <h2 className="text-gray-600 mt-2">Total Friends</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition">
          <p className="text-3xl font-bold text-green-600">3</p>
          <h2 className="text-gray-600 mt-2">On Track</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition">
          <p className="text-3xl font-bold text-red-500">6</p>
          <h2 className="text-gray-600 mt-2">Need Attention</h2>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 text-center hover:shadow-lg transition">
          <p className="text-3xl font-bold text-purple-600">9</p>
          <h2 className="text-gray-600 mt-2">Interactions This Month</h2>
        </div>

      </div>
    </div>
  );
};

export default Count;