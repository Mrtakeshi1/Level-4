import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedResult, setSelectedResult] = useState(null);
    const [images, setImages] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const fetchData = async () => {
        console.log('Fetching data with query:', query);

        const encodedParams = new URLSearchParams();
        encodedParams.set('location_id', '45963');
        encodedParams.set('language', 'en_US');
        encodedParams.set('currency', 'USD');
        encodedParams.set('offset', '0');
        encodedParams.set('query', query);

        const options = {
            method: 'POST',
            url: 'https://tourist-attraction.p.rapidapi.com/search',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '239cf70ab9msh849fd2eecedac3fp1bb065jsn91dc022d4804',
                'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log('Response:', response.data);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchImages = async () => {
        console.log('Fetching images for selected result:', selectedResult);

        const encodedParams = new URLSearchParams();
        encodedParams.set('location_id', selectedResult.location_id);
        encodedParams.set('language', 'en_US');
        encodedParams.set('currency', 'USD');
        encodedParams.set('offset', '0');

        const options = {
            method: 'POST',
            url: 'https://tourist-attraction.p.rapidapi.com/photos',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '239cf70ab9msh849fd2eecedac3fp1bb065jsn91dc022d4804',
                'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log('Image Response:', response.data);
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const fetchSuggestions = async (query) => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', query);
        encodedParams.set('language', 'en_US');

        const options = {
            method: 'POST',
            url: 'https://tourist-attraction.p.rapidapi.com/typeahead',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '239cf70ab9msh849fd2eecedac3fp1bb065jsn91dc022d4804',
                'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
            },
            data: encodedParams,
        };

        try {
            const response = await axios.request(options);
            console.log('Suggestions:', response.data);
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    const openMap = (latitude, longitude) => {
        const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        window.open(mapUrl, '_blank');
    };

    const handleViewDetails = (result) => {
        setSelectedResult(result);
        fetchImages();
    };

    return (
        <div className="services-container">
            <h1 className="header-title">LandMarks</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        fetchSuggestions(e.target.value); // Fetch suggestions as the user types
                    }}
                    onKeyPress={handleKeyPress}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {/* Suggestions dropdown */}
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => setQuery(suggestion)}>{suggestion}</li>
                ))}
            </ul>
            {Array.isArray(searchResults) && searchResults.map((result, index) => (
                <div key={index} className="result-container">
                    <div className="image-box">
                        <img src={result.image_url} alt={result.name} style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="details">
                        <h2>{result.name}</h2>
                        <p>{result.description}</p>
                        <button onClick={() => openMap(result.latitude, result.longitude)}>Get Directions</button>
                        <button onClick={() => handleViewDetails(result)}>View Details</button>
                    </div>
                </div>
            ))}
            {selectedResult && (
                <div className="details">
                    <h2>{selectedResult.name}</h2>
                    <p>{selectedResult.description}</p>
                    <div className="images">
                        {images.map((image, index) => (
                            <img key={index} src={image.url} alt={`${selectedResult.name} - Image ${index + 1}`} style={{ maxWidth: '100%' }} />
                        ))}
                    </div>
                    <button onClick={() => openMap(selectedResult.latitude, selectedResult.longitude)}>Get Directions</button>
                </div>
            )}
        </div>
    );
}

export default Search;
