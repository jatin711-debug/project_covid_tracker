import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = ({ handelCountryChange }) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[setFetchedCountries]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect default=" " onChange={(e)=> handelCountryChange(e.target.value)}>
                <option value="global"> Global </option>
                {fetchedCountries.map((country,i)=><option key={i}value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        
    )
}

export default CountryPicker;