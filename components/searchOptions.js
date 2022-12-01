export default searchOptions = {
    idleTimePress: 100,
    minNumberOfCharacters: 0,
    searchOptions: {
        key: process.env.REACT_APP_API_KEY,
        language: 'en-GB',
        limit: 5,
        idxSet: 'POI'
    },
    autocompleteOptions: {
        key: process.env.REACT_APP_API_KEY,
        language: 'en-GB',
        resultSet: 'brand'
    },
    labels: {
        placeholder: 'Search for a location',
        noResultsMessage: 'No results found.'
    },
    units: 'kilometers',
    showSearchButton: true,
}