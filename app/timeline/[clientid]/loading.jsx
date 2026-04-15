// app/timeline/[clientid]/loading.jsx
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>
      
      {/* Text */}
      <p className="text-xl font-semibold text-gray-500 animate-pulse">
        Loading friend details...
      </p>

    </div>
  );
}