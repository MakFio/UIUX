import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { GifCard } from '../components/GifCard';

const Home = () => {
  // Статические ссылки на GIF-файлы
  const initialGifs = [
    'https://media1.tenor.com/m/XasjKGMk_wAAAAAC/load-loading.gif',
    'https://media1.tenor.com/m/zecVkmevzcIAAAAC/please-wait.gif',
    'https://media1.tenor.com/m/7_04RHsB3AEAAAAC/loading-mys5.gif',
    'https://media1.tenor.com/m/Fv9Tr4SKoxAAAAAC/load-blue.gif',
    'https://media1.tenor.com/m/ZseF5Ruyd_UAAAAC/cargando-loading.gif',
  ];

  const [gifs, setGifs] = useState<string[]>(initialGifs);

  const handleSearch = (query: string) => {
    // Поисковая строка пока статична, функция поиска не используется
    console.log(`Поиск по запросу: ${query}`);
  };

  return (
    <div>
      <h1>Поиск GIF-файлов</h1>
      <SearchBar onSearch={handleSearch} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
        {gifs.map((gifUrl, index) => (
          <GifCard key={index} gifUrl={gifUrl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
