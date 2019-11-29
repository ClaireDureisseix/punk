// sa fonction
// useEffect(() => {
//   api('/random')
//     .then(response => setBeers(response))
//     .catch(error => console.error(error));
// }, []);

// Pour 2 inputs
// const urlConstructor = (elt1, elt2) => {
//   let url = '';
//   if (elt1 && elt2) {
//     url = `?beer_name=${elt1}&abv_gt=${elt2}&per_page=10`;
//   }
//   if (elt1 && !elt2) {
//     url = `?beer_name=${elt1}&per_page=10`;
//   }
//   if (!elt1 && elt2) {
//     url = `?abv_gt=${elt2}&per_page=10`;
//   }
//   return url;
// };

// FETCH WORKING
// const fetchBeers = query => {
//   setName(name);
//   api(`?beer_name=${name}&per_page=10`)
//     .then(response => setBeers(response))
//     .catch(error => console.error(error));
// };

//************************************* */

// const Search = () => {
//   const [beers, setBeers] = useState([]);
//   const [query, setQuery] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   let cancel = '';

//   const fetchBeers = (updatedPageNb = '', query) => {
//     const pageNumber = updatedPageNb ? `&page=${updatedPageNb}` : '';
//     const searchUrl = `https://api.punkapi.com/v2/beers?beer_name=${query}${pageNumber}&per_page=10`;
//     if (cancel) {
//       cancel.cancel();
//     }
//     cancel = axios.CancelToken.source();
//     axios
//       .get(searchUrl, {
//         cancelToken: cancel.token
//       })
//       .then(res => {
//         const resultNotFoundMsg = !res.data.length
//           ? 'There are no more search results. Please try a new search'
//           : '';
//         setBeers(res.data);
//         setMessage(resultNotFoundMsg);
//         setLoading(false);
//       })
//       .catch(error => {
//         if (axios.isCancel(error) || error) {
//           setLoading(false);
//           setMessage('Failed to fetch the beers.');
//         }
//       });
//     // api(searchUrl)
//     //   .then(response => setBeers(response))
//     //   .catch(error => console.error(error));
//   };

//   const handleChange = async query => {
//     if (!query) {
//       setQuery(query);
//       setBeers([]);
//       setMessage('');
//     } else {
//       setQuery(query);
//       setLoading(true);
//       setMessage('');
//       await fetchBeers(1, query);
//     }
//   };

//   return (
//     <View>
//       {/* Search input */}

//       <TextInput
//         style={{ height: 40 }}
//         placeholder="Search by beer name!"
//         name="query"
//         value={query}
//         onChangeText={handleChange}
//       />

//       {/* Error message */}
//       {message &&
//         <Text>
//           {message}
//         </Text>}

//       {/* Loader */}
//       <Image
//         source={Loader}
//         className={`search-loading ${loading ? 'show' : 'hide'}`}
//         alt="loader"
//       />

//       <BeerList beers={beers} />
//     </View>
//   );
// };

// import React, { useState } from 'react';
// import { View, TextInput, Text, Image } from 'react-native';
// import api from '../api';
// import Loader from '../../loader.gif';

// import BeerList from './BeerList';
// import Pagination from './Pagination'

// const Search = () => {
//   const [beers, setBeers] = useState([]);
//   const [query, setQuery] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [totalRes, setTotalRes] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [currentPageNo, setCurrentPageNo] = useState(0);

//   const getPageCount = ( total, denominator ) => {
//     const divisible	= 0 === total % denominator;
//     const valueToBeAdded = divisible ? 0 : 1;
//     return Math.floor( total/denominator ) + valueToBeAdded;
//   };

//   const fetchBeers = (updatedPageNb = '', query) => {
//     const pageNumber = updatedPageNb ? `&page=${updatedPageNb}` : '';
//     const searchUrl = `?beer_name=${query}${pageNumber}&per_page=10`;
//     api(searchUrl)
//       .then(res => {
//         const total = res.data.total;
// 				const totalPagesCount = getPageCount( total, 10 );
//         const resultNotFoundMsg = !res.length
//           ? 'There are no more search results. Please try a new search'
//           : '';
//         setBeers(res);
//         setMessage(resultNotFoundMsg);
//         setLoading(false);
//         setTotalRes(total);
//         setTotalPages(totalPagesCount);
//         setCurrentPageNo(updatedPageNb);
//       })
//       .catch(error => {
//         setLoading(false);
//         setMessage('Failed to fetch the beers.');
//       });
//   };

//   const handleChange = async query => {
//     if (!query) {
//       setQuery(query);
//       setBeers([]);
//     } else {
//       setQuery(query);
//       setLoading(true);
//       setMessage('');
//       await fetchBeers(1, query);
//     }
//   };

//   const handlePageClick = async type => {
//     //event.preventDefault();
//     const updatedPageNb = ('prev' === type) ? currentPageNo -1 : currentPageNo + 1
//     if ( !loading) {
//       setLoading(true);
//       setMessage('');
//       await fetchBeers( updatedPageNb, query)
//     }
//   }

//   const showPrevLink = 1 < currentPageNo;
//   const showNextLink = totalPages > currentPageNo;

//   return (
//     <View>
//       {/* Search input */}

//       <TextInput
//         style={{ height: 40 }}
//         placeholder="Search by beer name!"
//         name="query"
//         value={query}
//         onChangeText={handleChange}
//       />

//       {/* Error message */}
//       <>
//       {message &&
//         <Text>
//           {message}
//         </Text>}
//       </>

//       <>
//       {/* Loader */}
//       {loading &&
//       <Image
//         source={Loader}
//         alt="loader"
//       />}
//       </>

//       <Pagination
//         showPrevLink={showPrevLink}
//         showNextLink={showNextLink}
//         handlePrevClick={ () => handlePageClick('prev')}
//         handleNextClick={ () => handlePageClick('next')}
//       />

//       <BeerList beers={beers} />
//     </View>
//   );
// };

// export default Search;