import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function SearchBar() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
    };

    return (
        <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border-solid border-2">
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>


                        <input {...getInputProps({ placeholder: "Type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {  /*
                                console.log(suggestions)
                                <p>Latitude: {coordinates.lat}</p>
                                <p>Longitude: {coordinates.lng}</p>
                            */ }
                            {suggestions.map(suggestion => {
                                return (
                                    <div {...getSuggestionItemProps(suggestion)}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

            </PlacesAutocomplete>
            {/**
 *  <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
 *  <input type="search" name="" placeholder="Rechercher" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
 */}
        </div>
    )
}
