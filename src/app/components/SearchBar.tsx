'use client';
 
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { UseFinderGame } from "@/app/manager/useFinderGame"

 
export default function SearchBar({ placeholder }: { placeholder: string }) {
  const [words, setWords] = useState("");
  const updateTxtFinderGame = UseFinderGame((state) => state.updateTxtFinderGame);

  const handleChangeTxtFinder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWords(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTxtFinderGame(words);
    console.log(words)
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-auto">
      <form onSubmit={handleSearch} method="post" className="flex w-full">
        <input
          className="peer w-full flex rounded-2xl border-0 py-2 pl-10 text-sm placeholder:text-gray-500 text-gray-500 focus:outline-none bg-slate-200"
          placeholder={placeholder}
          onChange={handleChangeTxtFinder}
          value={words}
        />
        <button type="submit" className="text-gray-400">
          <FaSearch 
            className={`absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 transition-colors ${
              words.length > 0 ? 'text-orange-400' : 'text-gray-400'
            }`}
          />
        </button>
      </form>
    </div>
  );
}
