"use client";
import { resources } from "./data";
import { useState, useMemo } from "react";
 
export default function LibraryPage() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
 
  const grouped = useMemo(() => {
    return resources.reduce((acc, res) => {
      (acc[res.category] = acc[res.category] || []).push(res);
      return acc;
    }, {});
  }, []);
 
  const filtered = useMemo(() => {
    if (!query.trim()) return grouped;
    const lower = query.toLowerCase();
    const filteredGroups = {};
 
    for (const [category, items] of Object.entries(grouped)) {
      const matched = items.filter(
        (item) =>
          item.title.toLowerCase().includes(lower) ||
          item.description.toLowerCase().includes(lower)
      );
      if (matched.length) filteredGroups[category] = matched;
    }
 
    return filteredGroups;
  }, [query, grouped]);
 
  return (
    <main
      className={`${
        dark ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-green-100 to-teal-100"
      } min-h-screen px-6 py-12 transition-colors`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10">
          <h1 className="text-4xl font-bold pt-15 text-teal-700"> Open Tech Resource Library</h1>
          <button
          className= 'mt-10'
            onClick={() => setDark(!dark)}
            className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition pt-15"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
 
        <p className="text-lg mb-6">
          Explore the best free and open learning resources across frontend,
          backend, DevOps, data, and AI.
        </p>
 
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search for a topic or resource..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full p-4 rounded-xl border focus:outline-none text-gray-800 ${
              dark
                ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-600"
                : "bg-white border-gray-200 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>
 
        {Object.entries(filtered).length > 0 ? (
          Object.entries(filtered).map(([category, items]) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-teal-700">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 rounded-xl border transition hover:scale-[1.02] hover:shadow-md ${
                      dark
                        ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                        : "border-gray-200 bg-white hover:bg-gray-100"
                    }`}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-teal-700">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </a>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No results found for "<strong>{query}</strong>"
          </p>
        )}
      </div>
    </main>
  );
}