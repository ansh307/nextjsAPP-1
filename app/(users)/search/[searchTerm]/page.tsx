import React from 'react'

type PageProps = {
    params : {
        searchTerm: string
    }
}

type searchResult = {
    organic_results:[
        {
            position:number;
            title :string;
            link : string;
            thumbnail : string
            snippet : string;
        }
    ]
}

const search =async (searchTerm : string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    )

    const data : searchResult = await res.json()
    return data
}

async function SearchResult({params : {searchTerm}} : PageProps) {
    const searchResults = await search(searchTerm)
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Search Results for: {searchTerm}</h2>
        <ul>
          {searchResults.organic_results.map((result, index) => (
            <li key={index} className="mb-4 mx-4 p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-blue-600 text-xl font-semibold">{result.title}</h3>
              <p className="text-gray-700 mt-2">{result.snippet}</p>
              <a href={result.link} className="text-green-600 hover:underline mt-2 block" target="_blank" rel="noopener noreferrer">
                {result.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default SearchResult
