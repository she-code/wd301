import React from "react";

export default function Comment() {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex justify-between">
        <p className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
          Owner
        </p>
        <p>time</p>
      </div>

      <p>comment</p>
    </div>
  );
}
