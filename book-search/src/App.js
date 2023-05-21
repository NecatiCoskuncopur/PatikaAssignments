import { useLayoutEffect, useRef, useState } from 'react';
import axios from 'axios';

import { Header, Icon, Products } from './components';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  const API_KEY = 'AIzaSyDVVdi-VgvCQJ8dfOizLC8M6yElny1h9ow';

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === '') return;

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
    setSearch('');
  };

  const hasData = data?.length > 0 && data !== undefined;

  return (
    <main>
      <div ref={ref}>
        <Header
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      {hasData ? <Products data={data} /> : <Icon height={height} />}
    </main>
  );
};

export default App;
