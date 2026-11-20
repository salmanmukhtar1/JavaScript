function showCountry() {

    let country = document.getElementById("country").value;

    let result = document.getElementById("result");

    if (country === "somalia") {

        result.innerHTML = `
            <h2>🇸🇴 Somalia</h2>
            <p><strong>Capital:</strong> Mogadishu</p>
            <p><strong>Population:</strong> 19.7 Million</p>
            <p><strong>Continent:</strong> Africa</p>
            <p><strong>Language:</strong> Somali</p>
            <p><strong>Currency:</strong> Somali Shilling</p>
        `;

    } else if (country === "egypt") {

        result.innerHTML = `
            <h2>🇪🇬 Egypt</h2>
            <p><strong>Capital:</strong> Cairo</p>
            <p><strong>Population:</strong> 118.4 Million</p>
            <p><strong>Continent:</strong> Africa</p>
            <p><strong>Language:</strong> Arabic</p>
            <p><strong>Currency:</strong> Egyptian Pound</p>
        `;

    } else if (country === "uk") {

        result.innerHTML = `
            <h2>🇬🇧 United Kingdom</h2>
            <p><strong>Capital:</strong> London</p>
            <p><strong>Population:</strong> 69.6 Million</p>
            <p><strong>Continent:</strong> Europe</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Currency:</strong> Pound Sterling</p>
        `;

    } else if (country === "usa") {

        result.innerHTML = `
            <h2>🇺🇸 United States</h2>
            <p><strong>Capital:</strong> Washington, D.C.</p>
            <p><strong>Population:</strong> 347 Million</p>
            <p><strong>Continent:</strong> North America</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Currency:</strong> US Dollar</p>
        `;

    } else if (country === "japan") {

        result.innerHTML = `
            <h2>🇯🇵 Japan</h2>
            <p><strong>Capital:</strong> Tokyo</p>
            <p><strong>Population:</strong> 123 Million</p>
            <p><strong>Continent:</strong> Asia</p>
            <p><strong>Language:</strong> Japanese</p>
            <p><strong>Currency:</strong> Japanese Yen</p>
        `;

    } else {

        result.innerHTML = `
            <h2>🌎 Explore the World</h2>
            <p>Please select a country.</p>
        `;

    }

}