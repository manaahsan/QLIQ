export const InfluencerCard = () => {
  return (
    <div className="relative bg-[url('/assets/images/influencer.jpg')]  bg-center bg-no-repeat bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-2xl mx-auto m-10">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start">
          <h1 className="text-white text-xl font-bold">Ama Cruize</h1>
          <button className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-8 mb-6">
          <div className="text-center">
            <div className="text-white text-2xl font-bold">$1M</div>
            <div className="text-gray-300 text-sm">Earned</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">$2.9M</div>
            <div className="text-gray-300 text-sm">Potential</div>
          </div>
          <div className="text-center">
            <div className="text-white text-2xl font-bold">$2M</div>
            <div className="text-gray-300 text-sm">Saved</div>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <span className="px-3 py-2 bg-amber-600 text-white text-xs rounded-full font-medium">
            Bronze Member
          </span>
          <span className="px-3 py-2 border border-gray-400 text-white text-xs rounded-full">
            QLIQR Since 2025
          </span>
          {/* <span className="px-2 py-1 border border-gray-400 text-white text-xs rounded-full">
              50
            </span> */}
        </div>

        <p className="text-white text-sm mb-6 leading-relaxed">
          I am a Social Media Influencer based in Austria, I am passionate about
          beauty products!
        </p>
        <button className="w-full py-3 border border-gray-400 text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
};
